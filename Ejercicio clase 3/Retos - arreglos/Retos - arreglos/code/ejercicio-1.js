
let array=[];
let aleatorio = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
aleatorio.forEach(function(array,index,arr){
    
    console.log(array);
    document.write(array);
});