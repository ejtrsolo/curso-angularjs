angular.module("mainModule", [])
	.controller("FirstController", function($scope){
		$scope.nombre = "Andrés";
		/*setTimeout(function(){
			$scope.$apply(function(){
				$scope.nombre = "Codigo Facilito";
			});
		}, 2000);*/
		
		/*document.querySelector("#mi_boton")
			.addEventListener("click", function(){
				$scope.$apply(function(){
					$scope.nombre = "Codigo Facilito";
				});
			});*/
	})