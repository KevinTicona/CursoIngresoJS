function mostrar()
{
	var palabra;
	var letraDeLaPalabra="";
	var palabraInvertida="";

	palabra=prompt("Ingrese el palindromo");
	console.log(palabra.length);

	for (i=0;i<palabra.length; i++) {
		console.log(palabra[i]);
		if (palabra[i]==" ") {
			continue;
		}

		letraDeLaPalabra=letraDeLaPalabra+palabra[i];
		}
	for (i=0;i<letraDeLaPalabra.length; i++) {
		palabraInvertida=letraDeLaPalabra[i]+palabraInvertida;
	}

	console.log(letraDeLaPalabra);
	console.log(palabraInvertida);

	if (palabraInvertida==letraDeLaPalabra) {
		console.log("Es palindromo");
	}else{
		console.log("No lo es");
	}

	

}//FIN DE LA FUNCIÓN