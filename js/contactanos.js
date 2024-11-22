// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Muestra el mensaje de éxito
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Limpia los campos del formulario
    this.reset();

    // Oculta el mensaje después de 5 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});