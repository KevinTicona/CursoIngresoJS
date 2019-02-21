function mostrar()
{
	/* al realizar una compra,si compra de mas de dos productos se realiza un descuento del 10% y si supera los $2000 se agrega 
	un descuento adicional de 15%, si el pago s con tarjeta y no con efectivo el precio final se le agrega un 10% de recargo*/

	/*var cantidadDeProductos;
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
	alert("Su total a pagar es "+resultadoFinal);*/

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var total;
	var mensaje;
	var mensajetotal;

	numeroUno =prompt("Ingrese el primer numero");
	numeroDos =prompt("Ingrese el segundo numero");
	numeroTres =prompt("Ingrese el tercero numero");
	numeroCuatro =prompt("Ingrese el cuarto numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	numeroCuatro = parseInt(numeroCuatro);
	total =parseInt(total);

	total =numeroUno+numeroDos+numeroTres+numeroCuatro;

	if (numeroUno>numeroDos && numeroUno>numeroTres && numeroUno>numeroCuatro) {
		mensaje="El numero mayor es "+numeroUno;
		}else{
		if (numeroDos>numeroTres && numeroDos>numeroCuatro) {
			mensaje="El numero mayor es "+numeroDos;
					}else{
					if (numeroTres>numeroCuatro) {
						mensaje="El numero mayor es "+numeroTres;
						}else{
							mensaje="El numero mayor es "+numeroCuatro;
					}
			}
		}

	if (total>100) {
		total=total-(total*0.1);
		}else{
		if (total>50) {
			total=total-(total*0.05);
		}else{
			if (total<50) {
				total=total+(total*0.15);
			}
		}
	}

	if (mensaje!="") {
	alert(mensaje+);
}
}
