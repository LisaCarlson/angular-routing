var app = angular.module("CalcApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/add', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/div', {
        templateUrl: 'partials/div.html',
        controller: 'DivController'
      })
      .when('/div/:num1/:num2', {
        templateUrl: 'partials/div.html',
        controller: 'DivController'
      })
      // .otherwise({
      //   redirectTo: '/'
      // });
    $locationProvider.html5Mode(true);
});

app.controller("GlobalController", function ($scope, $routeParams, $location) {  
  $scope.add = function(){
    $location.url('/add/'+$scope.number1+'/'+$scope.number2);
    $scope.number1 = '';
    $scope.number2 = '';

  }
  $scope.div = function(){
    $location.url('/div/'+$scope.number1+'/'+$scope.number2)
    $scope.number1 = '';
    $scope.number2 = '';
  }
});

app.controller("AddController", function ($scope, $routeParams, $location) {
  var query = $location.search();
  if (Object.keys(query).length) {
    $scope.result = Number(query.x)+Number(query.y);
  }
  else {
    $scope.result = Number($routeParams.num1) + Number($routeParams.num2);
  }
});

app.controller('DivController', function ($scope, $routeParams, $location){
  var query = $location.search();
  if (Object.keys(query).length) {
    $scope.result = Number(query.x)/Number(query.y);
  }
  else {
    $scope.result = Number($routeParams.num1) / Number($routeParams.num2);
  }
});