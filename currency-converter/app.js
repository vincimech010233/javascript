function convertir() {
    const cantidad = document.getElementById('cantidad').value;
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;

    if (cantidad === '' || cantidad <= 0) {
        alert('Por favor, ingrese una cantidad válida');
        return;
    }

    // Datos simulados de tasas de cambio
    const tasasCambioSimuladas = {
        "USD": { "EUR": 0.85, "GBP": 0.75, "USD": 1 },
        "EUR": { "USD": 1.18, "GBP": 0.88, "EUR": 1 },
        "GBP": { "USD": 1.33, "EUR": 1.14, "GBP": 1 }
    };

    // Obtener la tasa desde los datos simulados
    if (tasasCambioSimuladas[monedaOrigen] && tasasCambioSimuladas[monedaOrigen][monedaDestino]) {
        const tasa = tasasCambioSimuladas[monedaOrigen][monedaDestino];
        const resultado = cantidad * tasa;

        document.getElementById('resultado').innerText = `${cantidad} ${monedaOrigen} equivale a ${resultado.toFixed(2)} ${monedaDestino}`;
    } else {
        document.getElementById('resultado').innerText = 'No se encontró la tasa de cambio para las monedas seleccionadas.';
    }
}
