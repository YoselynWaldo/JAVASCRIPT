class Motocicleta extends Vehículos{
    registrarMotocicleta(tipoMotocicleta){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_de_vehiculo+ "</td>";
        html += "   <td>" + this.tipo + "</td>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipo_combustión + "</td>";
        html += "   <td>" + this.tipo_transmisión + "</td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }
}