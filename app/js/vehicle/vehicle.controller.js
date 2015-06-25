;(function (){
  
  'use strict';

  angular.module('Vehicles')

  .controller('Vehicle', ['$scope', 'VehicleService', '$location',

    function ($scope, VehicleService, $location) {

    $scope.addVehicle = function (x) {

      VehicleService.addCar(x).success( function () {

        console.log(x);

        // Route Home
        $location.path('/');
        $scope.car = {};

      });

    };

  }]);

}());