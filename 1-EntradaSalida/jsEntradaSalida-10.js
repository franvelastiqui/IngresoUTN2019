/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var importe, RESULTADO

    importe = document.getElementById("importe").value

    importe = parseInt(importe)

    porcentaje = importe / 100 * 25

    porcentaje = parseInt(porcentaje)

    RESULTADO = importe - porcentaje

    document.getElementById("resultado").value = RESULTADO
}
