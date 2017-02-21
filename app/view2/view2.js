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
  function changeDemo5(){document.getElementsByClassName("TEXT")[0].innerHTML="demo5";};
  function changeDemo6(){$scope.demo="demo6";$scope.tiere.push("nashorn 6")};
  $timeout( changeDemo1 ,1000);
  console.log($scope);
  setTimeout( function(){$scope.$apply(changeDemo2)} ,2000);
  window.x=$scope;
  setTimeout( changeDemo3 ,3000);

  setTimeout( function(){$scope.$apply(changeDemo4)} ,4000);
  setTimeout( changeDemo5 ,5000);
  setTimeout( function(){$scope.$apply(changeDemo6)} ,6000);

}]);
