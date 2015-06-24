;(function (){
  
  'use strict';

  angular.module('Vehicles')

  .controller('Vehicle', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {

    // List of Vehicles

    $scope.vehicleList = [];

    // Vehicle Constructor

    var Vehicle = function (options) {
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
    };

    $scope.addVehicle = function (x) {
      var car = new Vehicle(x);
      $http.post(PARSE.URL + 'classes/vehicle', car, PARSE.CONFIG)
      .success( function () {
        
        // Route Home

        $location.path('/');

        $scope.car = {};

      });
    };
  }]);

}());