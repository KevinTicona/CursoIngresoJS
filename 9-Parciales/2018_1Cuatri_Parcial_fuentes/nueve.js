function mostrar()
{

var peso;
var producto="";
var temperatura;
var contador=0;
var respuesta="si";
var temperaturasPares;
var nombreDelMasPesado;
var productoMasPesado;
var contadorDeProductos=0;
var contadorTemperaturas=0;
var maximo;
var minimo;

	while(respuesta == "si"){
		contador=contador+1;

		producto=prompt("Ingrese el nombre del producto.");
		while(producto==""){
				producto = prompt("Reingrese el nombre del producto.");
		}

		peso=prompt("Ingrese el peso de 1 al 100");
		peso=parseInt(peso);
		while(peso < 1 || peso > 100){
			peso=prompt("error, Reingrese la peso del 0 al 10");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingrese el temperatura de -30 al 30");
		temperatura=parseInt(temperatura);
		while(temperatura < -30 || temperatura > 30){
			temperatura=prompt("error, Reingrese la temperatura del -30 al 30");
			temperatura=parseInt(temperatura);
		}

		if (contador == 1) {
			temperaturasPares=temperatura*2;
			
		}


		if (contador == 1) {
			nombreDelMasPesado=producto;
			productoMasPesado=peso;
		}else{
			if ( peso< productoMasPesado) {
				nombreDelMasPesado=producto;
				productoMasPesado=peso;
			}
		}

		if (temperatura<0) {
			contadorDeProductos=contadorDeProductos+1;
		}

		if(contador == 1){
	       maximo = peso;
	       minimo = peso;
     	}

      	if(contador >1 && peso > maximo){
       		maximo = peso;      
      		}else{
      			if (contador > 1 && peso < minimo){
      			minimo = peso;}
				}







		alert("Ingrese si, si quiere continuar.");
	}

}
