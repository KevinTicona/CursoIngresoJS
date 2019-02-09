/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var suma;

    primerprecio = PrecioUno.value;
	segundoprecio = PrecioDos.value;
	tercerprecio = PrecioTres.value;

	primerprecio = parseInt(primerprecio);
	segundoprecio = parseInt(segundoprecio);
	tercerprecio = parseInt(tercerprecio);

	suma= primerprecio+segundoprecio+tercerprecio;

	alert("La suma de todos datos ingresados es: "+suma);
}

function Promedio () 
{
	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var suma;
	var promedio;

	primerprecio = PrecioUno.value;
	segundoprecio = PrecioDos.value;
	tercerprecio = PrecioTres.value;

	primerprecio = parseInt(primerprecio);
	segundoprecio = parseInt(segundoprecio);
	tercerprecio = parseInt (tercerprecio);

	suma = primerprecio+segundoprecio+tercerprecio;

	promedio = suma/3;

	alert("El promedio seria :"+promedio );


	
}
function PrecioFinal () 
{
	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var iva;
	var suma;
	var resultadofinal;

	primerprecio = PrecioUno.value;
	segundoprecio = PrecioDos.value;
	tercerprecio = PrecioTres.value;

	primerprecio = parseInt(primerprecio);
	segundoprecio = parseInt(segundoprecio);
	tercerprecio = parseInt (tercerprecio);
	
	suma = primerprecio+segundoprecio+tercerprecio;

	iva = suma*21/100;

	resultadofinal= iva +suma;

	alert("Este seria el precio final mas el IVA seria: "+resultadofinal);


}