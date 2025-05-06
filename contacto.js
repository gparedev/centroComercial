// El evento DOMContentLoaded asegura que el código se ejecute despues de que el DOM cargue completamente. Poner el Script al final hace lo mismo ya que cuando lee el script el archivo se carga completamente.
document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("mail");
    const confirmEmail = document.getElementById("mailConf");
    const submitButton = document.getElementById("botonEnviar");
    const terminos = document.getElementById("acepto");
    const errorEmail = document.getElementById("errorEmail");

    function checkEmails() {
        
        if (email.value === confirmEmail.value) {
            submitButton.disabled = false;
            errorEmail.style.display = "none";
            return true;
            
        } else {
            submitButton.disabled = true;
            errorEmail.style.display = "block";
            return false;
        }
    }


    function validacion() {
        // Si los correos son iguales y hemos pulsado aceptar terminos...
        if (checkEmails() && terminos.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
        
    }

    // Los eventos tipo input estan constantemente comprobando que el valor sea el mismo cada vez que escribimos.
    email.addEventListener("input", validacion);
    confirmEmail.addEventListener("input", validacion);

    // Los eventos tipo check se activan cuando marcamos o desmarcamos una casilla
    terminos.addEventListener("change", validacion);

});
