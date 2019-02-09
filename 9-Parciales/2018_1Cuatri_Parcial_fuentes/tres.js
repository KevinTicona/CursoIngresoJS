function mostrar()
{
	var precio;
	var descuento;
	var resultado;
	var multiplicacion;
	var resultadofinal;

	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el Porcentaje del descuento que quiere realizar");

	precio = parseInt(precio);
	descuento = parseInt(descuento);	

	multiplicacion= precio*descuento;

	multiplicacion= parseInt(multiplicacion);

	resultado= multiplicacion/100;

	resultado=document.getElementById("elPrecioFinal").value;
}
