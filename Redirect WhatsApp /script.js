document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const mensaje = document.getElementById('mensaje').value;
    const telefono = "123456789";  // Cambia esto por el número al que deseas enviar el mensaje
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});
