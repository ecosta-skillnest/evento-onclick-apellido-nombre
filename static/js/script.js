// Función para eliminar un botón
function eliminarBoton() {
    // Seleccionar el botón por su ID y guardarlo en una variable
    const boton = document.querySelector("#botoncito");
    // Eliminar el botón del DOM
    boton.remove();
}

// Función para mostrar un mensaje
function mostrarMensaje() {
    // Declarar una variable con el mensaje a mostrar
    const mensaje = "Este es un mensaje personalizado!";
    // Mostrar el mensaje en una alerta
    alert(mensaje);
}

// Función para eliminar una tarjeta
function eliminarTarjeta() {
    // Seleccionar la tarjeta por su ID y guardarla en una variable
    const tarjeta = document.querySelector("#tarjetita");
    // Eliminar la tarjeta del DOM
    tarjeta.remove();
}

// Función para cambiar el texto de un botón
function cambiarTexto() {
    // Seleccionar el botón por su ID y guardarlo en una variable
    const boton = document.querySelector("#nav-boton");
    // Cambiar el texto del botón
    boton.textContent = "Cerrar sesión";
}