// Escribe aquí tu codigo Javascript
var numero1 = prompt("Escribe primer numero entero","0");
numero1 = Number(numero1);
var numero2 = prompt("Escribe segundo numero entero","0");
numero2 = Number(numero2);

if(numero1>numero2){
	var suma = numero1 + numero2;
	var resta = numero1 - numero2;
	alert("La suma es: "+ suma + ".\nLa resta es: " + resta);
}else{
	if(numero1 == numero2){
		alert("Los dos numeros son iguales!");
	}else{
		var multiplicacion = numero2 * numero1;
		var division = numero2 / numero1;
		alert("La multiplicacion es: "+ multiplicacion + ".\nLa division es: " + division);
	}
}


