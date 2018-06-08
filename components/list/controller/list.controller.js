(function() {
    'use strict';
    angular.module('logonetApp').controller('listController', function($scope, $state, $location, $rootScope, listService) {
        // List Controller example
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


        $scope.save = () => {

            const save = {
                name: $scope.f_name,
                job: $scope.job
            }

            listService.create(save).then((response) => {;
                const id = response.id;
                const createdAt = response.createdAt;
                alert(`ID: ${id}\nCreated: ${createdAt} `);
                $('.form-control.val').val('');
                $('.modal.fade').removeClass('show');
                $('.modal-backdrop.fade').remove();
                $('.login-page').removeClass('modal-open');
            })
        }

        const userId = _.last($location.path().split('/'));

        const getUser = (userId) => {
            return $scope.user2 = $scope.users[userId].id;
        }
    })
})();