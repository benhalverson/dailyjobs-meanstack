'use strict';

angular.module('dailyjobsAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pricing', {
        url: '/pricing',
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingCtrl'
      });
  });