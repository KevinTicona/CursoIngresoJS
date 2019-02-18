function mostrar()
{
	/* al realizar una compra,si compra de mas de dos productos se realiza un descuento del 10% y si supera los $2000 se agrega 
	un descuento adicional de 15%, si el pago s con tarjeta y no con efectivo el precio final se le agrega un 10% de recargo*/

	var cantidadDeProductos;
	var totalDeCompra;
	var tipoDePago;
	var resultadoFinal;

	cantidadDeProductos=prompt("Ingrese el total de productos que compro.");
	totalDeCompra=prompt("Ingrese el total de pago.");
	tipoDePago=prompt("Si paga en efectivo ingrese 1 y si es en tarjeta 2");


	cantidadDeProductos=parseInt(cantidadDeProductos);
	totalDeCompra=parseInt(totalDeCompra);

	

	if(cantidadDeProductos>2){
		resultadoFinal= totalDeCompra-(totalDeCompra*0.1);
		if(totalDeCompra>2000){
			resultadoFinal= resultadoFinal-(resultadoFinal*0.15);
			if(tipoDePago == "2"){
			resultadoFinal= resultadoFinal+(resultadoFinal*0.1);
			}
		}
	}
	alert("Su total a pagar es "+resultadoFinal);
}
