var app = angular.module("MusicApp", ['ngRoute', "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/song-list.html',
        controller: 'songPopulateCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);