function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var mensaje="";
laHora=parseInt(laHora);

//alert (laHora);
	switch(laHora){
			case laHora:
			if (laHora>=7 && laHora<=11) {
					mensaje="Es de mañana.";
					}
			if (laHora>=12 && laHora<=19) {
					mensaje="Es de tarde.";
					}
			if (laHora>=20 && laHora<=24 || laHora>=0 && laHora<=6) {
					mensaje="Es de noche.";
					}else{
					mensaje="la hora no existe.";
					}
			break;
			}

if (mensaje!="") {
	alert(mensaje);
}
	

}//FIN DE LA FUNCIÓN