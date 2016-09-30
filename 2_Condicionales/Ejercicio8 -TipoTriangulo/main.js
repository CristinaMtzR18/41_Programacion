// Escribe aquí tu codigo Javascript
/*Realizar un programa que lee la longitud de los 3 lados de un triángulo y analiza qué tipo de triángulo es: no es triángulo, equilátero, isósceles, escaleno, rectángulo*/
var lado1 = prompt("Introduce primer lado","0");
lado1 = Number(lado1);
var lado2 = prompt("Introduce segundo lado","0");
lado2 = Number(lado2);
var lado3 = prompt("Introduce tercer lado","0");
lado3 = Number(lado3);

//desigualdad del triangulo
if(lado1+lado2<lado3 || lado1+lado3<lado2 || lado2+lado3<lado1){
	alert("No es triangulo");
}else{
	if(lado1==lado2 && lado2==lado3){
		alert("Triaungulo Equilatero");
	}else{
		if(lado1==lado2 || lado1==lado2 || lado2==lado3){
			alert("Triangulo Isoceles");
		}else{
			var lado1Cuadrado = lado1*lado1;
			var lado2Cuadrado = lado2*lado2;
			var lado3Cuadrado = lado3*lado3;
	
			if(lado1Cuadrado+lado2Cuadrado==lado3Cuadrado||lado1Cuadrado+lado3Cuadrado==lado2Cuadrado||lado2Cuadrado+lado3Cuadrado==lado1Cuadrado){
				alert("Triangulo Rectangulo");	
			}else{
				alert("Triangulo Escaleno");
			}
		}
	}
}


