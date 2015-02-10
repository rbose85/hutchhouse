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
        'hutchhouseApp.controllers',
        'hutchhouseApp.services'
    ];

    function Router($routeProvider) {
        $routeProvider
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/contact'
            });
    }

    angular
        .module('hutchhouseApp', dependencies.concat(components))
        .config([
            '$routeProvider',
            Router
        ]);
})();
