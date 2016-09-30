// Escribe aquí tu codigo Javascript
var texto = prompt("Introduce un texto");
var numero = prompt("Introduce las veces que quieras que se repite","0");
numero = Number(numero);

for(var i=0; i< numero; i++){
	repeticion = i+1;
	alert("Repeticion: " + repeticion + "\n" +texto);
}


