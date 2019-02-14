function Mostrar()
{
//tomo la edad  

var edad, estado;

edad = parseFloat(document.getElementById("edad").value);
estado = document.getElementById("estadoCivil").value;


if (edad>17 && estado=="Soltero")
{
    alert("Es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN