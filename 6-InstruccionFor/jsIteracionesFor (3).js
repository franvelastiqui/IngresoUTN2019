function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while (isNaN(repeticiones)){
    var repeticiones = parseInt(prompt("No es un numero. ingrese el número de repeticiones"));
}

for (var i=0; i<repeticiones; i++)
{
    console.log("Hola");
}

}//FIN DE LA FUNCIÓN