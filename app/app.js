var app = angular.module('app',['ngRoute','ngResource']);


app.config(function($routeProvider){
    
   // app.run(function($http){
    
        //$http.defaults.headers.common['cache-control'] = 'private, no-store, must-revalidate';
   // });
    
    
    $routeProvider.when('/',{
        // Triggeröityy kun url latautuu eli tullaan '/' kohtaan
        templateUrl:'/app/components/frontpage_view.html', //toteuttaa tietyn osan dokumenttia (siksi partial)
        controller:'frontpageController'
        //factory:'groupFactory'

    });
});