// Escribe aquí tu codigo Javascript
/*Elaborar una función a la cual le enviemos tres enteros y muestre el menor.*/
function encontrarMenor(num1,num2,num3){
  if (num1<num2 && num1<num3){
    alert("El menor de los tres valores es " + num1);
  }else{
    if (num2 < num3){
      alert("El menor de los tres valores es " + num2);
    }else{
      alert("El menor de los tres valores es " + num3);
    }
  } 
}
  
var numeros = [];
for(var i = 0; i < 3 ; i++){
  var numero = prompt("Escribe un numero","0");
  numero = Number (numero);
  numeros.push(numero);
}
alert("Los numeros son: " + numeros[0] + " " + numeros[1] + " " + numeros[2]);
encontrarMenor(numeros[0],numeros[1],numeros[2]);