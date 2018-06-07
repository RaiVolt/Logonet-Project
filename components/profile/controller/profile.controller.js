(function() {

    'use strict';

    angular.module('logonetApp').controller('profileController', function($scope, $state, $location, $rootScope, userService) {
        // Profile controller example
        $scope.name = 'Rafael Machado';
        const userId = _.last($location.path().split('/'));

        userService.get(userId).then((user) => {
            $scope.avatar = user.data.avatar;
            $scope.first_name = user.data.first_name;
            $scope.last_name = user.data.last_name;
        })
    })
})();