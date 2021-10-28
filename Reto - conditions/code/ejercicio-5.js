let día ="";
let día_inicio="Lunes";
let día_fin="Viernes";
let día_fin_semana1="Sabado";
let día_fin_semana2="Domingo";

día = prompt("Introduce el día");

if(día == día_inicio){
    alert("Buen incio de semana");
}

else if(día==día_fin){
    alert("Excelente fin");
}
else if(día==día_fin_semana1 || día==día_fin_semana2){
    alert("A recargar energía");
}

else {
    alert("No hay pendientes");
}

