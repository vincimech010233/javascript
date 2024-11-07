document.getElementById("mi-boton").addEventListener("click", function() {
    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";  // Muestra el mensaje

    // Después de 3 segundos, oculta el mensaje
    setTimeout(function() {
        mensaje.style.display = "none";
    }, 3000);  // 3000 milisegundos = 3 segundos
});
