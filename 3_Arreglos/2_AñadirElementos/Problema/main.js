// Escribe aquí tu codigo Javascript
/*Crear un array de elementos que contenga
 nombres y posteriormente agregar más elementos por medio del método “push”*/
 /*Crear un array de elementos que contenga nombres y posteriormente agregar más elementos por medio del método “push”*/
var nombres = [];
var numero = prompt("Cuantos nombres quieres?","0");
numero = Number(numero);

for(var i = 0; i < numero ; i++){
	var nombre = prompt("Escribe un nombre");
	nombres.push(nombre);
	
	console.log(nombres[i]);
}