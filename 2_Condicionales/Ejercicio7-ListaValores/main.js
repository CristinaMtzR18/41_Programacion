// Escribe aquí tu codigo Javascript
var lista1=0;
var contador=0;

while(contador<3){
    numero=prompt("Ingrese valor de la primera lista");
    numero=Number(numero);
   	lista1=lista1+numero;
    contador++;
}

lista1=lista1;
console.log(lista1);

var lista2=0;
contador = 0;
while(contador<3){
	numero=prompt("Ingrese valor de la segunda lista");
	numero=Number(numero);
	lista2=lista2+numero;
    contador++;
}

lista2=lista2;
console.log(lista2);

if (lista1>lista2){
    alert("Tiene mayor valor la lista1");
}else{
	if (lista1<lista2){
      alert("Tiene mayor valor la lista2");
    }else{
      alert("Tienen el mismo valor acumulado las dos listas");
	}
}



