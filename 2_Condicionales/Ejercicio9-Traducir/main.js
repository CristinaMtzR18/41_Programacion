// Escribe aquí tu codigo Javascript
/*Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.
Realizar este ejercicio con la estructura switch*/
var palabra = prompt("Introduce alguna de estas palabras: casa, mesa, perro, gato");

switch(palabra){
	case 'casa':
		alert("Casa en ingles es: house");
		break;
	case 'mesa':
		alert("Mesa en ingles es: table");
		break;
	case 'perro':
		alert("Perro en ingles es: dog");
		break;
	case 'gato':
		alert("Gato en ingles es: cat");
		break;
	default:
		alert("No existe traduccion en mi diccionario");
		break;
}


