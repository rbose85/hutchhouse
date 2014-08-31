(function () {
    'use strict';

    var DataModel = function () {
        this.name = '';
        this.email = '';
        this.company = '';
        this.message = '';
        this.subscribe = false;
    };

    function ContactUs($scope) {
        $scope.name = 'Potato';
    }

    function ContactForm($scope, service) {
        $scope.model = new DataModel();

        $scope.save = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.contactForm.$valid) {
                service.save($scope.model);
                $scope.reset();
            }
        };

        $scope.reset = function () {
            $scope.$broadcast('show-errors-reset');
            $scope.model = new DataModel();
        };
    }

    function SubscribeForm($scope, service) {
        $scope.model = new DataModel();

        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.subscribeForm.$valid) {
                $scope.model.subscribe = true;
                service.save($scope.model);
                $scope.reset();
            }
        };

        $scope.reset = function () {
            $scope.$broadcast('show-errors-reset');
            $scope.model = new DataModel();
        };
    }

    angular
        .module('hutchhouseApp.controllers', [
            'ui.bootstrap',
            'ui.bootstrap.showErrors',
            'hutchhouseApp.services'
        ])
        .controller('ContactController', [
            '$scope',
            ContactUs
        ])
        .controller('CorrespondenceController', [
            '$scope',
            'ContactUsService',
            ContactForm
        ])
        .controller('SubscriptionController', [
            '$scope',
            'ContactUsService',
            SubscribeForm
        ]);
})();
