// Escribe aquí tu codigo Javascript
/*Realizar un programa que por medio de una función nos indique si el número que el usuario ingresa es primo o no*/
function saberPrimo(numero){
	if(numero === 2 || numero === 3 || numero === 5 || numero === 7){
		alert("El número " + numero + " Es primo");	
	}else{
		if(numero%2===0 || numero%3===0 || numero%5===0 || numero%7===0){
			alert("El número " + numero + " NO es primo");
		}else{
			alert("El número " + numero + " SI es primo");
		}
	}
}
var numero = prompt("Escribe número","0");
numero = Number(numero);
saberPrimo(numero);