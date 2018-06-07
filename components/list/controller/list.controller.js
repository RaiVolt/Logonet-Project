(function() {
    'use strict';
    angular.module('logonetApp').controller('listController', function($scope, $state, $location, $rootScope, listService) {
        // List Controller example
        $scope.name = 'Rafael Machado';
        listService.all().then((user) => {
            $scope.users = user.data;
            const id = user.data.id
            $scope.up = () => {
                listService.update(2).then((user) => {
                    $scope.name = user.name;

                    $scope.last = user.job;

                    alert('UPDATED ' + user.updatedAt)
                })
            }

            $scope.del = () => {
                listService.delete(id).then((response) => {

                    alert('DELETED')
                })
            }
        });

        const userId = _.last($location.path().split('/'));

        const getUser = (userId) => {
            return $scope.user2 = $scope.users[userId].id;
        }
    })
})();