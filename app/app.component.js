(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>AngularAttack 2016</h1><p>Your project runs!</p><a href="admin.html">Back to Admin Page</a>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));