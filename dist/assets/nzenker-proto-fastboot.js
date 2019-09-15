define('~fastboot/app-factory', ['nzenker-proto/app', 'nzenker-proto/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});

define("nzenker-proto/initializers/ajax", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ajax-service',

    initialize() {// noop
      // This is to override Fastboot's initializer which prevents ember-fetch from working
      // https://github.com/ember-fastboot/ember-cli-fastboot/blob/master/fastboot/initializers/ajax.js
    }

  };
  _exports.default = _default;
});
define("nzenker-proto/initializers/error-handler", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Initializer to attach an `onError` hook to your app running in fastboot. It catches any run loop
   * exceptions and other errors and prevents the node process from crashing.
   *
   */
  var _default = {
    name: 'error-handler',
    initialize: function () {
      if (!Ember.onerror) {
        // if no onerror handler is defined, define one for fastboot environments
        Ember.onerror = function (err) {
          const errorMessage = "There was an error running your app in fastboot. More info about the error: \n ".concat(err.stack || err);
          console.error(errorMessage);
        };
      }
    }
  };
  _exports.default = _default;
});
define("nzenker-proto/instance-initializers/responsive-meta", ["exports", "ember-responsive-image/services/responsive-image"], function (_exports, _responsiveImage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* appInstance */
  {
    let meta = {"advanced.jpg":{"images":[{"image":"/responsive-images/advanced2000w.jpg","width":2000,"height":1333},{"image":"/responsive-images/advanced1000w.jpg","width":1000,"height":667},{"image":"/responsive-images/advanced600w.jpg","width":600,"height":400},{"image":"/responsive-images/advanced300w.jpg","width":300,"height":200}]},"blog-cover.jpg":{"images":[{"image":"/responsive-images/blog-cover2000w.jpg","width":2000,"height":667},{"image":"/responsive-images/blog-cover1000w.jpg","width":1000,"height":333},{"image":"/responsive-images/blog-cover600w.jpg","width":600,"height":200},{"image":"/responsive-images/blog-cover300w.jpg","width":300,"height":100}]},"built-by.jpg":{"images":[{"image":"/responsive-images/built-by2000w.jpg","width":2000,"height":1333},{"image":"/responsive-images/built-by1000w.jpg","width":1000,"height":667},{"image":"/responsive-images/built-by600w.jpg","width":600,"height":400},{"image":"/responsive-images/built-by300w.jpg","width":300,"height":200}]},"chris.jpg":{"images":[{"image":"/responsive-images/chris2000w.jpg","width":2000,"height":2273},{"image":"/responsive-images/chris1000w.jpg","width":1000,"height":1136},{"image":"/responsive-images/chris600w.jpg","width":600,"height":682},{"image":"/responsive-images/chris300w.jpg","width":300,"height":341}]},"design.jpg":{"images":[{"image":"/responsive-images/design2000w.jpg","width":2000,"height":1504},{"image":"/responsive-images/design1000w.jpg","width":1000,"height":752},{"image":"/responsive-images/design600w.jpg","width":600,"height":451},{"image":"/responsive-images/design300w.jpg","width":300,"height":226}]},"ember.jpg":{"images":[{"image":"/responsive-images/ember2000w.jpg","width":2000,"height":1504},{"image":"/responsive-images/ember1000w.jpg","width":1000,"height":752},{"image":"/responsive-images/ember600w.jpg","width":600,"height":451},{"image":"/responsive-images/ember300w.jpg","width":300,"height":226}]},"ghost-icon.png":{"images":[{"image":"/responsive-images/ghost-icon2000w.png","width":2000,"height":2000},{"image":"/responsive-images/ghost-icon1000w.png","width":1000,"height":1000},{"image":"/responsive-images/ghost-icon600w.png","width":600,"height":600},{"image":"/responsive-images/ghost-icon300w.png","width":300,"height":300}]},"tags.jpg":{"images":[{"image":"/responsive-images/tags2000w.jpg","width":2000,"height":1333},{"image":"/responsive-images/tags1000w.jpg","width":1000,"height":667},{"image":"/responsive-images/tags600w.jpg","width":600,"height":400},{"image":"/responsive-images/tags300w.jpg","width":300,"height":200}]},"team.jpg":{"images":[{"image":"/responsive-images/team2000w.jpg","width":2000,"height":1156},{"image":"/responsive-images/team1000w.jpg","width":1000,"height":578},{"image":"/responsive-images/team600w.jpg","width":600,"height":347},{"image":"/responsive-images/team300w.jpg","width":300,"height":173}]},"welcome.jpg":{"images":[{"image":"/responsive-images/welcome2000w.jpg","width":2000,"height":1333},{"image":"/responsive-images/welcome1000w.jpg","width":1000,"height":667},{"image":"/responsive-images/welcome600w.jpg","width":600,"height":400},{"image":"/responsive-images/welcome300w.jpg","width":300,"height":200}]},"writing.jpg":{"images":[{"image":"/responsive-images/writing2000w.jpg","width":2000,"height":1333},{"image":"/responsive-images/writing1000w.jpg","width":1000,"height":667},{"image":"/responsive-images/writing600w.jpg","width":600,"height":400},{"image":"/responsive-images/writing300w.jpg","width":300,"height":200}]}};

    _responsiveImage.default.reopen({
      meta
    });
  }

  var _default = {
    name: 'responsive-meta',
    initialize
  };
  _exports.default = _default;
});//# sourceMappingURL=nzenker-proto-fastboot.map
