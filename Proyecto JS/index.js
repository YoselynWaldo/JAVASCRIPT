var cuentas = [
    { username: "Mali", saldo: 200, password: 'helloworld' },
    { username: "Gera", saldo: 290,  password: 'l33t' },
    { username: "Maui", saldo: 67, password: '123' }
];


var username;
var opcionHome;

const montoOperacion = 50;


// Función para autenticar al usuario que se está loggeando
function autentication() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const user = cuentas.find(cuenta => cuenta.username === username); 
    const validPassword = user && user.password; 
    const esLoginValido = validPassword === password; 

    if(!esLoginValido) {
        console.log("Autenticación incorrecta :(");
        document.getElementById("mensajeEmergente").style.display = "flex";
    } else {
        console.log("Autenticación correcta");
        window.location.href = './index2.html' + '#' + username; // Pasar variables por la URL
    }
}

// Función que lee la opción que se ingresó en el home
function obtenerOpcion() {
    opcionHome = document.getElementById("opcionHome").value;
    username = window.location.hash.substring(1);
    console.log("Opción ingresada: " + opcionHome + "\nUsuario: " + username);
    // Funciones según la opción seleccionada
    if (opcionHome === "1") {
        consultarSaldo();
    } else if (opcionHome === "2" || opcionHome === "3") {
        document.getElementById("vistaHome").style.display = "none";
        document.getElementById("vistaTransaccion").style.display = "flex";
        document.getElementById("mensaje").innerHTML = "";
    } else {
        console.log("Opción inválida");
    }

    document.getElementById("opcionHome").value = "";
}

/*
1.  Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta */
function consultarSaldo() {
    const user = cuentas.find(cuenta => cuenta.username === username);
    const respuesta = document.getElementById("mensaje");
    respuesta.innerHTML = "<p> Saldo actual: $" + user.saldo + "</p>";
}

/* 
2. Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
3. Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total. */
function ingresarRetirarMonto() {
    const user = cuentas.find(cuenta => cuenta.username === username);
    const saldoAnterior = user.saldo;
    const respuesta = document.getElementById("mensaje");
    
    if (document.getElementById("monto").value.length == 0) { // Validar campo vacíos
        respuesta.innerHTML = "<p>Sin dato</p>";
        return;
    }
    
    const montoOperacion = parseFloat(document.getElementById("monto").value); // Hay que convertir el value a float con 'parseFloat()'

    if (montoOperacion <= 0) {  // Validación de inputs negativos
        respuesta.innerHTML = "<p>El monto debe ser mayor a $0</p>";
        return;
    }

    if(opcionHome === "2") { // Validamos si se ingresó 2 ó 3 para ver si sumamos o restamos
        if ((user.saldo + montoOperacion) > 990) {
            respuesta.innerHTML = "<p>No se puede superar el monto de $990</p><p>Saldo actual: $" + user.saldo + "</p>";
        } else {
            user.saldo += montoOperacion;
            respuesta.innerHTML = "<p> Saldo anterior a la operación: $" + saldoAnterior + "</p><p> Instrucción: Depositar $" + montoOperacion + "</p><p>Nuevo saldo: $" + user.saldo + "</p>";
        }
    } else if (opcionHome === "3") {
        if ((user.saldo - montoOperacion) < 10) {
            respuesta.innerHTML = "<p>No puedes tener menos de $10</p><p>Saldo actual: $" + user.saldo + "</p>";
        } else {
            user.saldo -= montoOperacion;
            respuesta.innerHTML = "<p> Saldo anterior a la operación: $" + saldoAnterior + "</p><p> Instrucción: Retirar $" + montoOperacion + "</p><p>Nuevo saldo: $" + user.saldo + "</p>";
        }
 }

    document.getElementById("monto").value = "";
}

// Función para cancelar una transacción y regresar al home
function cancelarTransaccion() {
    document.getElementById("vistaHome").style.display = "flex";
    document.getElementById("vistaTransaccion").style.display = "none";
    document.getElementById("mensaje").innerHTML = "";
}

// Función para cerrar sesión
function cerrarSesion() {
    location.href = "./index1.html";
}
