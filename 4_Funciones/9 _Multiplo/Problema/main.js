// Escribe aquí tu codigo Javascript
/*Programa que calcula los 10 primeros múltiplos del número que queramos, utilizando una función que retorna parámetro.*/
function calcularMultiplos(numero){
	for(var i=1; i <= 10; i++){
		multiplo = numero * i;
		alert(numero+ " * " + i + " = "+ multiplo);
		console.log(numero+ " * " + i + " = "+ multiplo);
	}
}
var multiplo = 0;
var numero = prompt("Escribe numero","0");
numero = Number(numero);
calcularMultiplos(numero);