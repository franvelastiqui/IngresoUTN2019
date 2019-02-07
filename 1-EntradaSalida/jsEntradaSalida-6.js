/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

    var uno, dos, resultado;

    uno = document.getElementById("numeroUno").value;

    uno = parseInt(uno);

    dos = document.getElementById("numeroDos").value;

    dos = parseInt(dos);

    resultado = uno + dos;

    alert("La suma es " + resultado);

}

