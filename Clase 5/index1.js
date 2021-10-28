var tipoDedato = prompt("Ingresa un dato");

function dato () {
    if (typeof (tipoDedato)=="string"){
        if(isNaN(tipoDedato)==false){
            alert("Dato númerico");
        } else  {
            alert("Dato string");
        }
     } else{
            console.log(typeof(tipoDedato));
        }
        return "El dato ingresado es:" + tipoDedato;
    }

    console.log(dato());
    

