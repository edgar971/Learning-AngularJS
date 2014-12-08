var userControllers = angular.module('userControllers', []);
//the $http service will be used to load JSON data
userControllers.controller('UserListController' , ['$scope', '$http', function($scope, $http){
	$scope.users = []
	$http.get('/files/data/users.json').success(function(data){
		$scope.users = data;
	});
}]); 


userControllers.controller('UserDetailsController' , ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/files/data/users.json').success(function(data){
		$scope.users = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]); 

