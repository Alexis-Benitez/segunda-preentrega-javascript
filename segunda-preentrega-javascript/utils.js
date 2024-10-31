// utils.js

// Función para validar si los números ingresados son válidos
function validarNumeros(num1, num2) {
    return !isNaN(num1) && !isNaN(num2);
}

// Función para guardar el historial en el almacenamiento local
function guardarHistorial(historial) {
    localStorage.setItem('historial', JSON.stringify(historial));
}

// Función para obtener el historial del almacenamiento local
function obtenerHistorial() {
    const historial = localStorage.getItem('historial');
    return historial ? JSON.parse(historial) : [];
}

// Función para mostrar el historial en el DOM
function mostrarHistorial(historial) {
    const historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = ''; // Limpiar historial existente
    historial.forEach(entry => {
        let div = document.createElement("div");
        div.className = 'historial-item';
        div.textContent = entry;
        historialDiv.appendChild(div);
    });
}