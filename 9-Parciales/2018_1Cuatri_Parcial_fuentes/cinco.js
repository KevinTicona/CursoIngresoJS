function mostrar()
{

	var habitacion;
	var TipoDePago;
	var total;
	var mensaje;
	var paquete;

	habitacion = parseInt(habitacion);
	total = parseInt(total);

	habitacion = prompt("Ingrese el precio de la habitación");
	TipoDePago = prompt("Si es Tarjeta Visa ingrese 1, si Paypal ingrese 2, si es mercadoPago 3, si es en Efectivo 4 o si es otro medio de pago ingrese 5");
	paquete = prompt("Si compraste el paquete (todoIncluido) ingrese 1 o el paquete (soloDesayuno) ingrese 2 ");

	switch(TipoDePago){
		case "1":
		case "3":
		total=habitacion-(habitacion*0.1);
		break;
		case "2":
			switch(paquete){
				case "1":
				total=habitacion-(habitacion*0.25);
				break;
				default:
				total=habitacion-(habitacion*0.15);
				break;
			}
		case "4":
			switch(paquete){
				case "1":
				total=habitacion-(habitacion*0.3);
				break;
				case "2":
				total=habitacion-(habitacion*0.35);
				break;
				default:
				total=habitacion-(habitacion*0.2);
				break;
			}
		case "5":
		total=habitacion-(habitacion*0.05);
		break;
	}

	if (mensaje!="") {
	alert(mensaje);
}

}
