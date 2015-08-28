app.controller("songPopulateCtrl", ["$scope","$firebaseArray", "$q", function($scope, $firebaseArray, $q){
	$scope._ = _;
	var ref = new Firebase("https://blistering-torch-3779.firebaseio.com/songs/");
	$scope.songs = $firebaseArray(ref);
	$scope._ = _;

	$scope.killSong = function(song) {
		$scope.songs.$remove(song);
	};

	$scope.addSong = function() {
		// console.log("click");
		var newSong = {
			title: $scope.song.title,
			artist: $scope.song.artist, 
			album: $scope.song.album
		};
		$scope.songs.$add(newSong);
	};
  $scope.filters = {};
}]);
