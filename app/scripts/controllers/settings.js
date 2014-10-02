'use strict';

app.controller('SettingsCtrl', function($scope){
	$scope.settings = {
		name: 'Juno',
		email: 'me@example.com'
	};

	$scope.updateSettings = function(){
		console.log('updateSettings was called');
	}
});