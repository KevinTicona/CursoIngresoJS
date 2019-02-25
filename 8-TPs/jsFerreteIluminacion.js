/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var lamparitas;
	var precioConDescuento;
	var marcaDeLamparita;
	var totalDeCompra;
	var ingresoBruto;

	lamparitas=parseInt(lamparitas);
	totalDeCompra=parseInt(totalDeCompra);

	lamparitas=Cantidad.value;
	precioConDescuento=precioDescuento.value;
	marcaDeLamparita=Marca.value;

	totalDeCompra=35*lamparitas;

	if (lamparitas>5) {
		precioConDescuento = totalDeCompra-(totalDeCompra*50/100);
		}else{
				if(lamparitas==5){
				precioConDescuento = totalDeCompra-(totalDeCompra*30/100);
				}
				if(marcaDeLamparita=="ArgentinaLuz"){
					precioConDescuento = totalDeCompra-(totalDeCompra*40/100);
					}else{
						if(lamparitas == 4){
							precioConDescuento = totalDeCompra-(totalDeCompra*20/100);
						}
						if(marcaDeLamparita=="ArgentinaLuz" || marcaDeLamparita=="FelipeLamparas"){
						precioConDescuento = totalDeCompra-(totalDeCompra*25/100);
						}else{
							if (lamparitas == 3){
								precioConDescuento = totalDeCompra-(totalDeCompra*0.05/100);
							}
							if(marcaDeLamparita=="ArgentinaLuz"){
								precioConDescuento = totalDeCompra-(totalDeCompra*0.15/100);
							}
							if (marcaDeLamparita=="FelipeLamparas"){
								precioConDescuento = totalDeCompra-(totalDeCompra*0.1/100);
								}
							}
			

	precioDescuento.value=precioConDescuento;

	if(precioConDescuento>=120){
	ingresoBruto = precioConDescuento+(precioConDescuento*0.1/100);
	alert("IIBB Usted pago"+ingresoBruto);
	}

}