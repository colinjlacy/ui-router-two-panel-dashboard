/**
 * Created by colinjlacy on 10/24/15.
 */
'use strict';

angular.module('pearlJam').controller('appCtrl', function ($scope) {
	$scope.$on('activate', function (e, id) {
		$scope.active = true;
		$scope.$broadcast('getSong', id);
	});
	$scope.$on('deactivate', function () {
		$scope.active = false;
	});
}).controller('songListCtrl', function ($scope, $http) {
	$http.get('/assets/data/songList.json').then(function (res) {
		$scope.songList = res.data;
	}, function (err) {
		console.log(err);
	});

	$scope.activate = function (id) {
		$scope.$emit('activate', id);
	};
}).controller('lyricsCtrl', function ($scope, $http) {
	$scope.$on('getSong', function (e, id) {
		$http.get('/assets/data/song' + id + '.json').then(function (res) {
			$scope.activeSong = res.data;
		}, function (err) {
			console.log(err);
		});
	});
	$scope.deactivate = function () {
		$scope.$emit('deactivate');
	};
});
