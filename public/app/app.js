var app = angular.mode('portfolio', ['ngRoute', 'myapp.controllers']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'partials/index', controller: 'IndexController'})
    .when('/about', {templateUrl: 'partials/about', controller: 'AboutController'})
    .when('/projects', {templateUrl: 'partials/projects', controller: 'ProjectsController'})
    .therwise({redirectTo:'/'})

}])
.config(['$locationProvider', function($locationProvider){
  $locationProvider.html5Mode(true);
}]);
