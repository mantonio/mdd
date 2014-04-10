var app = angular.module('mddApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/List.html',
            controller: 'ListController'
        })
        .when('/index', {
            templateUrl: 'views/List.html',
            controller: 'ListController'
        })
        .when('/detail/:itemId', {
            templateUrl: 'views/detail.html',
            controller: 'DetailController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'ListController'
        })
        .when('/portfolio', {
            templateUrl: 'views/List.html',
            controller: 'ListController'
        });
});