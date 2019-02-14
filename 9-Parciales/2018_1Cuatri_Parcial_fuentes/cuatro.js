function mostrar()
{
	/* al realizar una compra,si compra de mas de dos productos se realiza un descuento del 10% y si supera los $2000 se agrega 
	un descuento adicional de 15%, si el pago s con tarjeta y no con efectivo el precio final se le agrega un 10% de recargo*/

	var cantidadDeProductos;
	var totalDeCompra;
	var tipoDePago;
	var resultado;
	var recargo;
	var resultadoFinal;

	cantidadDeProductos=prompt("Ingrese el total de productos que compro.");
	totalDeCompra=prompt("Ingrese el total de pago.");
	tipoDePago=prompt("Si paga en efectivo ingrese 1 y si es en tarjeta 2");


	cantidadDeProductos=parseInt(cantidadDeProductos);
	totalDeCompra=parseInt(totalDeCompra);
	tipoDePago=parseInt(tipoDePago);

	

	if(cantidadDeProductos>2){
		resultado=totalDeCompra*10/100;
		resultadoFinal=totalDeCompra-resultado;
		if(totalDeCompra>2000){
			resultado=totalDeCompra*25/100;
			resultadoFinal=totalDeCompra-resultado;
			if(tipoDePago=2){
			recargo=resultadoFinal*10/100;
			resultadoFinal=resultadoFinal+recargo;
			}
		}
	}
	alert("Su pago seria de "+resultadoFinal);
}
