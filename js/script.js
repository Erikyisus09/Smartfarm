document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener el valor del campo de correo electrónico
    var email = document.getElementById("email").value;

    // Verificar si el correo electrónico ingresado es el específico requerido
    if (email !== "correo@especifico.com") {
        alert("Por favor, ingrese un correo electrónico válido");
        return; // Detener la ejecución del código
    }

    // Si el correo electrónico es válido, enviar el formulario
    this.submit();
});
