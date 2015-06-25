;(function (){
  
  'use strict';

  angular.module('Vehicles')

  .service('VehicleService', ['$http', 'PARSE', '$rootScope',

    function ($http, PARSE, $rootScope) {

    // Vehicle Constructor

    var Vehicle = function (options) {
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
    };
    

    this.getCars = function() {
      $http.get(PARSE.URL + '/classes/vehicle', PARSE.CONFIG).success(function (data){
        $rootScope.$broadcast('AllCarsGotten', data);
      })
    };

    this.deleteCar = function (whichOne) {

      var deleteURL = PARSE.URL + '/classes/vehicle' + whichOne.objectId;

      return $http.delete(deleteURL, PARSE.CONFIG);
    };

    this.addCar = function (newVehicle) {

      var car = new Vehicle(newVehicle);

      return $http.post(PARSE.URL + 'classes/vehicle', car, PARSE.CONFIG);

    };

  }])

}());