(function () {
    'use strict';

    var url = 'https://fiery-fire-2548.firebaseio.com/HutchHouse/';

    angular
        .module('hutchhouseApp.config', [])
        .constant('VERSION', '0.1')
        .constant('FBURL', url);
})();
