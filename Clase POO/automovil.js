class Automóvil extends Vehículos{
    registrarAutomóvil(asientos){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.tipo_de_vehiculo + "</td>";
        html += "   <td>" + this.tipo + "</td>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipo_combustión + "</td>";
        html += "   <td>" + this.tipo_transmisión + "</td>";
        html += "   <td>"+ asientos +"</td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }
}