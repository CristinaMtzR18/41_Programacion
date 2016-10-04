// Escribe aquí tu codigo Javascript
/*Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.*/
function calcularDigitos(numero){
	var digitos = numero.length;
	
	alert("El numero " + numero + " tiene " + digitos + " digitos.");
}

var numero = prompt("Escribe numero");
calcularDigitos(numero);