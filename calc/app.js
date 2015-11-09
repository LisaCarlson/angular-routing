var app = angular.module("CalcApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/div/:num1/:num2', {
        templateUrl: 'partials/div.html',
        controller: 'DivController'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
});

app.controller("GlobalController", function ($scope, $routeParams) {  
  $scope.submit = "Home"
});

app.controller("AddController", function ($scope, $routeParams) {
  $scope.result = Number($routeParams.num1) + Number($routeParams.num2);
});

app.controller('DivController', function ($scope, $routeParams){
  $scope.result = Number($routeParams.num1) / Number($routeParams.num2);
});