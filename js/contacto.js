/* =====================================================
   HEALTHYFIT · CONTACTO (js/contacto.js)
   Qué hace:
   1. En el campo "Fecha preferida" no deja elegir días que ya pasaron.
   2. Al enviar el formulario, muestra una ventana de aviso (alert).
   ===================================================== */

// ---------- 1. FECHA MÍNIMA ----------
// Buscamos el campo de fecha y le ponemos como mínimo el día de hoy
// ('en-CA' devuelve la fecha como AAAA-MM-DD, que es el formato que pide el campo)
var campoFecha = document.getElementById('fecha');
campoFecha.min = new Date().toLocaleDateString('en-CA');


// ---------- 2. AVISO DE ENVIADO ----------
var formulario = document.querySelector('.formulario-contacto');

// Cuando la persona pulsa "Enviar mensaje" (y todos los campos obligatorios están completos)
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();                                  // evita que la página se recargue

    var nombre = document.getElementById('nombre').value;     // guardamos el nombre antes de limpiar

    alert('¡Mensaje enviado! Gracias, ' + nombre + '. Te responderemos lo antes posible.');

    formulario.reset();                                       // vacía los campos
});