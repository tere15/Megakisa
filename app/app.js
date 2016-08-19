var app = angular.module('app',['ngRoute','ngResource']);


app.config(function($routeProvider){
    
    $routeProvider.when('/',{
        templateUrl:'/app/components/frontpage/frontpage_view.html', 
        controller:'frontpageController'
    });
});