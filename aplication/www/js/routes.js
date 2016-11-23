angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('mainMenu', {
    url: '/index',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })

  .state('chooseTopics', {
    url: '/topics',
    templateUrl: 'templates/chooseTopics.html',
    controller: 'chooseTopicsCtrl'
  })

  .state('waitingTeam', {
    url: '/page3',
    templateUrl: 'templates/waitingTeam.html',
    controller: 'waitingTeamCtrl'
  })

  .state('playing', {
    url: '/playing',
    templateUrl: 'templates/playing.html',
    controller: 'playingCtrl'
  })

  .state('positions', {
    url: '/positions',
    templateUrl: 'templates/positions.html',
    controller: 'positionsCtrl'
  })

  .state('ayuda', {
    url: '/help',
    templateUrl: 'templates/ayuda.html',
    controller: 'ayudaCtrl'
  })

  $urlRouterProvider.otherwise('/index')



});
