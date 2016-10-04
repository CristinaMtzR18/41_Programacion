// Escribe aquí tu codigo Javascript
/*Hacer un ejercicio que nos pida 10 números y luego que sume esos valores.*/
var numeros = [];
var suma = 0;

for(var i = 0; i < 10 ; i++){
	var numero = prompt("Escribe un numero");
	numero = Number (numero);
	numeros.push(numero);
	
	suma = suma + numeros[i];
	console.log(numeros[i]);
}

alert("La suma de los diez números es " + suma);