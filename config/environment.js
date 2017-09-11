/* eslint-env node */
'use strict';

/* eslint-disable complexity */
module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'oni-blueprinter',
    environment,
    rootURL: '/',
    locationType: 'auto',
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
      'default-src': '\'none\'',
      'script-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\'',
      'font-src': '\'self\'',
      'connect-src': '\'self\' http://localhost:8000 https://safe-mountain-24411.herokuapp.com',
      'img-src': '\'self\' http://image.tmdb.org https://image.tmdb.org http://www.gravatar.com https://www.gravatar.com',
      'style-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\'',
      'media-src': '\'self\''
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
