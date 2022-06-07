let interes = 1.7;
let monto = 0;
let total = 0;
let cuotas = 0;

const pedirMonto = () => {
    monto = Number(prompt("Ingrese el monto a solicitar para su credito (Minimo 5.000, Maximo 50.000"));
    while (isNaN((monto)) || monto < 5000 || monto > 50000 ) {
        monto = Number(prompt("Ingrese el monto que desea, entre 5.000 y 50.000."));
    }
}

const pedirCuotas = () => {
    cuotas = Number(prompt("¿En cuantas cuotas quiere pagar? 1-24"))
    while (isNaN(cuotas) || cuotas > 24 || cuotas == 0) {
        cuotas = Number(prompt("Ingrese en cuantas cuotas desea pagar, de 1 a 24"))
    } 
}

const init = () => {
    pedirMonto();   
    pedirCuotas();
      total = monto * interes/cuotas
} 
init();
alert("Tu total a pagar durante" +" "+ cuotas +" "+ "meses, será de"+" "+ total +"$ARS")