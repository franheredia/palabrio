angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('mainMenu', {
    url: '/index',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })

  .state('chooseTopics', {
    url: '/chooseTopics',
    templateUrl: 'templates/chooseTopics.html',
    controller: 'chooseTopicsCtrl'
  })

  .state('waitingTeam', {
    url: '/waitingTeam',
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

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  $urlRouterProvider.otherwise('/index')



});
