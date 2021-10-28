let huesped ={
    nombre: "Edgar",
    apellidoPaterno: "Garcia",
    apellidoMaterno: "Ríos",
    edad: "30",
    email:"edgar.garcia@gmail.com",
    telefono:"55-76-43-32",
    ciudad:"Queretaro",
    integrantes: "4",
    habitacion:"215",
    diasDeHospedaje:"7"
    

};

function mostrarInformacionUsuario(huesped1){
document.write ("Nombre:"+ huesped1.nombre + "<br/>");
document.write ("Apellido Paterno:"+ huesped1.apellidoPaterno+ "<br/>");
document.write ("Apellido Materno:"+ huesped1.apellidoMaterno+"<br/>");
document.write ("Edad:"+ huesped1.edad+ "<br/>");
document.write ("Email:"+huesped1.email+ "<br/>");
document.write ("Telefono:"+ huesped1.telefono+ "<br/>");
document.write ("Ciudad:"+huesped1.ciudad+ "<br/>");
document.write ("Número de integrantes:"+huesped1.integrantes+ "<br/>");
document.write ("Número de habitación:"+huesped1.habitacion+ "<br/>");
document.write ("Días de hospedaje:"+huesped1.diasDeHospedaje+"<br/>");
}
mostrarInformacionUsuario(huesped);

function modificarObjeto (objetoHuesped){
    let bandera = true;
    do{
        let dato =prompt("¿Los datos ingresados son correctos? (Escriba ¨si¨, en caso de querer actualizarlos, en caso contrario solo presione ¨Intro¨)");
        if (dato=="si"){
            dato = prompt("Ingrese el dato que desea actualizar");
            objetoHuesped[dato] =prompt("Ingrese el nuevo valor");
        }
        else{
            bandera = false;
        }
    alert ("¡Bienvenido al Resort Maya, gracias por su reservación!")
    }while (bandera);
mostrarInformacionUsuario(objetoHuesped);
}
modificarObjeto(huesped);



