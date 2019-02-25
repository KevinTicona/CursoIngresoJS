function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo;
	var minimo;

	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador=contador+1;
	
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

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;

}//FIN DE LA FUNCIÓN