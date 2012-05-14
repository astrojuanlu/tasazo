/* Author: Juan Luis Cano Rodríguez <juanlu001@gmail.com>

*/

// Precios de los créditos
// Obtenido de la información que dio Diego en la lista de correo
var p1 = 30.0;
var p2 = 48.0;
var p3 = 108.0;
var p4 = 120.0;

$(document).ready(function(){
	// Calcula el precio de la matrícula nada más cargar la página
	$("#resultado").val(calcular());
	
	// Recalcula el precio al cambiar los valores del formulario
	$("#calculo input").change(function(event){
		$("#resultado").val(calcular());
	});
});

function calcular()
{
	// Recalcula el nuevo precio final de la matrícula
	c1 = Number($("#matricula1").val());
	c2 = Number($("#matricula2").val());
	c3 = Number($("#matricula3").val());
	c4 = Number($("#matricula4").val());
	
	return c1 * p1 + c2 * p2 + c3 * p3 + c4 * p4;
}



