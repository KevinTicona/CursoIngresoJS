function mostrar()
{
//tomo la edad  
    var laEdad;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);

	if (laEdad >= 18) {
	   	alert("Usted es mayor de edad.");
	}else{
		alert("Usted es menor de edad.");
	}

}//FIN DE LA FUNCIÓN