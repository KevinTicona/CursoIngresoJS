function mostrar()
{

	var nota;
	var sexo;
	var promedio;
	var alumnos;
	var contador=0;
	var acumulador=0;
	var contadorVarones=0;

	while(contador<5){
		contador=contador+1;

		nota=prompt("Ingrese la nota del 0 al 10");
		nota=parseInt(nota);
		while(nota < 0 || nota > 10){
			nota=prompt("error, Reingrese la nota del 0 al 10");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese f ó m .");
		while(sexo!="f" && sexo!="m"){
				sexo = prompt("Reingrese f ó m .");
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


		acumulador=nota+acumulador;
	}

	promedio=acumulador/5;

	alert("El promedio de las notas es "+promedio);
	alert("la nota mas baja es "+notaMasBaja+" y el sexo es "+sexoNotaBaja);
	alert("La cantidad de varones con nota mayor a 6 es "+contadorVarones)
}