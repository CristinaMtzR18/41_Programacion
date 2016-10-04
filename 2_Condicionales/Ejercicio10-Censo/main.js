// Escribe aquí tu codigo Javascript
var documento;
var edad;
var totalPersonas=0;
var totalVarones=0;
var totalMujeres=0;
var totalVaronesRango=0;
do{
	documento = prompt("Introduce número de documento","0");
	documento = Number(documento);
    if (documento > 0)
    {
      edad = prompt("Introduce la edad","0");
      edad = Number(edad);
      sexo = prompt("Introduce el sexo, masculino o femenino ");
      if (sexo == "masculino")
      { 
        totalVarones++;
        if (edad >= 16 && edad <= 65)
        {
          totalVaronesRango++;
        }
      } 
      if (sexo == "femenino")
      { 
        totalMujeres++;
      } 
      totalPersonas++;
    }
}while(documento !== 0);
alert("Total de personas censadas: " + totalPersonas + 
  	"\nCantidad de varones: " + totalVarones + "\nCantidad de mujeres: " 
  	+ totalMujeres + "\nCantidad de varones entre 16 y 65 años: " + totalVaronesRango);