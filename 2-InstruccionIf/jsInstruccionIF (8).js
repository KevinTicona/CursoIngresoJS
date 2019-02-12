function mostrar()
{
//tomo la edad  
	var laEdad;
	var estado;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);

	estado = estadoCivil.value;

	if (laEdad <=17 && estado=="Soltero"){
	}else{
		if (laEdad >=18 && estado=="Soltero"){
			alert("Es soltero y no es menor");
		}
	}


}//FIN DE LA FUNCIÓN