angular.module('app.controllers', [])

.controller('mainMenuCtrl', ['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope) {
    $scope.mainMenuLoaded = function() {
      //Declaracion de Temas
      $rootScope.topics = [{
        name: 'Personajes',
        icon: 'icon ion-android-people',
        type: 'character',
        selected: false
      }, {
        name: 'Videojuegos',
        icon: 'icon ion-ios-game-controller-b',
        type: 'videogame',
        selected: false
      }, {
        name: 'Películas',
        icon: 'icon ion-android-film',
        type: 'movie',
        selected: false
      }, {
        name: 'Lugares',
        icon: 'icon ion-android-globe',
        type: 'place',
        selected: false
      }];
      //Declaracion de Palabras
      $rootScope.words = [{
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
      //Declaracion de la funcion getRandom()
      $rootScope.getRandom = function(maxExclusive, minInclusive = 0) {
        randomNum = Math.floor(Math.random() * (maxExclusive - minInclusive) + minInclusive);
        return (randomNum);
      };

      function createPlayingWords() {
        //Declaracion de las palabras en juego
        $rootScope.playingWords = [];
        for (u = 0; u < $rootScope.topics.length; u++) {
          if ($rootScope.topics[u]['selected']) {
            for (i = 0; i < $rootScope.words.length; i++) {
              if ($rootScope.topics[u]['type'] == $rootScope.words[i]['type']) {
                $rootScope.playingWords.push($rootScope.words[i]);
              }
            }
          }
        }
        for (p = 0; p < $rootScope.roundsPlays.length; p++) {
          if (!$rootScope.roundsPlays[p]['played']) {
            $rootScope.currentRound = $rootScope.roundsPlays[p];
            return (true);
          }
        }
      }
      //Declaracion de la funcion que decide que Round se debe jugar
      $rootScope.getRound = function() {
        try {
          for (p = 0; p < $rootScope.roundsPlays.length; p++) {
            if (!$rootScope.roundsPlays[p]['played']) {
              oldR = $rootScope.roundsPlays[p]['round']
              newR = $rootScope.currentRound['round']
              $rootScope.currentRound = $rootScope.roundsPlays[p];
              if (oldR != newR) {
                return (createPlayingWords());
              } else {
                return (true);
              }
            }
          }
        } catch (isUndefined) {
          return (createPlayingWords());
        }
      };

      $rootScope.anotherRound = function() {
        for (p = 0; p < $rootScope.roundsPlays.length; p++) {
            newR = $rootScope.currentRound['round'];
          if (!$rootScope.roundsPlays[p]['played']) {
              oldR = $rootScope.roundsPlays[p]['round'];
            if (oldR == newR) {
                $rootScope.roundsPlays[p]['played']=true;
            }
          }
        }
      }
    };
  }
])

.controller('chooseTopicsCtrl', ['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope) {
    $scope.loaded = function() {
      //Declaracion de equipos
      $rootScope.teams = [{
        name: 'Azul',
        score: 0
      }, {
        name: 'Rojo',
        score: 0
      }];
      //Declaracion de rondas
      $rootScope.roundsPlays = [{
        team: $rootScope.teams[0],
        round: 0,
        played: false,
      }, {
        team: $rootScope.teams[1],
        round: 0,
        played: false,
      }, {
        team: $rootScope.teams[1],
        round: 1,
        played: false,
      }, {
        team: $rootScope.teams[0],
        round: 1,
        played: false,
      }, {
        team: $rootScope.teams[0],
        round: 2,
        played: false,
      }, {
        team: $rootScope.teams[1],
        round: 2,
        played: false,
      }];
    };
    //Seleccion de Temas
    $scope.clicked = function(selection) {
      value = selection['selected'];
      selection['selected'] = !value;
    };
  }
])

.controller('waitingTeamCtrl', ['$scope', '$stateParams', '$rootScope', '$state',
  function($scope, $stateParams, $rootScope, $state) {
    //Declaracion de currentRound
    $scope.waitingTeamLoad = function() {
      if (!$rootScope.getRound()) {
        $state.go('positions');
      }
    };
  }
])

.controller('playingCtrl', ['$scope', '$stateParams', '$rootScope', '$timeout', '$state',
  function($scope, $stateParams, $rootScope, $timeout, $state) {
    //Declaracion de Funciones del countdown
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
        $rootScope.currentRound['played'] = true;
        $state.go('waitingTeam');
        for (m = 0; m < $rootScope.playingWords.length; m++) {
          $rootScope.wrongAswers.push($rootScope.playingWords[m]);
        }
        $rootScope.playingWords = $rootScope.wrongAswers;
      }
    });
    //Declaracion de la funcion chargeCard()
    function chargeCard() {
      if ($rootScope.playingWords.length != 0) {
        x = $rootScope.getRandom($rootScope.playingWords.length);
        $scope.current = $rootScope.playingWords[x];
        return true;
      } else {
        return false;
      }
    }
    //Declaracion de la funcion que se ejecuta al comenzar la partida
    $scope.playingLoad = function() {
      //Declaracion de las respuestas incorrectas en juego
      $rootScope.wrongAswers = [];
      var mytimeout = null;
      $scope.counter = 30;
      chargeCard();
      mytimeout = $timeout($scope.onTimeout, 1000);
    };
    //Declaracion de la funcion de cargar otra tarjeta nextCard()
    $scope.nextCard = function(answerBoolean) {
      currentWord = $rootScope.playingWords.indexOf($scope.current);
      $rootScope.playingWords.splice(currentWord, 1);
      if (answerBoolean) {
        $rootScope.currentRound['team']['score']++;
      } else {
        $rootScope.wrongAswers.push($scope.current);
      }
      if (!chargeCard()) {
        $rootScope.currentRound['played'] = true;
        $rootScope.playingWords = $rootScope.wrongAswers;
        $rootScope.wrongAswers = [];
        if ($rootScope.playingWords.length == 0) {
          $rootScope.anotherRound();
        }
        $state.go('waitingTeam');
      }
    };
  }
])

.controller('positionsCtrl', ['$scope', '$stateParams', '$rootScope',
  function($scope, $stateParams, $rootScope) {}
])

.controller('helpCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])
