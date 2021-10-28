let numeros = [5,5,10,10,20,20,30];

function sumarArreglo (arreglo){
    let suma =0;
    for(let index =0; index< arreglo.length; index++){
        suma += arreglo[index];
    }
    return suma;
}
console.log(sumarArreglo(numeros));