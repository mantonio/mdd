var app = angular.module('mddApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/index', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
        .when('/portfolio-item', {
            templateUrl: 'views/portfolio-item.html',
            controller: 'PortfolioController '
        })
        .when('/about', {
            templateUrl: 'views/about.html '
        })
        .otherwise({
            redirectTo: '/'
        });
});
