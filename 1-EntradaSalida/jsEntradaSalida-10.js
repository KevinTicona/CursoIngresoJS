/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var elsueldo;
	var descuento;


    elsueldo= importe.value;
	elsueldo= parseInt(elsueldo);

	descuento= elsueldo*25/100;
	elsueldo=elsueldo-descuento;
	
	resultado.value=elsueldo;
}
