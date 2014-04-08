// var app = angular.module('mddApp', ['ngRoute'])

// app.config(function($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: '/views/main.html',
//             controller: 'MainController'
//         })
//         .when('/index', {
//             templateUrl: '/views/main.html',
//             controller: 'MainController'
//         })
//         .when('/project/:id', {
//             templateUrl: 'views/main.html',
//             controller: 'PortfolioController'
//         })
//         .when('/about', {
//             templateUrl: 'views/about.html'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// });

var App = angular.module('mddApp', ['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider.
    when('/mdd/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    }).

    when('/project/:id', {
        templateUrl: '/views/main.html',
        controller: 'PortfolioController'
    }).

    when('/about', {
        templateUrl: 'views/about.html'
    });
});
