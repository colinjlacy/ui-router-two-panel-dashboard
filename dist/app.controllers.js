/**
 * Created by colinjlacy on 10/24/15.
 */
'use strict';

angular.module('pearlJam').controller('pearlJamCtrl', function ($scope) {}).controller('songListCtrl', function ($scope, $http) {
	$http.get('/assets/data/songList.json').then(function (res) {
		$scope.songList = res.data;
	}, function (err) {
		console.log(err);
	});

	$scope.activate = function (id) {
		$scope.$emit('activate', id);
		console.log(id);
	};
}).controller('lyricsCtrl', function ($scope, $http) {});
