class Animal{
    constructor(tipo_animal,color,edad, peso){
        this.tipo_animal=tipo_animal,
        this.color=color,
        this.edad=edad,
        this.peso=peso
    }
    registrarAnimal(){
        let html ="";
        html +="<tr>";
        html += "<th scope= 'row'>1</th>";
        html += "<td>"+ this.tipo_animal+"</td>";
        html += "<td>"+ this.color+"</td>";
        html += "<td>"+ this.edad+"</td>";
        html += "<td>"+ this.peso+"</td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforend',html);
    }
}