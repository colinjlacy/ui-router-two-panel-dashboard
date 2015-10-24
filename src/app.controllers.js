/**
 * Created by colinjlacy on 10/24/15.
 */
angular.module('pearlJam')
	.controller('appCtrl', ($scope) => {
		$scope.$on('activate', (e, id) => {
			$scope.active = true;
			$scope.$broadcast('getSong', id);
		});
		$scope.$on('deactivate', () => {
			$scope.active = false;
		});
	})
	.controller('songListCtrl', ($scope, $http) => {
		$http.get('/assets/data/songList.json').then(res => {
			$scope.songList = res.data;
		}, err => {
			console.log(err);
		});

		$scope.activate = id => {
			$scope.$emit('activate', id);
		};
	})
	.controller('lyricsCtrl', ($scope, $http) => {
		$scope.$on('getSong', (e, id) => {
			$http.get(`/assets/data/song${id}.json`).then(res => {
				$scope.activeSong = res.data;
			}, err => {
				console.log(err);
			});
		});
		$scope.deactivate = function() {
			$scope.$emit('deactivate');
		};
	});