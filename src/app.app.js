/**
 * Created by colinjlacy on 10/24/15.
 */
angular.module('pearlJam', [
	'ui.router',
	'ngSanitize'
])
	.config(function($stateProvider, $UrlRouterProvider) {

		$UrlRouterProvider.otherwise('/#/');
		console.log("node");
		$stateProvider
			.state('root', {
				url: "/#/",
				templateUrl: './src/views/app.main.html',
				controller: 'appCtrl',
				abstract: true
			})
			.state('root.views', {
				url: "",
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
		})
	.run(($rootScope) => {
		$rootScope.$on("$stateChangeError", console.log.bind(console));
	});