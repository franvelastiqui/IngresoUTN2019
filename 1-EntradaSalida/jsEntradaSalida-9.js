/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo, RESULTADO

    sueldo = document.getElementById("sueldo").value

    sueldo = parseInt(sueldo)

    porcentaje = sueldo / 100 * 10

    porcentaje = parseInt(porcentaje)

    RESULTADO = sueldo + porcentaje

    document.getElementById("resultado").value = RESULTADO

    alert(porcentaje)
	
}