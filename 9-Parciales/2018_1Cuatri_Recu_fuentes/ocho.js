function mostrar()
{
	var numero;
	var letra;
	var respuesta="si";


		while(respuesta=="si"){
		contador=contador+1;

		numero=prompt("Ingrese un numero entre -100 y 100");
		numero=parseInt(numero);
		while(numero < -100 || numero > 100){
			numero=prompt("error, Reingrese la numero del 0 al 10");
			numero=parseInt(numero);
			}

		letra=prompt("Ingrese una letra");
		while(letra==""){
				letra=prompt("error,Reingrese una letra");
			}

			alert("Desea continuar Ingrese si");

		}

}
