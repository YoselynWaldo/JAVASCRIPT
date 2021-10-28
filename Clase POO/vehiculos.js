class Vehículos{
    constructor(tipo_de_vehiculo,tipo,color, marca, modelo,tipo_combustión,tipo_transmisión){
        this.tipo_de_vehiculo = tipo_de_vehiculo,
        this.tipo = tipo,
        this.color = color,
        this.marca = marca,
        this.modelo = modelo,
        this.tipo_combustión = tipo_combustión,
        this.tipo_transmisión = tipo_transmisión
        
    }

    registrarVehiculo(){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_de_vehiculo + "</td>";
        html += "   <td>" + this.tipo + "</td>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipo_combustión + "</td>";
        html += "   <td>" + this.tipo_transmisión + "</td>";
        html += "   <td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }

}