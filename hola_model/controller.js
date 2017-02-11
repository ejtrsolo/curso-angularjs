angular.module("MyFirstApp", [])
.controller("FirstController", ["$scope", function(m){
	m.nombre = "Andrés";
	m.nuevoComentario = {};
	m.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malisimo el tutorial",
			username: "otro_usuario"
		}
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	}
}]);