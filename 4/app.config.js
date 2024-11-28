import 'dotenv/config';

export default {
  name: "repo - rater",
  slug: "repo-rater",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  newArchEnabled: true,
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    "supportsTablet": true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
  },
  web: {
    "favicon": "./assets/favicon.png"
  },
  extra: {
    env: process.env.ENV,
    clientUri: process.env.APOLLO_URI,
  }
}
