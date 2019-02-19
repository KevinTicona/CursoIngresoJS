function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var mensaje="";
//alert (laHora);
	switch(laHora){
			case "7":
			case "8":
			case "9":
			case "10":
			case "11":
			case "Diciembre":
			mensaje="Es de mañana.";
			break;

			default:
			mensaje="";
			break;
		}

if (mensaje!="") {
	alert(mensaje);
}
	



}//FIN DE LA FUNCIÓN