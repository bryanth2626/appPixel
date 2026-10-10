/* =====================================================
   HEALTHYFIT · BLOG (js/blog.js)
   Qué hace: cambia el texto del botón entre "Leer más" y "Leer menos"
   cuando se abre o se cierra el resumen de cada artículo.
   (Abrir y cerrar lo hace Bootstrap; este código solo cambia la palabra.)
   ===================================================== */

// 1. Buscamos cada texto desplegable de las tarjetas del blog
document.querySelectorAll('.tarjeta-blog .collapse').forEach(function (texto) {

    // 2. Buscamos el botón que abre ese texto (apunta a su id con data-bs-target)
    var boton = document.querySelector('[data-bs-target="#' + texto.id + '"]');

    // 3. Cuando el texto termina de abrirse, el botón dice "Leer menos"
    texto.addEventListener('shown.bs.collapse', function () {
        boton.textContent = 'Leer menos';
    });

    // 4. Cuando termina de cerrarse, vuelve a decir "Leer más"
    texto.addEventListener('hidden.bs.collapse', function () {
        boton.textContent = 'Leer más';
    });
});