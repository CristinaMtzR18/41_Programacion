// Escribe aquí tu codigo Javascript
/*A partir del siguiente array que se proporciona:
var valores = [true, 5, false, "hola", "adios", 2];

1.Determinar cuál de los dos elementos de texto es mayor
2.Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false.
3.Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos*/
// Arreglo de valores distintos
var valores = [true, 5, false, "hola", "adios", 2];
// Determinar cual de los dos elementos de texto es mayor
if (valores[3] < valores[4]){
	alert("La palabra más larga: " + valores[3]);
}else{
	alert("La palabra más larga: " + valores[4]);
}

// Obtener un resultado TRUE
var resultado = valores[0] || valores[2];
alert("Para resultado verdadero usar or: " + resultado);
 
// Obtener un resultado FALSE
resultado = valores[0] && valores[2];
alert("Para resultado falso usa and: " + resultado);
 
// Operaciones matemáticas
//Suma
var suma = valores[1] + valores[5];
alert("La suma de 5 + 2 es: " + suma);
//Resta 
var resta = valores[1]-valores[5];
alert("La resta de 5 - 2: " + resta);
//Multiplicacion
var multiplicacion = valores[1] * valores[5];
alert("La multiplicacion 5 * 2: " + multiplicacion);
//Division
var division = valores[1] / valores[5];
alert("La division 5/2 es: " + division);
//Modulo 
var modulo = valores[1] % valores[5];
alert("El modulo de 5%2 es: " + modulo);