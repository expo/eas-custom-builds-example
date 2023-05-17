import assert from 'assert';

module.exports = {
  expo: {
    name: 'eas-custom-builds-example',
    slug: 'eas-custom-builds-example',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.exponent.eascustombuildsexample',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.exponent.eascustombuildsexample',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: resolveProjectId(),
      },
    },
    owner: 'exponent',
  },
};

function resolveProjectId() {
  if (process.env.EXPO_LOCAL) {
    assert(process.env.LOCAL_PROJECT_ID, 'Set LOCAL_PROJECT_ID in .envrc.local.');
    return process.env.LOCAL_PROJECT_ID;
  } else if (process.env.EXPO_STAGING) {
    return '59284232-d5fe-40ee-8f4e-4e9bf74aad78';
  } else {
    return 'b06749c9-fe1e-481a-a655-70b6d26aa5d2';
  }
}
