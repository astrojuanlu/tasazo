/* Author: Juan Luis Cano Rodríguez <juanlu001@gmail.com>

*/

// FIXME: Este código es penoso, y lo sé. Estoy repitiendo un montón de líneas.
// Ya habrá tiempo de solucionarlo, si la cosa funciona.

// Precios de los créditos
// Obtenido de la información que dio Diego en la lista de correo
var p1a = 17.01;
var p2a = 21.26;
var p3a = 28.92;
var p4a = 28.92;

var p1n = 30.0;
var p2n = 48.0;
var p3n = 90.0;
var p4n = 120.0;

$(document).ready(function(){
	// Calcula el precio de la matrícula nada más cargar la página
	pn = calcular_nuevo()
	pa = calcular_antiguo()
	$("#resultado .new").text(pn.toFixed(2) + ' €');
	$("#resultado .old").text(pa.toFixed(2) + ' €');
	
	// Recalcula el precio al cambiar los valores del formulario
	$("#calculo input").change(function(event){
		pn = calcular_nuevo()
		pa = calcular_antiguo()
		$("#resultado .new").text(pn.toFixed(2) + ' €');
		$("#resultado .old").text(pa.toFixed(2) + ' €');
	});
});

function calcular_nuevo()
{
	// Recalcula el nuevo precio final de la matrícula
	c1 = Number($("#matricula1").val());
	c2 = Number($("#matricula2").val());
	c3 = Number($("#matricula3").val());
	c4 = Number($("#matricula4").val());
	
	return c1 * p1n + c2 * p2n + c3 * p3n + c4 * p4n;
}

function calcular_antiguo()
{
	// Recalcula el nuevo precio final de la matrícula
	c1 = Number($("#matricula1").val());
	c2 = Number($("#matricula2").val());
	c3 = Number($("#matricula3").val());
	c4 = Number($("#matricula4").val());
	
	return c1 * p1a + c2 * p2a + c3 * p3a + c4 * p4a;
}



