let marcas_automovil = ["Honda","Toyota", "BMW", "Audi"];
let numeros = [100, 32, 2, 9, 1, 540];
marcas_automovil.sort().reverse();
numeros.sort(function(a,b){return a-b});
numeros.reverse();
document.write("Items registrados: " + marcas_automovil.length + "<br />");
document.write(marcas_automovil + "<br />");
document.write("Ejemplo numeros ordenados de forma descendente: " + numeros + "<br />");


let nombre = "";
let apellido = "";
let nombre_completo = "";

nombre = prompt("Ingrese su nombre!");
apellido = prompt("Ingrese su apellido!");

nombre_completo = nombre.concat(" ").concat(apellido);
document.write(nombre_completo);


let frutas = ["Mandarina", "Manzana", "Pera"];
let verduras = ["Papa", "Ayote", "Zanahoria"];
let frutasYverduras = frutas.concat(verduras);
document.write(frutasYverduras);
console.log(frutasYverduras);









