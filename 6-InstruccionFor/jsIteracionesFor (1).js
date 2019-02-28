function mostrar()
{

	/*var contador;
	contador=1 
	contador++
	for (; contador < 10;) {


		console.log(contador);
	}*/
/*un for que vaya del 1 al 10*/
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	var porcen;


	for (var contador=0;contador<100000;contador++) {
	
	numeroRandom=Math.floor((Math.random() * 10) + 1);

	switch(numeroRandom){
		case 1:
		contador1++;
		break
		case 2:
		contador2++;
		break
		case 3:
		contador3++;
		break
		case 4:
		contador4++;
		break
		case 5:
		contador5++;
		break
		case 6:
		contador6++;
		break
		case 7:
		porcen=contador7*100/contador;
		if(porcen>6){
			/*contador--;*/
			continue;
		}
		contador7++;
		break
		case 8:
		contador8++;
		break
		case 9:
		contador9++;
		break
		case 10:
		contador10++;
		break

	}

	}
	console.log(""+contador1+"su porcentaeje es"+contador1*100/contador+"%");
	console.log("El"+contador2+"su porcentaeje es"+contador2*100/contador+"%");
	console.log("El"+contador3+"su porcentaeje es"+contador3*100/contador+"%");
	console.log("El"+contador4+"su porcentaeje es"+contador4*100/contador+"%");
	console.log("El"+contador5+"su porcentaeje es"+contador5*100/contador+"%");
	console.log("El"+contador6+"su porcentaeje es"+contador6*100/contador+"%");
	console.log("El"+contador7+"su porcentaeje es"+contador7*100/contador+"%");
	console.log("El"+contador8+"su porcentaeje es"+contador8*100/contador+"%");
	console.log("El"+contador9+"su porcentaeje es"+contador9*100/contador+"%");
	console.log("El"+contador10+"su porcentaeje es"+contador10*100/contador+"%");

	console.log(contador);
	suma=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
	console.log(suma);

}