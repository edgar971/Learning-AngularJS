//ngRoute is used devide parts of the app, similar to different pages. For example
//the list of users will be on the /users/ page and the single user will be on the /user/username

var userSearchApp = angular.module('userSearchApp', [
	'ngRoute',
	'userControllers'
]);

userSearchApp.config(['$routeProvider' , '$locationProvider', function($routeProvider, $locationProvider){
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
	//this is used to remove the hash
	//$locationProvider.html5Mode(true);
}]);

