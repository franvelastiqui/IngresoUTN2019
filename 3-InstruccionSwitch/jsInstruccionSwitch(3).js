function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAnio);
	
switch (mesDelAnio)
{
    case "Febrero":
        alert("Este mes no tiene mas de 29 dias");
        break;
    default:
        alert("Este mes tiene 30 dias o mas");
        break;
}

}//FIN DE LA FUNCIÓN