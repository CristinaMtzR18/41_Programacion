// Escribe aquí tu codigo Javascript
var numero = prompt("Escribe un numero entero","0");
numero = Number(numero);
var factorial = numero;

for(var i = factorial-1; i >= 1; i--){
	factorial = factorial * i;
	console.log(" es " + factorial);
}

alert("El factorial de " + numero + " es " + factorial);


