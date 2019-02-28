function mostrar()
{

var numero;
var letra;
var promedio;
var alumnos;
var contador=0;
var respuesta="si";
var acumulador=0;
var contadorVarones=0;

	while(respuesta== "si"){
		contador=contador+1;

		numero=prompt("Ingrese un numero del -100 al 100");
		numero=parseInt(numero);
		while(numero < -100 || numero > 100){
			numero=prompt("error, Reingrese la numero del 0 al 10");
			numero=parseInt(numero);
		}

		letra=prompt("Ingrese una letra.");
		while(letra>0){
				letra = prompt("Reingrese una letra.");
		}

		if (contador == 1) {
			notaMasBaja=nota;
			sexoNotaBaja=sexo;
		}else{
			if ( nota< notaMasBaja) {
				notaMasBaja=nota;
				sexoNotaBaja=sexo;
			}
		}

		if (sexo =="m" && nota >=6) {
			contadorVarones=contadorVarones+1
		}

		alert("Ingrese si, si quiere continuar.");
	}




}
