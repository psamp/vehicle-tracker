;(function (){
  
  'use strict';

  angular.module('Vehicles')

  .controller('VehicleList', ['$scope', 'VehicleService', '$rootScope',

    function ($scope, VehicleService, $rootScope) {

      // Call method to get all vehicles
      VehicleService.getCars();

      $rootScope.$on('AllCarsGotten', function (event, data) {
        $scope.vehicleList = data.results;
      
      });

    $scope.deleteCar = function (whichOne) {

      VehicleService.deleteCar(whichOne).success(function() {

      $scope.vehicleList = _.without($scope.vehicleList, whichOne);
      
      });
      
      };
    }

  ]);

}());