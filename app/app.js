var app = angular.module('app',['ngRoute','ngResource']);


app.config(function($routeProvider){
    
   // app.run(function($http){
    
        //$http.defaults.headers.common['cache-control'] = 'private, no-store, must-revalidate';
   // });
    
    
    $routeProvider.when('/',{
        templateUrl:'/app/components/frontpage/frontpage_view.html', //toteuttaa tietyn osan dokumenttia (siksi partial)
        controller:'frontpageController'
        //factory:'groupFactory'
    /* }).when('/cities',{
        templateUrl:'cities.html',
    }).when('/login',{ 
        templateUrl:'login.html',
        
     }).when('/register',{
        templateUrl:'register.html',*/
    });
});