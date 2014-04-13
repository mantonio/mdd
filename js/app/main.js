var app = angular.module('mddApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/list_view.html',
            controller: 'ListController'
        })
        .when('/index', {
            templateUrl: 'views/list_view.html',
            controller: 'ListController'
        })
        .when('/detail/:itemId/:type', {
            templateUrl: 'views/detail_view.html',
            controller: 'DetailController'
        })
        .when('/about', {
            templateUrl: 'views/about_view.html',
            controller: 'ListController'
        })
        .when('/portfolio', {
            templateUrl: 'views/list_view.html',
            controller: 'ListController'
        })
        .when('/contact', {
            templateUrl: 'views/contact_view.html'
        })
});
