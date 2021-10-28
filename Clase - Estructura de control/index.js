//Imprimir los numeros del 1 al 10

// var index = 1;
// while(index < 10){
//     console.log( "Conteo: " + index );
//     index++;
// }


//Guarda un arreglo de valores introducidos por el usuario
//Si el usuario no introduce un valor, termina el ciclo y validar que el campo no este vacio

// let arreglo = [];
// var userInput;
// while(!(userInput=="")){
//     userInput = prompt("Ingresa cualquier carácter");
//     if(userInput == ""){
//         //no hacer nada
//     } else {
//         arreglo.push(userInput);
//     }
    
// }

// console.log( "Introduciste estos valores: " + arreglo);


//conteo de numeros del 1 al 10, mandar a imprimir en consola

 var contador = 0;
 do {
     contador = prompt ("Hola");
     contador++;
    console.log( "Conteo: " + contador);
 } while( contador < 10 );


//Del 1 al 10, ¿cuantos numeros son multiplos de 2?

// var contador = 0;
// for(var index = 1; index <= 10; index++){
//     if( index % 2 == 0 ){
//         contador = contador + 1; // es lo mismo que contador++;
//         console.log( index + " es multiplo de 2" );
//     }
// }

// console.log("De 0 a 10 existen " + contador + " multiplos de 2");


//Ejemplo de acumular valores

// var acumulador = 0;
// for(var index = 0; index <= 4; index++){
//     console.log("antes de acumular");
//     console.log(acumulador);
//     console.log(index);
//     console.log("despues de acumular");
//     acumulador = acumulador + index;
//     console.log(acumulador);
// }