var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'home'
        })
        .when('/logCatch', {
            templateUrl: 'views/logCatch.html',
            controller: 'logCatch'
        })
        .when('/viewProfiles', {
            templateUrl: 'views/viewProfiles.html',
            controller: 'viewProfiles'
        })
        .when('/data', {
            templateUrl: 'views/data.html',
            controller: 'data'
        })
        .otherwise({
            redirect: '/home'
        });
}]);