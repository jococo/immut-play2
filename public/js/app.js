
require.config({
  map: {
    '*': {
      'knockout': 'knockout.debug'
    }
  }
});

require(['knockout', 'ko/title'], function(ko) {
  require(['domReady'], function(domReady) {
    domReady(function() {
      ko.applyBindings();
    });
  });
});