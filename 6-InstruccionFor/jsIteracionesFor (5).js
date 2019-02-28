function Mostrar()
{

for(var numero; ; ){
    numero=parseInt(prompt("Ingrese numero"));

    while(isNaN(numero)){
        numero=parseInt(prompt("Error"));
    }

    if (numero == 9){
        break;
    }

}



}//FIN DE LA FUNCIÓN