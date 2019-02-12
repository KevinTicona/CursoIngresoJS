function mostrar()
{
//tomo la edad  
	var laEdad;
	var estado;

	laEdad=edad.value;

	laEdad=parseInt(laEdad);

	estado = estadoCivil.value;

	if (laEdad <=17 && estado=="Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}
	


}//FIN DE LA FUNCIÓN