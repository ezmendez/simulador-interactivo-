
let precio = parseInt(prompt("Ingrese el importe"));
let cuotas = parseInt( prompt("Ingrese la cantidad de cuotas ( 3 , 6, 12)"))
let resultado = precio / cuotas
if(cuotas===3){
    let resultado= resultado + (resultado*1.18)
    
}

console.log(resultado)