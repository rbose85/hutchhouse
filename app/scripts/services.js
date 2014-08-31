(function () {
    'use strict';

    function Factory($firebase, FBURL) {
        var url = FBURL + 'Emails/';
        var ref = new Firebase(url);
        var sync = $firebase(ref);

        return {
            save: function (obj) {
                sync.$push(obj).then(
                    function (ref) {
                        return ref.name();
                    },
                    function () {
                        // todo: look at proper logging system
                        console.log('something went wrong ... ');
                    }
                );
            }
        };
    }

    angular
        .module('hutchhouseApp.services', [])
        .factory('ContactUsService', [
            '$firebase',
            'FBURL',
            Factory
        ]);
})();
