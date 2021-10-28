let primerValor=prompt("introduce el primer numero ");
		let segundoValor=prompt("introduce el segundo numero ");
 
		if(parseInt(primerValor)>parseInt(segundoValor))
		{
			alert("El primer número es mas grande que el segundo");
		}else if(parseInt(primerValor)<parseInt(segundoValor)){
			alert("El primer número es mas pequeño que el segundo");
		}else{
			alert("Ambos número son iguales");
		}