'use strict';

app.controller('MailListingController', function($scope){

	$scope.email = [{
		'id': 1,
		'from': 'fred@fullstack.io',
		'to': 'info@jesusparlange.com',
		'subject': 'Great Job!'
	}];
});