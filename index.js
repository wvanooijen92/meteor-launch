#!/usr/bin/env node
"use strict";

const Vorpal = require('vorpal')(),
      Path = require('path'),
      _ = require('underscore');

const Meteor = require('./lib/meteor'),
      Hockey = require('./lib/hockey'),
      iTunes = require('./lib/iTunes');

const launchFile = Path.join(process.cwd(), 'launch.json');
const launchVars = require(launchFile);
const superEnv = _.extend(env, process.env);

Vorpal
  .command('build', 'Builds the Meteor app in the .build folder')
  .action(function(args) {
    Meteor.build(superEnv, (result) => {
      return
    })
  });

Vorpal
  .command('hockey', 'Build and deploy to Hockey')
  .action(function(args) {
    Meteor.build(superEnv, (result) => {
      Hockey.upload(superEnv, (result) => {
        return
      })
    })
  });

Vorpal
  .command('testflight', 'Build and deploy to TestFlight')
  .action(function(args) {
    Meteor.build(superEnv, (result) => {
      iTunes.uploadTestFlight(superEnv, (result) => {
        return
      })
    })
  });

Vorpal
  .command('appstore', 'Build and deploy to iTunes App Store')
  .action(function(args) {
    Meteor.build(superEnv, (result) => {
      iTunes.uploadAppStore(superEnv, (result) => {
        return
      })
    })
  });

Vorpal
  .parse(process.argv);

