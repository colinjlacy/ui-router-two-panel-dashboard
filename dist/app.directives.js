'use strict';

angular.module('pearlJam').directive('listCard', function () {
	return {
		restrict: "E",
		scope: {
			song: "="
		},
		link: function link(scope, elem, attr) {
			elem.on('click', function () {
				scope.$emit('activate', scope.song.id);
			});
		}
	};
});
