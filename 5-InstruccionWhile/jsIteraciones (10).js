function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador=contador+1;

		if(numero<0){
			negativo=negativo*numero;
		}else{
			positivo=positivo+numero;
		}
	
		if(contador == 1){
	       maximo = numero;
	       minimo = numero;
     	}

      	if(contador >1 && numero > maximo){
       		maximo = numero;      
      		}else{
      			if (contador > 1 && numero < minimo){
      			minimo = numero;}
				}

		respuesta=prompt("Si no quiere continuar ingrese no.");
	
	}




}//FIN DE LA FUNCIÓN