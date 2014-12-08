var userSearchApp = angular.module('userSearchApp', [
	'ngRoute',
	'userControllers'
]);

userSearchApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/users', {
		templateUrl: '/files/partials/userlist.html',
		controller: 'UserListController' 
	}).
	when('/user/:itemId', {
		templateUrl: '/files/partials/userdetails.html',
		controller: 'UserDetailsController' 
	}).
	otherwise({
		redirectTo: '/users'
	});
}]);

