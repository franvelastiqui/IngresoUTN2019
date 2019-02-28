function Mostrar()
{
var numero = parseInt(prompt("ingrese numero positivo"));
var contPar=0

while (numero <=0 || isNaN(numero)){
    var numero = parseInt(prompt("No es un numero. ingrese numero positivo"));
}

for (i=1; i<=numero; i++){
    if (i%2==0){
    contPar++;
    console.log(i);
}

}
console.log("Cantidad de pares: "+contPar);
}//FIN DE LA FUNCIÓN