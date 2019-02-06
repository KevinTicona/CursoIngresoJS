/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
    
    suma =primerNumero+segundoNumero;

    alert("La resultado es "+suma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
    
    resta =primerNumero-segundoNumero;

    alert("La resultado es "+resta);
	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicacion;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
    
    multiplicacion =primerNumero*segundoNumero;

    alert("La resultado es "+multiplicacion);
	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var divicion;

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);
    
    divicion =primerNumero/segundoNumero;

    alert("El resultado es "+divicion);

}

