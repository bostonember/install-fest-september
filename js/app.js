(function() {
  var App = Ember.Application.create();

  App.Router.map(function() {
    this.route('forms');
    this.route('actions');
    this.resource('fruits', function() {
      this.route('all');
      this.resource('fruit', { path: '/:fruit_id' });
    });
  });

  App.FruitRoute = Ember.Route.extend({
    model: function() {
      return {};
    }
  });

  //App.FormsRoute - input element and bound properties
  //App.ActionsRoute - toggle boolean property
  //App.FruitsRoute && App.FruitsIndexRoute
  //App.FruitsAllRoute
  //App.Fruit

})();
