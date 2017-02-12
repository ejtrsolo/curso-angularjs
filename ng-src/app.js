angular.module("CustomDirective", [])

.controller("AppCtrl", function($scope, $http){
	$http.get("https://api.github.com/users/aduartem/repos")
	.success(function(data){
		console.log(data);
		$scope.repos = data;
	})
	.error(function(err){
		console.log(err);
	})
});