var app = angular.module("RoutingApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
    $locationProvider.html5Mode(true);
});

app.controller("HomeController", function ($scope) {
  $scope.message = "Welcome!"
});

app.controller('DogsController', function($scope){
  $scope.message = "Woof Woof!"
});