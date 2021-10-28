let costoProductos = {
    Aqua: 200,
    Emoción: 180,
    Alegría: 160,
    Frescura: 150 }

let venta1 = {
    Aqua: "",
    Emoción:"",
    Alegría:"",
    Frescura: "" }

let venta2 = {
    Aqua: "",
    Emoción:"",
    Alegría:"",
    Frescura: "" }

var Juana={};
var Pedro={};
var suma=0;
var P=0;
var J=0;

function obtenerVentas(ventas) {
    let bandera = true;
            do {
                let valor = prompt("Ingrese la cantidad de Aqua que vendio: ");
                if(!(isNaN(valor))){
                ventas.Aqua = valor;
                bandera = false;
                }
                else {
                alert("El dato ingresado no es correcto");
                bandera = true;
                }
            }while (bandera);
            do {
                let valor = prompt("Ingrese la cantidad de Emocion que vendio: ");
                if(!(isNaN(valor))){
                ventas.Emoción = valor;
                bandera = false;
                }
                else {alert("El dato ingresado no es correcto");
                bandera = true;
                }
            }while (bandera);
            do {
                let valor = prompt("Ingrese la cantidad de Alegria que vendio: ");
                if(!(isNaN(valor))){
                ventas.Alegría = valor;
                bandera = false;
                }
                else {alert("El dato ingresado no es correcto");
                bandera = true;}
            }while (bandera);
            do {
                let valor = prompt("Ingrese la cantidad de Frescura que vendio: ");
                if(!(isNaN(valor))){
                ventas.Frescura = valor;
                bandera = false;
                }
                else {alert("El dato ingresado no es correcto");
                bandera = true;}
            }while (bandera);     
        return ventas;                  
}    
        
function asignarVentas() {
       alert("Ingreso de ventas de Juana. Presione Enter para continuar.");
       Juana=obtenerVentas(venta1);
       alert("Ingreso de ventas de Pedro. Presione Enter para continuar.");
       Pedro=obtenerVentas(venta2);
}
       
function imprimirVentasJuana() {
    console.clear();
    console.log("Datos de Venta de Juana: ")
    console.table(Juana);
    console.log("Por un valor total de: "+sumarVentas(Juana)+" USD.");
    J=parseFloat(sumarVentas(Juana));
}

function imprimirVentasPedro() {
    console.clear();
    console.log("Datos de Venta de Pedro: ")
    console.table(Pedro);
    console.log("Por un valor total de: "+sumarVentas(Pedro)+" USD.");
    P=parseFloat(sumarVentas(Pedro));
}   

function sumarVentas(venta) {
    suma=(venta.Aqua)*(costoProductos.Aqua)+(venta.Emoción*costoProductos.Emoción)+(venta.Frescura*costoProductos.Frescura)+(venta.Alegría*costoProductos.Alegría);
    return suma;
}

function vendedorMes() {
    console.clear();
    if (J>P){
        console.log("El vendedor del mes es: Juana");}
    if (J==P){
        console.log("Hay un empate de ventas");}
    if (P>J){
        console.log("El vendedor del mes es: Pedro")}
}

asignarVentas();



  


