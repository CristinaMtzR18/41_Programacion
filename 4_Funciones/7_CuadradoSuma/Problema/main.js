// Escribe aquí tu codigo Javascript
/*Realizar un programa que calcule el cuadrado de la suma de dos números*/
function sacarCuadrado(num1,num2){
	cuadrado = Math.pow(num1 + num2, 2);
	alert("El cuadrado de la suma de los numero es " + cuadrado);
}

var num1 = prompt("Escribe primer número","0");
num1 = Number(num1);
var num2 = prompt("Escribe segundo número","0");
num2 = Number(num2);

sacarCuadrado(num1,num2);