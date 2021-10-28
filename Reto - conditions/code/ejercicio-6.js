 let calificación = 0;

calificación = prompt("Introduce tu calificación");

if(calificación>= 1 && calificación<=10){

 if (calificación<6){
    alert("Reprobado");
}
else if (calificación>=6 && calificación<=8){
    alert("Regular");
}
else if (calificación=9){
    alert("Bien");
}
else if (calificación=10){
    alert("Excelente");
}
}
else{
    alert("Error");
}