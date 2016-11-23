angular.module('app.controllers', [])

.controller('mainMenuCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])

.controller('chooseTopicsCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {
    $scope.temes = [{
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
    }]
  }
])

.controller('waitingTeamCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])

.controller('playingCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {
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
    }]
  }
])

.controller('positionsCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])

.controller('ayudaCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {}
])
