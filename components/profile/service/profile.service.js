(function() {
    'use strict';
    angular.module('logonetApp').factory('userService', function($rootScope, Restangular) {


        // Profile service example
        let users = {};

        var CrosRestangular = Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: 'usersId'
            });
        });

        var user = CrosRestangular.all('users');


        users.create = function(data) {
            return user.post(data);
        };

        users.get = function(id) {
            return CrosRestangular.one('users', id).get();
        };

        users.all = function() {
            return CrosRestangular.one('users').get();
        };

        users.update = function(id) {
            return CrosRestangular.one('users', id).put();
        };

        users.delete = function(id) {
            return CrosRestangular.one('users', id).remove();
        };

        console.log('aqui', users.all())

        return users;


    });

})();