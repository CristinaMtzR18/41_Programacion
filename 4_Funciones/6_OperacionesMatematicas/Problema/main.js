// Escribe aquí tu codigo Javascript
/*Realizar un programa que te de la opción de la operación matemática que quieres realizar por medio de funciones*/
function calcular(opcion,num1,num2){
	var respuesta = 0;
	switch(opcion){
		case 1:
			respuesta = num1+ num2;
			break;
		case 2:
			respuesta = num1 - num2;
			break;
		case 3:
			respuesta = num1 * num2;
			break;
		case 4:
			respuesta = num1 / num2;
			break;
		default:
			alert("Revisa Tus números");
			break;
	}
	alert("El resultado es: " + respuesta);
}

var opcion = prompt("Elige una opcion: \n 1. Sumar \n 2. Restar\n 3. Multiplicar\n 4. Dividir");
opcion = Number(opcion);
var num1 = prompt("Escribe primer número","0");
num1 = Number(num1);
var num2 = prompt("Escribe segundo número","0");
num2 = Number(num2);

calcular(opcion,num1,num2);