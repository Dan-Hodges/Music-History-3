app.controller("SongCtrl", function($scope, $q){
	$scope.songsLeft = [];
	$scope.songsRight = [];

	function getSongList(name) {
		return $q(function(resolve, reject){
			$.ajax({
				url: "./data/songs.json"
			})
			.done(function(response){
				console.log("response :", response);
				resolve(response.songs);
			})
			.fail(function(xhr, status, error){
				reject(error);
			});
		});
	}

	$scope.splitList = function () {
		$scope.songsLeft = [];
		$scope.songsRight = [];
		for (var i=0; i< $scope.songs.length;i++) {
	    if ((i+2) % 2 == 0) {
	        $scope.songsLeft.push($scope.songs[i]);
	    }
	    else {
	        $scope.songsRight.push($scope.songs[i]);
	    }
		}		
	};

	$scope.killSong = function(Song) {
	  var SongIndex = $scope.songs.indexOf(Song);
	  if (SongIndex >= 0) {
	    $scope.songs.splice(SongIndex, 1);
	  }
	};

	$scope.addSong = function() {
		console.log("click");
		var newSong = {
			title: $scope.song.title,
			artist: $scope.song.artist, 
			album: $scope.song.album
		};
		$scope.songs.push(newSong);
		console.log("songs :", $scope.songs);
		$scope.splitList();
	};

	$scope.killSong = function(song) {
		console.log("click");
	  var songIndex = $scope.songs.indexOf(song);
	  if (songIndex >= 0) {
	    $scope.songs.splice(songIndex, 1);
	    $scope.songsLeft = [];
			$scope.songsRight = [];
	    $scope.splitList();
	  }
	};

	$scope.filterArtist = function (song) {
		console.log("click");
		var artist = song.artist;
		console.log("artist :", artist);
	}

		$scope.filterAlbum = function (song) {
		console.log("click");
		var album = song.album;
		console.log("Album :", album);
	}

	getSongList()
	.then(function(data){
		console.log("data :", data);
		$scope.songs = data;
		$scope.splitList();
	}
	,function(error) {
		console.log("error", error)
	});
});