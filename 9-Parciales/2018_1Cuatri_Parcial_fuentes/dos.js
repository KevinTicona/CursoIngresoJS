function mostrar()
{
  /*var nombre;
  var localidad;

  nombre = elNombre.value;
  localidad = laLocalidad.value;
  
  alert("Usted es "+nombre+" y vive en la localidad de "+localidad);*/

  /*alert("El precio del producto en efectivo es :$xxxx. con tarjeta tiene un recargo de 10% que seria $xx de recargo, costandole final $xxx")*/
  
  var pagoEfectivo;
  var multiplicacion;
  var division;
  var costoFinal;

  pagoEfectivo = prompt("Ingrese el precio del producto en efectivo");
  pagoEfectivo= parseInt(pagoEfectivo);

  multiplicacion=pagoEfectivo*10;
  division=multiplicacion/100;

  costoFinal= pagoEfectivo+division;

  alert("El precio del producto en efectivo es: "+pagoEfectivo+" con tarjeta tiene un recargo de 10% que seria "+division+" de recargo, costandole final "+costoFinal);

}
