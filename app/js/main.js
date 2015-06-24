;(function (){
  
  'use strict';

  angular.module('Vehicles', ['ngRoute'])

  .constant('PARSE', {
      URL: 'https://api.parse.com/1/',

      CONFIG: {

          headers: {
          'X-Parse-Application-Id' : 'nOURnbU5e2KHpWHURZCISB1IisuZNipRSTQ5ajdG',
          'X-Parse-REST-API-Key' : '0eE2e3lFl4kPCXdAibsPkH4gKDeuzf44UqBdwKL9'
        }
      }
  })

  .config([ '$routeProvider',

    function ($routeProvider) {

      $routeProvider.when('/', {

        controller: 'VehicleList',
        templateUrl: 'js/vehicle/home.tpl.html'

      })

      .when('/add', {

        controller: 'Vehicle',
        templateUrl: 'js/vehicle/add.tpl.html'
      })

      .when('/about', {
        controller: 'Vehicle',
        templateUrl: 'js/vehicle/about.tpl.html'
      });

    }
  ]);

}());