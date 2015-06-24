;(function (){
  
  'use strict';

  angular.module('Vehicles')

  .controller('VehicleList', ['$scope', '$http', 'PARSE',

    function ($scope, $http, PARSE) {

    $scope.title = "My Vehicles";

    $scope.vehicleList = [];

    $http.get(PARSE.URL + '/classes/vehicle', PARSE.CONFIG)
    .success(function (data) {
      $scope.vehicleList = data.results;
    });

  }]);

}());