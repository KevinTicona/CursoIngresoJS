/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var resta;
    var resultado;

	fahrenheit = Temperatura.value;

	resta = fahrenheit-32;

	resultado = resta/1.8;

	alert(fahrenheit+" Fahrenheit son "+resultado+" centígrados.");

}

function CentigradosFahrenheit () 
{
    var centigrados;
	var multiplicacion;
	var resultado;

	centigrados = Temperatura.value;

	multiplicacion = (centigrados*1.8);

	resultado = multiplicacion+32;

	alert(centigrados+" centígrados son "+resultado+" fahrenheit.");

}
