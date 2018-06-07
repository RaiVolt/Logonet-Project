 // Angular module example
 angular.module('logonetApp', ['ui.router', 'restangular'])
     .config(function($stateProvider, RestangularProvider, $locationProvider, $urlRouterProvider) {
         RestangularProvider.setBaseUrl('https://reqres.in/api');
         RestangularProvider.setDefaultHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
         $urlRouterProvider.otherwise('/');
         $locationProvider.hashPrefix('');
         $locationProvider.html5Mode(true);

         $stateProvider
             .state('login', {
                 url: '/',
                 templateUrl: 'components/login/template/login.template.html',
                 controller: 'loginController',

             })
             .state('profile', {
                 url: '/profile/:id',
                 templateUrl: 'components/profile/template/profile.template.html',
                 controller: 'profileController',
             })
             .state('list', {
                 url: '/list',
                 templateUrl: 'components/list/template/list.template.html',
                 controller: 'listController'
             })


     });