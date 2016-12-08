angular.module("MyFirstApp", [])
.controller("FirstController", function($scope){
	$scope.nombre = "Andrés";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malisimo el tutorial",
			username: "otro_usuario"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});