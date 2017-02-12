angular.module("mainModule", [])
	.filter("removeHtml", function(){
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	.controller("FiltersController", function($scope){
		$scope.mi_html = "<p>Hola mundo</p>";
		$scope.html = {};
		$scope.html.title = "Hola";
		$scope.html.body = "Mundo";
		$scope.costo = 2;
	})