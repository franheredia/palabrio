angular.module('app.controllers', [])

.controller('mainMenuCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])

.controller('chooseTopicsCtrl', ['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope) {
    $scope.topics = [{
      name: 'Personajes',
      icon: 'icon ion-android-people',
      type: 'character'
    }, {
      name: 'Videojuegos',
      icon: 'icon ion-ios-game-controller-b',
      type: 'videogame'
    }, {
      name: 'Películas',
      icon: 'icon ion-android-film',
      type: 'movie'
    }, {
      name: 'Lugares',
      icon: 'icon ion-android-globe',
      type: 'place'
    }];
    $rootScope.selected = [];

    $scope.clicked = function(member) {
      var index = $rootScope.selected.indexOf(member);
      if (index >= 0) {
        $rootScope.selected.splice(index, 1);
        member.selected = false;
      } else {
        $rootScope.selected.push(member);
        member.selected = true;
      }
    }

  }
])

.controller('waitingTeamCtrl', ['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope) {

    $rootScope.teams = [{
      name: 'Azul',
      score: 0
    }, {
      name: 'Rojo',
      score: 0
    }]
  }
])

.controller('playingCtrl', ['$scope', '$stateParams', '$rootScope', '$timeout', '$state',

  function($scope, $stateParams, $rootScope, $timeout, $state) {
    $scope.counter = 30;
    var mytimeout = null;

    $scope.onTimeout = function() {
      if ($scope.counter === 1) {
        $scope.$broadcast('timer-stopped', 0);
        $timeout.cancel(mytimeout);
        return;
      }
      $scope.counter--;
      mytimeout = $timeout($scope.onTimeout, 1000);
    };

    $scope.$on('timer-stopped', function(event, remaining) {
      if (remaining === 0) {
        $state.go('positions');
      }
    });

    $scope.words = [{
      type: 'videogame',
      icon: 'icon ion-ios-game-controller-b',
      name: 'Super Mario Bros',
      description: 'Videojuego de Plataformas',
      bannedWords: ['Fontanero', 'Bigote', 'Princesa']
    }, {
      type: 'videogame',
      icon: 'icon ion-ios-game-controller-b',
      name: 'Skyrim',
      description: 'Videojuego de Rol',
      bannedWords: ['Dragón', 'Sangre', 'Grito']
    }, {
      type: 'videogame',
      icon: 'icon ion-ios-game-controller-b',
      name: 'Age of Empires',
      description: 'Videojuego de Estrategia',
      bannedWords: ['Imperio', 'Edades', 'Centro Urbano']
    }, {
      type: 'character',
      icon: 'icon ion-android-people',
      name: 'Joseph Stallin',
      description: 'Personaje Historico',
      bannedWords: ['Bigote', 'Comunismo', 'Rusia']
    }, {
      type: 'character',
      icon: 'icon ion-android-people',
      name: 'Superman',
      description: 'Personaje de Ficcion',
      bannedWords: ['Kriptonita', 'Capa', 'Calzonsillo']
    }, {
      type: 'character',
      icon: 'icon ion-android-people',
      name: 'Donald Trump',
      description: 'Personaje Público',
      bannedWords: ['Estados Unidos', 'Yanqui', 'Anaranjado']
    }, {
      type: 'movie',
      icon: 'icon ion-android-film',
      name: 'El Sexto Sentido',
      description: 'Pelicula de Suspenso',
      bannedWords: ['Fantasmas', 'Muerte', 'Gente']
    }, {
      type: 'movie',
      icon: 'icon ion-android-film',
      name: 'Kung-Fu Panda',
      description: 'Película Animada',
      bannedWords: ['China', 'Fideos', 'Guerrero']
    }, {
      type: 'movie',
      icon: 'icon ion-android-film',
      name: 'Titanic',
      description: 'Película Romantica',
      bannedWords: ['Iceberg', 'Barco', 'Hundir']
    }, {
      type: 'place',
      icon: 'icon ion-android-globe',
      name: 'Torre Eifel',
      description: 'Monumento Francés',
      bannedWords: ['París', 'Vino', 'Mimo']
    }, {
      type: 'place',
      icon: 'icon ion-android-globe',
      name: 'Las Vegas',
      description: 'Estado Norteamericano',
      bannedWords: ['Casino', 'Pecado', 'Apostar']
    }, {
      type: 'place',
      icon: 'icon ion-android-globe',
      name: 'Chernóbil',
      description: 'Ciudad Rusa',
      bannedWords: ['Radiación', 'Planta Nuclear', 'Fantasma']
    }];
    var playingWords = [];
    var wrongAswers = [];

    function getRandom(max) {
      var randomNum = Math.floor(Math.random() * (max));
      return (randomNum);
    }

    function chargeCard(targetArray) {
      x = getRandom(playingWords.length);
      $scope.current = playingWords[x];
    }

    $scope.gameStarted = function() {
      for (x = 0; x < $rootScope.selected.length; x++) {
        for (u = 0; u < $scope.words.length; u++) {
          if ($scope.words[u]['type'] == $rootScope.selected[x]['type']) {
            playingWords.push($scope.words[u]);
          }
        }
      }
      chargeCard(playingWords);
      mytimeout = $timeout($scope.onTimeout, 1000);
    }

    $scope.nextCard = function(answerBoolean) {
      for (x = 0; x < playingWords.length; x++) {
        if (playingWords[x] == $scope.current) {
          playingWords.splice(x, 1);
          if (answerBoolean) {
            $rootScope.teams[0]['score']++;
          } else {
            wrongAswers.push($scope.current);
          }
        }
      }
      if (playingWords.length == 0) {
        $state.go('positions');
      }
      chargeCard(playingWords);
      console.log($rootScope.teams[0]['score']);

    }
  }
])

.controller('positionsCtrl', ['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope) {}
])

.controller('helpCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])
