
let userInput=0;
let arreglo= [];
let numero=false;


while(!numero){
var dato = prompt ("Ingresa un número"); 
if (dato ==""){numero = true;
alert ("Error");}
else if(isNaN(dato)){
    alert("El dato ingresado no es un número");
}
else{arreglo.push(dato);
    alert("Dato correcto" + dato);}
}
alert("La suma es:"+ sumarArreglo(arreglo));

 function sumarArreglo (arreglo){
    let suma=0;
        for(let index =0; index< arreglo.length; index++){
            console.log(arreglo);
            suma += +parseFloat(arreglo[index]);}
        return suma;
        }

console.log(arreglo);
