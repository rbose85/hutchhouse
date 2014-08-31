(function () {
    'use strict';

    var dependencies = [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'firebase'
    ];

    var components = [
        'hutchhouseApp.config',
        'hutchhouseApp.controllers'
    ];

    function Router($routeProvider) {
        $routeProvider
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular
        .module('hutchhouseApp', dependencies.concat(components))
        .config([
            '$routeProvider',
            Router
        ]);
})();
