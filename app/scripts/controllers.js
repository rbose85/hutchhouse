(function () {
    'use strict';

    function ContactUs($scope) {
        $scope.name = 'Potato';
    }

    function ContactForm($scope) {
        $scope.save = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.contactForm.$valid) {
                // todo: post to db
                console.log('Validation passed -- form: ', $scope.contactForm);
                $scope.reset();
            }
        };

        $scope.reset = function () {
            $scope.$broadcast('show-errors-reset');
            $scope.model = {
                name: '',
                email: '',
                company: '',
                message: '',
                subscribe: ''
            };
        };
    }

    angular
        .module('hutchhouseApp.controllers', [
            'ui.bootstrap',
            'ui.bootstrap.showErrors'
        ])
        .controller('ContactController', [
            '$scope',
            ContactUs
        ])
        .controller('CorrespondenceController', [
            '$scope',
            ContactForm
        ]);
})();
