function Mostrar()
{

var sexo = prompt("ingrese f o m").toLowerCase();

while (sexo!="f" && sexo!="m")
{

    sexo=prompt("Error")
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN