
// let precio = parseInt(prompt("Ingrese el importe"));
// let cuotas = parseInt( prompt("Ingrese la cantidad de cuotas ( 3 , 6, 12)"))
// let resultado = precio / cuotas
// if(cuotas===3){
//     let resultado= resultado + (resultado*1.18)
    
// }

// console.log(resultado)

let ingresarCosto = parseInt(prompt("Ingrese el costo del producto/productos a financiar"))
let cuotas = parseInt(prompt("Ingrese cuotas 3, 6 o 12"))
let resultado= ingresarCosto / cuotas

if(cuotas =3){
        ingresarCosto = ingresarCosto* 1.18;
        let resultado= ingresarCosto/3
    }
else if(cuotas =6){
    ingresarCosto = ingresarCosto* 1.24
    let resultado= ingresarCosto/6
}
else if(cuotas =12){
    ingresarCosto = ingresarCosto* 1.36
    let resultado= ingresarCosto/12
}
else{ 
    alert("Ingrese un numero válido")
}



console.log (resultado)
