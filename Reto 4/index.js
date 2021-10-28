
let perfumes = [
    { 
    nombre: "Aqua",
    precio: 200},
    {
    nombre: "Emoción",
    precio: 180},
    { 
    nombre: "Alegría",
    precio: 160 },
    { 
    nombre: "Frescura",
    precio: 150}
]

let vendedores = ["Juana", "Pedro"];
let venta_Juana = [];
let venta_Pedro = [];

for (let a = 0; a < vendedores.length; a++) {
  alert(`Ingrese datos de venta de ${vendedores[a]}`);
  if (vendedores[a] == "Juana") {
    for (let i = 0; i <= 3; i++) {
      venta_Juana.push(prompt(`Ingresa la cantidad de ${perfumes[i].nombre} vendidos`));
    }
  }else if(vendedores[a] == "Pedro") {
    for (let i = 0; i <= 3; i++) {
      venta_Pedro.push(prompt(`Ingresa la cantidad de ${perfumes[i].nombre} vendidos`));
    } 
}
}
console.log(venta_Juana);
console.log(venta_Pedro);

function ventas ( flag, vendedor, ventas){
    console.log(`Datos de venta de ${vendedor}`)
    let total = 0; 
    let cuenta = 0;
    if(flag){
        for (let i= 0; i < perfumes.length; i++){
            console.log(`${ventas[i]} - ${perfumes[i].nombre}`)
            cuenta = ventas[i] * perfumes[i].precio;
            total += cuenta; 
        }
        console.log(`El total de ventas es ${total}`)
    } return total;
}  



let btnJuana = document.getElementById("btn-Juana");
btnJuana.addEventListener("click",function vJuana(){
    console.clear();
    ventas(true, vendedores[0], venta_Juana);
    }
    );


let btnPedro = document.getElementById("btn-Pedro");
btnPedro.addEventListener("click",function vPedro(){
    console.clear();
    ventas(true, vendedores[1], venta_Pedro);
    }
    );


    function Mes (){
    let btnMes = document.getElementById("btn-Mes")
    console.clear();
    if((ventas(true, vendedores[1], venta_Pedro))>(ventas(true, vendedores[0], venta_Juana))){
        console.log("Pedro es el empleado del mes");
    }else if((ventas(true, vendedores[1], venta_Pedro))<(ventas(true, vendedores[0], venta_Juana))){
            console.log("Juana es el empleado del mes");
    }else if((ventas(true, vendedores[1], venta_Pedro))==(ventas(true, vendedores[0], venta_Juana))){
        console.log("Empate")}
}

    

