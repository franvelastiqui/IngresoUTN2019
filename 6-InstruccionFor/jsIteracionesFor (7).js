function Mostrar()
{

var numero = parseInt(prompt("ingrese numero positivo"));
var contador=0

while (numero <=0 || isNaN(numero)){
    var numero = parseInt(prompt("No es un numero. ingrese numero positivo"));
}

for (i=1; i<=numero; i++){
    if (numero%i==0){
    contador++;
    console.log(i);
}

}
console.log("Cantidad de divisores: "+contador);


}//FIN DE LA FUNCIÓN