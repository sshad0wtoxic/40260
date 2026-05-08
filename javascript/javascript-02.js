// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")
// let b0 = document.getElementById("b0")

let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");

// Variables globales para guardar los números y la operación
let prm1 = 0;
let operacion = "";

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores")
            boton.addEventListener("click", pintar);
        else
            boton.addEventListener("click", pintar2);
    }
}

function pintar(e) {
    resultado.value += e.target.innerText;
}

function pintar2(e) {
    let operacionSeleccionada = e.target.innerText;

    if (operacionSeleccionada === "=") {
        igual();
    } else if (operacionSeleccionada === "Ce") {
        limpiar();
    } else {
        // Si es +, -, * o /
        prm1 = resultado.value;
        operacion = operacionSeleccionada;
        resultado.value = "";
    }
}

function igual() {
    let prm2 = resultado.value;
    let calculo = 0;

    // Convertimos a número para hacer la operación matemática
    let n1 = parseFloat(prm1);
    let n2 = parseFloat(prm2);

    switch (operacion) {
        case "+": calculo = n1 + n2; break;
        case "-": calculo = n1 - n2; break;
        case "*": calculo = n1 * n2; break;
        case "/": calculo = n1 / n2; break;
    }
    
    resultado.value = calculo;
}

function limpiar() {
    resultado.value = "";
    prm1 = 0;
    operacion = "";
}