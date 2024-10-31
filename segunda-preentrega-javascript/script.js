// script.js

// Variables para capturar entradas del usuario desde el DOM
let numero1Input = document.getElementById("numero1");
let numero2Input = document.getElementById("numero2");
let operacionSelect = document.getElementById("operacion");
let resultDiv = document.getElementById("result");

// Array para almacenar el historial de operaciones
let historialResultados = obtenerHistorial();

// Mostrar historial inicial al cargar la página
mostrarHistorial(historialResultados);

// Función para limpiar las entradas
function limpiarEntradas() {
    numero1Input.value = '';
    numero2Input.value = '';
    operacionSelect.selectedIndex = 0;
    resultDiv.innerHTML = ''; // Limpiar resultado
}

// Funciones para realizar operaciones
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return b !== 0 ? a / b : "Error: División por cero";
}

function porcentaje(a, b) {
    return (a * b) / 100;
}

function potencia(a, b) {
    return Math.pow(a, b);
}

function raiz(a, b) {
    return b > 0 ? Math.pow(a, 1 / b) : "Error: Raíz de un número negativo";
}

// Función para procesar la operación seleccionada
function procesarOperacion() {
    let numero1 = parseFloat(numero1Input.value);
    let numero2 = parseFloat(numero2Input.value);
    let operacion = operacionSelect.value;

    // Validar entradas
    if (!validarNumeros(numero1, numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    let resultadoOperacion;

    // Realizar la operación correspondiente
    switch (operacion) {
        case "suma":
            resultadoOperacion = sumar(numero1, numero2);
            break;
        case "resta":
            resultadoOperacion = restar(numero1, numero2);
            break;
        case "multiplicacion":
            resultadoOperacion = multiplicar(numero1, numero2);
            break;
        case "division":
            resultadoOperacion = dividir(numero1, numero2);
            break;
        case "porcentaje":
            resultadoOperacion = porcentaje(numero1, numero2);
            break;
        case "potencia":
            resultadoOperacion = potencia(numero1, numero2);
            break;
        case "raiz":
            resultadoOperacion = raiz(numero1, numero2);
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // Mostrar resultado
    mostrarResultado(resultadoOperacion);
    agregarAlHistorial(numero1, numero2, operacion, resultadoOperacion);
    limpiarEntradas();
}

// Función para mostrar el resultado en el DOM
function mostrarResultado(resultado) {
    resultDiv.innerHTML = "Resultado: " + resultado;
}

// Función para añadir resultados al historial
function agregarAlHistorial(num1, num2, operacion, resultado) {
    const entry = `${num1} ${operacion} ${num2} = ${resultado}`;
    historialResultados.push(entry);
    guardarHistorial(historialResultados);
    mostrarHistorial(historialResultados);
}

// Asignar eventos a los botones
document.getElementById("calcular").addEventListener("click", procesarOperacion);
document.getElementById("limpiar").addEventListener("click", () => {
    limpiarEntradas();
    resultDiv.innerHTML = ''; // Limpiar resultado
});
document.getElementById("borrarHistorial").addEventListener("click", limpiarHistorial); // Evento para borrar el historial

// Limpiar el historial del almacenamiento local
function limpiarHistorial() {
    historialResultados = [];
    guardarHistorial(historialResultados);
    mostrarHistorial(historialResultados);
}