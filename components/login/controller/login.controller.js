(function() {
    'use strict';
    angular.module('logonetApp').controller('loginController', function($scope, $state, postService) {

        // Login controller example
        const ApiUserExemple = {
            email: 'peter@klaven.com',
            password: 'cityslicka'
        }

        $scope.submit = () => {
            const log = {
                email: $scope.email,
                password: $scope.password
            }

            if (log.email === ApiUserExemple.email && log.password === ApiUserExemple.password) {
                postService.post(log).then((res) => {
                    const tokenURI = localStorage.setItem('access_token', res.token);
                    $state.go('list')
                }).catch((err) => {
                    return alert(err.data.error);
                });
            } else {
                $scope.emailError = log.email !== ApiUserExemple.email;
                $scope.passwordError = log.password !== ApiUserExemple.password && log.email === ApiUserExemple.email;

            }
        }

    })
})();