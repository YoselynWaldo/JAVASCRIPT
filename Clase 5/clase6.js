let usuario ={
    nombre: "Mario",
    email:"mario.lopez@gmail.com",
    edad: 25
};

function MostrarInformacionUsuario(usuario){
    console.log(usuario.nombre);
    return usuario.edad;
}

MostrarInformacionUsuario(usuario);


let carro={
    color:"azul",
    llantas: 4,
    modelo: "R8 AUDI",
    marca: "AUDI",
    encender: function(){
return"El carro está encendido";
    },
    apagar: function(){
        return "Apagar carro";
    },
    llenarCombustible:function(confirmacion){
        if (confirmacion==="si"){
            return"Su tanque ha sido llenado";
        }
        else{
            return "Su carro no ha sido llenado";
        }
    },
    informacionColorLlantas: function(){
        return "El color del vehiculo es:" + this.color +"tiene"+ this.llantas+ "llantas";
    },
    motor:{
        nitro:true,
        turbo:false,
        cilindro: 8
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
        return "El motor tiene" + this.motor.cilindro+"cilindros";
    },
    solicitarInformacion: function(){
        let colorVehiculo = prompt ("Ingrese un color");
        this.color=colorVehiculo;
        return "Color ingresado correctamente";
    }
};

function InformacionVehiculo(devf){
console.log(devf.solicitarInformacion());
console.log(devf.encender());
console.log(devf.apagar());
console.log(devf.llenarCombustible("si"));
console.log(devf.informacionColorLlantas());
console.log(devf.informacionMotor());
console.log("El vehiculo tienen nitro ?" + InformacionVehiculo.motor.nitro);
console.log(devf.color);
console.log(devf.llantas);
console.log(devf.modelo);
console.log(devf.color);
}

InformacionVehiculo(carro2);
