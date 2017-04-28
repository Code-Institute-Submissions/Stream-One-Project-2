//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['RouteControllers']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

    when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	}).
      when('/AddNewOrder', {
		templateUrl: 'templates/add_order.html',
		controller: 'AddOrderController'
	}).
      when('/map', {
		templateUrl: 'templates/map.html',
		controller: 'AddMapController'
	}).
      when('/form', {
		templateUrl: 'templates/form.html',
		controller: 'AddFormController'
	}).
      when('/islands', {
		templateUrl: 'templates/islands.html',
		controller: 'AddIslandsController'
	}).
      when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
    });
}]);






