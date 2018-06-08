(function() {
    'use strict';
    angular.module('logonetApp').factory('listService', function(Restangular) {
        // List service example
        let users = {};

        var CrosRestangular = Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({
                id: 'usersId'
            });
        });

        var user = CrosRestangular.all('users');

        //Need to set id to usersId

        users.getId = function() {
            return CrosRestangular.one('users').get();
        };

        users.create = function(data) {
            return CrosRestangular.one('users').post();;
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

        return users

    });


})();