function mostrar()
{
//tomo la edad  
	var laEdad;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);

	/*if (laEdad <=12){
		alert("Es niño");
	}if(laEdad>=13 && laEdad<=17){
		alert("Es adolescente");
	}if(laEdad>=18){
		alert("Es mayor");
	}*/

	if (laEdad >=18)
	{
		alert("Es mayor");
	}else
		{
			if(laEdad<=12){
			alert("Es niño");
			}else
			{
			alert("Es adolescente");
			}
		}


}//FIN DE LA FUNCIÓN