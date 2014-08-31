(function () {
    'use strict';

    function ContactUs($scope) {
        $scope.name = 'Potato';
        $scope.error = {
            name: undefined,
            email: undefined,
            company: undefined,
            message: undefined
        };
    }

    angular
        .module('hutchhouseApp.controllers', [
            'ui.bootstrap'
        ])
        .controller('ContactController', [
            '$scope',
            ContactUs
        ]);
})();
