(function() {
  var App = Ember.Application.create(),
    fruits = [{
      id: 'apple'
    }, {
      id: 'banana'
    }];

  App.Router.map(function() {
    this.route('forms');
    this.route('actions');
    this.resource('fruits', function() {
      this.resource('fruit', { path: '/:fruit_id' });
    });
  });

  App.ActionsController = Ember.ObjectController.extend({
    red: false,
    actions: {
      toggleColor: function() {
        this.toggleProperty('red');
      }
    }
  });

  App.FruitsRoute = Ember.Route.extend({
    model: function() {
      return fruits;
   }
  });

  App.FruitRoute = Ember.Route.extend({
    model: function(params) {
      return fruits.filterBy('id', params.fruit_id)[0];
    }
  });

  App.FruitController = Ember.ObjectController.extend({
    isModelEmpty: function() {
      return this.get('model').length > 0;
    }.property('model.@each')
  });

  //App.FormsRoute - input element and bound properties
  //App.ActionsRoute - toggle boolean property
  //App.FruitsRoute && App.FruitsIndexRoute
  //App.FruitsAllRoute
  //App.Fruit

})();
