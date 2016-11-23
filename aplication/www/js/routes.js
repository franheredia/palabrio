angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menuPrincipal', {
    url: '/index',
    templateUrl: 'templates/menuPrincipal.html',
    controller: 'menuPrincipalCtrl'
  })

  .state('elegirTemas', {
    url: '/topics',
    templateUrl: 'templates/elegirTemas.html',
    controller: 'elegirTemasCtrl'
  })

  .state('esperandoEquipo', {
    url: '/page3',
    templateUrl: 'templates/esperandoEquipo.html',
    controller: 'esperandoEquipoCtrl'
  })

  .state('jugando', {
    url: '/playing',
    templateUrl: 'templates/jugando.html',
    controller: 'jugandoCtrl'
  })

  .state('resultados', {
    url: '/positions',
    templateUrl: 'templates/resultados.html',
    controller: 'resultadosCtrl'
  })

  .state('ayuda', {
    url: '/help',
    templateUrl: 'templates/ayuda.html',
    controller: 'ayudaCtrl'
  })

$urlRouterProvider.otherwise('/index')

  

});