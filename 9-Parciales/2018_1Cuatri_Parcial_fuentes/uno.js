
function mostrar()
{
	/*var largo;
	var ancho;
	var resultado;

	largo = prompt("Ingrese el largo");
	ancho = prompt("Ingrese el ancho");

	largo = parseInt(largo);
	ancho =parseInt(ancho);

	resultado = largo*2+ancho*2;

	alert("El perimetro seria: "+resultado);*/

	/*1_alert("ustedes son xxxx y xxxx, sus edades son xx y xx,y la suma de sus edades es xx")*/
	
	var primerNombre;
	var segundoNombre
	var primerEdad;
	var segundaEdad;

	primerNombre=prompt("Ingrese un Nombre");
	segundoNombre= prompt("Ingrese otro Nombre");

	primerEdad=prompt("Ingrese la edad del primer Nombre");
	segundaEdad=prompt("Ingrese la edad del segundo Nombre");

	primerEdad=parseInt(primerEdad);
	segundaEdad=parseInt(segundaEdad);

	suma =primerEdad+segundaEdad;

	alert("Ustedes son "+primerNombre+" y "+segundoNombre+", sus edades son "+primerEdad+" y "+segundaEdad+",y la suma de sus edades es "+suma);
}