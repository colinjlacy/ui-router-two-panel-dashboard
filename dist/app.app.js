/**
 * Created by colinjlacy on 10/24/15.
 */
'use strict';

angular.module('pearlJam', ['ui.router']).config(function ($stateProvider) {
	$stateProvider.state('pearlJam', {
		url: "/",
		//templateUrl: "./src/views/app.main.html",
		views: {
			'songList': {
				templateUrl: "./src/views/app.songList.html",
				controller: "songListCtrl"
			},
			'lyrics': {
				templateUrl: "./src/views/app.lyrics.html",
				controller: "lyricsCtrl"
			}
		}
	});
});
