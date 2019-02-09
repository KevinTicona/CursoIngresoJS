/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largodelterreno;
	var anchodelterreno;
	var alambre;
	var totalacomprar;

	largodelterreno = Largo.value;
	anchodelterreno = Ancho.value;

	largodelterreno = parseInt(largodelterreno);
	anchodelterreno = parseInt(anchodelterreno);

	alambre = largodelterreno*2+anchodelterreno*2;

	totalacomprar = alambre*3;

	alert("El total de alambre a comprar es: "+totalacomprar);
}
function Circulo () 
{
	var radiodelterreno;
	var area;
	var alambre;
	var totaldealambre;
	radiodelterreno = Radio.value;
    
    radiodelterreno = parseInt(radiodelterreno);

    area = radiodelterreno*radiodelterreno;

    totaldealambre= area*(3.14);

    alert("El total del alambre a comprar es: "+ totaldealambre);
}
function Materiales () 
{
	var largodelterreno;
	var anchodelterreno;
	var area;
	var cemento;
	var cal;


	largodelterreno = Largo.value;
	anchodelterreno = Ancho.value;

	largodelterreno = parseInt(largodelterreno);
	anchodelterreno = parseInt(anchodelterreno);

	area = largodelterreno*anchodelterreno;

	cemento=area*2;

	cal= area*3;

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
	
}