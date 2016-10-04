// Escribe aquí tu codigo Javascript
/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
function determinarTexto(cadena) {
  if(cadena == cadena.toUpperCase()) {
    alert("El texto: \n"+ cadena + "\n Está formada sólo por mayúsculas");
  }else{
  	if(cadena == cadena.toLowerCase()) {
    alert("El texto: \n"+ cadena + "\n Está formada sólo por minúsculas");
  	}else{
    alert("El texto: \n"+ cadena + "\n Está formada por mayúsculas y minúsculas");
  	}
  }
}

var texto = prompt("Escribe un texto");
determinarTexto(texto);