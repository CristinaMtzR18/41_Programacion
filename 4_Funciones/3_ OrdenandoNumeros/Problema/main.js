// Escribe aquí tu codigo Javascript
/*Realizar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.*/
function ordenaMenor(elem1, elem2) {
	return elem1-elem2;
}
  
var numeros = [];
for(var i = 0; i < 3 ; i++){
  var numero = prompt("Escribe un numero","0");
  numero = Number (numero);
  numeros.push(numero);
}
alert("Los numeros son: " + numeros[0] + " " + numeros[1] + " " + numeros[2]);
alert("El orden de menor a mayor es: " + numeros.sort(ordenaMenor(numeros[0], numeros[1])));