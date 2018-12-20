/* eslint-env node */
'use strict';

/* eslint-disable complexity */
module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'oni-blueprinter',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: 'oni-blueprinter.firebaseapp.com',
      databaseURL: 'https://oni-blueprinter.firebaseio.com',
      projectId: 'oni-blueprinter',
      storageBucket: 'oni-blueprinter.appspot.com',
      messagingSenderId: process.env.FIREBASE_SENDER_ID
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'script-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\' apis.google.com',
      'font-src': '\'self\' https://fonts.gstatic.com/',
      'connect-src': '\'self\' wss://*.firebaseio.com https://*.googleapis.com',
      'img-src': '\'self\'',
      'style-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\' https://fonts.gstatic.com/ https://fonts.googleapis.com',
      'media-src': '\'self\'',
      'frame-src': '\'self\' https://*.firebaseapp.com'

      
    };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  /* eslint-disable no-empty */
  if (environment === 'production') {

  }

  return ENV;
};
/* eslint-enable complexity, no-empty */
