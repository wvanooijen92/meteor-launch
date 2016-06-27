import { execSync as ExecSync } from "child_process";

const uploadPlayStore = (env) => {

  return new Promise((resolve, reject) => {
    if (!Util.hasPlatform("android")) {
      console.log("Skipping Android upload to Play Store...");
      return resolve();
    }

    console.log('Uploading to Google Play Store...');
    const playCommand = `
      playup \
        --auth $PLAY_API_KEY \
        $ANDROID_BUILD_FOLDER/production.apk
    `;
    ExecSync(playCommand, {
      stdio: [0,1,2],
      env: env,
    });

    return resolve();
  });
}

export default {
  uploadPlayStore,
}
