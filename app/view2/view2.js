'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$timeout',function($scope,$timeout) {

  $scope.demo="demo0";
  $scope.tiere=["hund 0","katze 0"];

  function changeDemo1(){$scope.demo="demo1";$scope.tiere.push("maus 1")};

  function changeDemo2(){$scope.demo="demo2";$scope.tiere.push("nilpferd 2")};

  function changeDemo3(){$scope.demo="demo3";$scope.tiere.push("giraffe 3")};

  function changeDemo4(){$scope.demo="demo4";$scope.tiere.push("schlange 4")};

  $timeout( changeDemo1 ,1000);

  setTimeout( function(){$scope.$apply(changeDemo2)} ,2000);

  setTimeout( changeDemo3 ,3000);

  setTimeout( function(){$scope.$apply(changeDemo4)} ,4000);

}]);
