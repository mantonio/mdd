var app = angular.module('mddApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/list.html',
            controller: 'ListController'
        })
        .when('/index', {
            templateUrl: 'views/list.html',
            controller: 'ListController'
        })
        .when('/detail/:itemId/:type', {
            templateUrl: 'views/detail.html',
            controller: 'DetailController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'ListController'
        })
        .when('/portfolio', {
            templateUrl: 'views/list.html',
            controller: 'ListController'
        });
});
