function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta =="si"){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador=contador+1;
		if(numero<0){
			negativo=negativo*numero;
		}else{
			positivo=positivo+numero;
		}

		respuesta=promt("Desea continuar ingrese: si");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN