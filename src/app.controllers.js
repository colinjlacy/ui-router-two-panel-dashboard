/**
 * Created by colinjlacy on 10/24/15.
 */
angular.module('pearlJam')
	.controller('pearlJamCtrl', ($scope) => {

	})
	.controller('songListCtrl', ($scope, $http) => {
		$http.get('/assets/data/songList.json').then(res => {
			$scope.songList = res.data;
		}, err => {
			console.log(err);
		});

		$scope.activate = id => {
			$scope.$emit('activate', id);
			console.log(id);
		};
	})
	.controller('lyricsCtrl', ($scope, $http) => {

	});