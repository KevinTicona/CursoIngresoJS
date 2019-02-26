function mostrar()
{

/*var repetciones = prompt("ingrese el número de repeticiones");*/

	var numeroAnterior;
	var numeroIngresado;
	var recorrido;
	var acumulador;

	numeroIngresado=prompt("ingrese el numero");
	numeroIngresado=parseInt(numeroIngresado);


	for (recorrido=numeroIngresado-1;recorrido>1;recorrido++) {

		for (numeroAnterior=recorrido-1; numeroAnterior>0; numeroAnterior--) {
				if (numeroIngresado % numeroAnterior==0 ){
					acumulador =acumulador+numeroAnterior
				}
				
			}
	}	

	if (acumulador==numeroIngresado) {
		console.log("Es perfecto" + numeroIngresado);
		}


}//FIN DE LA FUNCIÓN