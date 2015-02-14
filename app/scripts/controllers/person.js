'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('PersonCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
