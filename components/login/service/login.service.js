(function() {
    'use strict';
    angular.module('logonetApp').factory('postService', function(Restangular) {

        // Login service example
        const login = () => Restangular.all('login');
        return login();
    });

})();