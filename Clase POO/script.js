function pedirDatos(){
    let tipo_de_vehiculo = prompt("Ingrese el tipo de vehículo");
    let tipo = prompt("Ingrese el tipo de vehículo o motocicleta");
    let color = prompt("Ingrese el color del vehículo");
    let marca = prompt("Ingrese la marca del vehículo");
    let modelo = prompt("Ingrese el modelo del vehículo");
    let tipo_combustión = prompt("Ingrese el tipo de combustión");
    let tipo_transmisión = prompt("Ingrese el tipo de transmisión");

    if(tipo_de_vehiculo== "Automóvil"){
        let asientos = prompt("Ingrese el número de asientos");
        let auto = new Automóvil(tipo_de_vehiculo, tipo,color, marca, modelo,tipo_combustión,tipo_transmisión,asientos);
        auto.registrarAutomóvil(asientos);
    }
    else (tipo_de_vehiculo== "Motocicleta")
        let moto = new Motocicleta(tipo_de_vehiculo,tipo, color, marca, modelo,tipo_combustión,tipo_transmisión);
        moto.registrarMotocicleta();
    
}

let btnRegistrar = document.getElementById("registrar");
btnRegistrar.addEventListener('click', pedirDatos, false);