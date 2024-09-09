
// script.js

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

function agregarAlCarrito(producto) {
    Swal.fire({
        icon: 'success',
        title: producto + ' ha sido agregado al carrito!',
        showConfirmButton: false,
        timer: 1500
    });
}

function verOfertas() {
    Swal.fire({
        title: 'Ofertas Especiales!',
        text: 'Aprovecha un 20% de descuento en nuestra colección de otoño.',
        icon: 'info',
        confirmButtonText: 'Ver productos'
    });
}

// Simulación de envío de formulario
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Mensaje Enviado',
        text: 'Gracias por contactarnos. Te responderemos pronto.',
    });
});


