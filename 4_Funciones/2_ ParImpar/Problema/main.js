// Escribe aquí tu codigo Javascript
/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.*/
function encontrarParImpar(numero){
	if (numero%2 === 0){
      alert("El numero " + numero + " es par.");
    }else{
      alert("El numero " + numero + " es impar.");
    } 
}
 
var numero = prompt("Escribe un numero","0");
	numero = Number (numero);

encontrarParImpar(numero);