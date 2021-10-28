let usuario = {
    nombre: "Mario",
    email: "mario.lopez@gmail.com",
    password: "123mario",
    edad: 25,
    telefono: "90909090909"
};

function MostrarInformacionUsuario( usuario ){
    console.log(usuario.nombre);
    return usuario.edad;
}

MostrarInformacionUsuario(usuario);

let carro = {
    color: "azul",
    llantas: 4,
    modelo: "R8 AUDI",
    marca: "AUDI",
    encender: function(){
        return "El carro está encendido";
    },
    apagar: function(){
        return "Apagar carro";
    },
    llenarCombustible: function( confirmacion ){
        if( confirmacion === "si" ){
            return "Su tanque ha sido llenado";
        } else{
            return "No se ha llenado su tanque";
        }
    },
    informacionColorLLantas: function(){
        return "El color del vehiculo es: " + this.color + " y tiene " + this.llantas + " llantas";
    },
    motor: {
        nitro: true,
        turbo: false,
        cilindros: 8
    }
};

let carro2 = {
    color: "",
    llantas: 4,
    modelo: "R8 AUDI",
    marca: "AUDI",
    encender: function(){
        return "El carro está encendido";
    },
    apagar: function(){
        return "Apagar carro";
    },
    llenarCombustible: function( confirmacion ){
        if( confirmacion === "si" ){
            return "Su tanque ha sido llenado";
        } else{
            return "No se ha llenado su tanque";
        }
    },
    informacionColorLLantas: function(){
        return "El color del vehiculo es: " + this.color + " y tiene " + this.llantas + " llantas";
    },
    motor: {
        nitro: true,
        turbo: false,
        cilindros: 8
    },
    informacionMotor: function(){
        return "El motor tiene " + this.motor.cilindros + " cilindros";
    },
    solicitarInformacion: function(){
        let colorVehiculo = prompt("Ingresa un color");
        this.color = colorVehiculo;
        return "Color ingresado correctamente";
    }
};

function InformacionVehiculo( vehiculo ){
    console.log(vehiculo.solicitarInformacion());
    console.log( vehiculo.encender() );
    console.log( vehiculo.apagar() );
    console.log( vehiculo.llenarCombustible( "si" ) );
    console.log( vehiculo.informacionMotor());
    console.log( "El vehiculo tiene nitro?: " + vehiculo.motor.nitro);
    console.log( vehiculo.color);
    console.log( vehiculo.llantas);
    console.log( vehiculo.modelo);
    console.log( vehiculo.marca);
}

// function SoliticarInformacionVehiculo(){
//     let colorVehiculo = prompt("Ingresa un color");
//     carro2.color = colorVehiculo;
//     console.log(carro2.color);
// }

//SoliticarInformacionVehiculo();
InformacionVehiculo(carro2);