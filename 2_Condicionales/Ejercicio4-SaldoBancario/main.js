// Escribe aquí tu codigo Javascript
var suma = 0;

do {
	var cuenta = prompt("Introduce numero de cuenta","0");
	cuenta = Number(cuenta);
	if (cuenta>=0){
		var saldo = prompt("Introduce el saldo","0");
		saldo = Number(saldo);
        if (saldo>0) {
            alert("Acreedor");
            suma=suma+saldo;
        } else {
            if (saldo<0) {
            	alert("Deudor.");
            } else {
                alert("Nulo.");
            }
        }
    }
	
} while(cuenta>=0);
alert("Total de saldos Acreedores: " + suma);


