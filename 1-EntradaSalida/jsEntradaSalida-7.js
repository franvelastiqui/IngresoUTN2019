/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

    var uno, dos, resultado

function sumar()
{	
	
    uno = document.getElementById("numeroUno").value;

    uno = parseInt(uno);

    dos = document.getElementById("numeroDos").value;

    dos = parseInt(dos);

    resultado = uno + dos;

    alert("La suma es " + resultado);
}

function restar()
{
	uno = document.getElementById("numeroUno").value;

    uno = parseInt(uno);

    dos = document.getElementById("numeroDos").value;

    dos = parseInt(dos);

    resultado = uno - dos;

    alert("La resta es " + resultado);
}

function multiplicar()
{ 
	uno = document.getElementById("numeroUno").value;

    uno = parseInt(uno);

    dos = document.getElementById("numeroDos").value;

    dos = parseInt(dos);

    resultado = uno * dos;

    alert("La multiplicacion es " + resultado);
}

function dividir()
{
	uno = document.getElementById("numeroUno").value;

    uno = parseInt(uno);

    dos = document.getElementById("numeroDos").value;

    dos = parseInt(dos);

    resultado = uno / dos;

    alert("La division es " + resultado);
}

