# Meteor Launch

Automating meteor builds to the AppStore, TestFlight, Hockey, Google Play, and more later.

## Before you build

First, clone all these files in to your meteor project. The fastlane files are in the `.fastlane` directory, so meteor will ignore them.

### Fastlane

Install fastlane:

~~~
sudo gem install fastlane
~~~

### Android Key

This will generate a key to sign your Android builds, so they can go to Hockey and Google Play:

~~~
keytool -genkey -alias your-app-name -keyalg RSA \
    -keysize 2048 -validity 10000
~~~

### mobile-config.js

Open `mobile-config.js` and fill out all your info.

### Environment Variables

Copy and set all your environment variables:

~~~
cp .fastlane/.env.example .fastlane/.env
~~~

### cordova-ios-requires-fullscreen

iOS9 introduced the split screen stuff for iPad, which means we either have to specify how to handle that or require fullscreen. You can fix this with [cordova-ui-requires-fullscreen](https://www.npmjs.com/package/cordova-ios-requires-fullscreen)

~~~
meteor add cordova:cordova-ui-requires-fullscreen@0.0.2
~~~

## Deploying

### Version/Build

*Before building, you should adjust your version and build number accordingly in `mobile-config.js`.*

### Metadata

You can use the files in the `.fastlane/metadata` folder to edit the data that will be uploaded to iTunesConnect.

### TestFlight

This command will:

- build meteor
- build app archive
- generate screenshots
- install provisioning profile
- upload to TestFlight
- take forever
- ping hipchat
- alert testers

~~~
./launch beta servername.com
~~~

### Hockey

This command will:

- build meteor
- build ios app archive
- generate ios screenshots
- install ios provisioning profile
- upload to Hockey
- sign and align android apk
- upload to Hockey
- ping hipchat
- alert testers

~~~
./launch hockey servername.com
~~~

### AppStore

This command will:

- build meteor
- build app archive
- generate screenshots
- install provisioning profile
- upload screenshots
- upload to AppStore
- take forever
- ping hipchat
- alert testers

~~~
./launch deploy servername.com
~~~

### Google Play

Coming soon
