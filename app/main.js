var app = angular.module("MusicApp", ['ngRoute', "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/song-list.html',
        controller: 'songPopulateCtrl'
      }).
      when('/trash', {
        templateUrl: 'partials/trash.html',
        controller: 'songPopulateCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);