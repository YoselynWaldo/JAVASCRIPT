var registroAlumnos = [];
function datosAlumnos (){
let datosAlumno = 
    {
        numeroCarnet: "",
        nombre: "",
        materia:"",
        calificaciones:{
        periodo1:0,
        periodo2:0,
        periodo3:0, 
        periodo4:0
    },
        promedio: 0,
        promedioCalificaciones: function(){
        let total=((this.calificaciones.periodo1+this.calificaciones.periodo2+this.calificaciones.periodo3+this.calificaciones.periodo4)/4);
        return total;
        }     
    };
    
    datosAlumno.numeroCarnet = document.getElementById("txt-nombre-carnet").value;
    datosAlumno.nombre = document.getElementById("txt-nombre-alumno").value;
    datosAlumno.materia = document.getElementById("txt-materia").value;
    datosAlumno.calificaciones.periodo1 = parseFloat(document.getElementById("primerPeriodo").value);
    datosAlumno.calificaciones.periodo2 = parseFloat(document.getElementById("segundoPeriodo").value);
    datosAlumno.calificaciones.periodo3 = parseFloat(document.getElementById("tercerPeriodo").value);
    datosAlumno.calificaciones.periodo4 = parseFloat(document.getElementById("cuartoPeriodo").value); 
    datosAlumno.promedio=parseFloat(datosAlumno.promedioCalificaciones());
    registroDatos(datosAlumno);
    document.getElementById("txt-nombre-carnet").value = "";
    document.getElementById("txt-nombre-alumno").value = "";
    document.getElementById("txt-materia").value = "";
    document.getElementById("primerPeriodo").value = "";
    document.getElementById("segundoPeriodo").value = "";
    document.getElementById("tercerPeriodo").value = "";
    document.getElementById("cuartoPeriodo").value = "";
    document.getElementById("datosObtenidos").innerHTML = "";

        
};
let btEnviar = document.getElementById("btn-enviar");
btEnviar.addEventListener("click", datosAlumnos,false);
bandera =false;
function registroNotas(){
    bandera =false;
    var registro = "";
   
     for (let index = 0; index < registroAlumnos.length; index++) {
         let elemento = registroAlumnos[index];   
     {
         registro += "<tr>";
         registro += "   <th scope='row'>" + (index + 1) + "</th>";
         registro += "   <td>" + elemento.numeroCarnet + "</td>";
         registro += "   <td>" + elemento.nombre + "</td>";
         registro += "   <td>" + elemento.materia + "</td>";
         registro += "   <td>" + elemento.promedio + "</td>";
         registro += "</tr>";
         }
     }    
     document.getElementById("datosObtenidos").innerHTML =  registro;
 } 
 let btAgregar = document.getElementById("btn-notaFinal");
btAgregar.addEventListener("click", registroNotas,false);
 function registroDatos(alumno) {
    registroAlumnos.push(alumno);
    return registroAlumnos;
}


