let helado =50;
let opcion1="helado";
let opcion2="oreo";
let opcion3="kitkat";
let opcion4="brownie";

let cantidad=0;
let topping="";
let covertura="";
let precioCovertura=0;
let total=0;
cantidad = prompt("¿Cuantos helados quieres?");
document.write("<br/>");
topping= prompt("¿Gusta covertura?");
if(topping=="si"){
document.write(helado);

covertura= prompt("¿Qué tipo de covertura quieres?");
if(covertura==opcion2){

    document.write("<br/>");
    precioCovertura=60; 
document.write(precioCovertura+"<br/>");
}

else if(covertura==opcion3){
    document.write("<br/>");
    precioCovertura=65; 
    document.write(precioCovertura+"<br/>");   
}
else if(covertura==opcion4){

    precioCovertura=70; 
document.write(precioCovertura+"<br/>");
}
}

else if(topping=="no"){
    alert("No tenemos ese topping,lo sentimos");
    
}
document.write("<br/>");
total= cantidad*(precioCovertura+helado+"<br/>");
document.write(total);





