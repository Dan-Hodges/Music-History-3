
//      CODE I USED BEFORE ANGULARFIRE

// app.factory("storage", function($q, $http) {	
//   return {
// 	  getStuff: function() {
// 			return $q(function(resolve, reject) {
// 				$http.get('https://blistering-torch-3779.firebaseio.com/songs.json')
// 		      .success(
// 		        function(objectFromJSONFile) {
// 		        	// console.log("test", objectFromJSONFile);
// 		          resolve(objectFromJSONFile);
// 		        },function(error) {
// 		          reject(error);
// 		        }
// 		      );	
// 		  	});
//     	},
//     setStuff: function(data) {
//     	return $q(function(resolve, reject) {
//     	  $http.post('https://blistering-torch-3779.firebaseio.com/songs.json', data)	
// 					.success(
// 		        function(objectFromJSONFile) {
// 		          // console.log("test", objectFromJSONFile);
// 		        },function(error) {
// 		          reject(error);
// 		        }
//     			);
//     	});
//   	},
//     killStuff: function(url) {
//    	  $http.delete('https://blistering-torch-3779.firebaseio.com/songs/' + url)
//   	},
// 	};
// });

