var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope){
  $scope.message = 'Home Page'
}]);

controllers.controller('AboutController', ['$scope', function($scope){
  $scope.message = 'About Page'
}]);

controllers.controller('ProjectsController', ['$scope', function($scope){
  $scope.message = 'Projects Page'
}]);
