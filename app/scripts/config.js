(function () {
    'use strict';

    var url = 'https://hutchhouse.firebaseio.com/';

    angular
        .module('hutchhouseApp.config', [])
        .constant('VERSION', '0.2')
        .constant('FBURL', url);
})();
