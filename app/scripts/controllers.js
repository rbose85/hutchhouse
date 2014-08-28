(function () {
    'use strict';

    function Controller($scope) {
        $scope.name = 'Potato';
    }

    angular
        .module('hutchhouseApp.controllers', [])
        .controller('ContactController', [
            '$scope',
            Controller
        ]);
})();
