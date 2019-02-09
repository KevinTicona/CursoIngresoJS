
function mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo = prompt("Ingrese el largo");
	ancho = prompt("Ingrese el ancho");

	largo = parseInt(largo);
	ancho =parseInt(ancho);

	resultado = largo*2+ancho*2;

	alert("El perimetro seria: "+resultado);
	
}