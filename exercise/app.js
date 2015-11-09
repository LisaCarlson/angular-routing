var app = angular.module("MyApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
    $locationProvider.html5Mode(true);
});

app.controller("ProjectsController", function ($scope) {
  $scope.message = 'Have a look at my projects';
  $scope.activeTab = 'projects';
})

app.controller("BioController", function ($scope) {
  $scope.message = 'Have a look at my biography';
  $scope.activeTab = 'bio';
})

app.controller("ResumeController", function ($scope) {
  $scope.message = 'Have a look at my resume';
  $scope.activeTab = 'resume';
})

app.controller("GlobalController",function ($scope) {
  
})






