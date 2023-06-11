function validarNombre(){
    var nombre = document.getElementById('nombre');
    var errorNombre = document.getElementById('errorNombre');
    var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/i;

    if (nombre.value == 0){
        errorNombre.innerHTML = "Rellene este campo";
        nombre.classList.add("invalido");
        return false;
    } else if (!pattern.test(nombre.value)){
        errorNombre.innerHTML = "El nombre sólo debe contener letras";
        nombre.classList.add("invalido");
        return false;
    } else {
        errorNombre.innerHTML= "";
        nombre.classList.remove("invalido");
        nombre.classList.add("valido");
        return true;
    }
}

function validarPrimerApellido(){
    var primerApellido = document.getElementById('primerApellido');
    var errorPrimerApellido = document.getElementById('errorPrimerApellido');
    var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/i;

    if (primerApellido.value == 0){
        errorPrimerApellido.innerHTML = "Rellene este campo";
        primerApellido.classList.add("invalido");
        return false;
    } else if (!pattern.test(primerApellido.value)){
        errorPrimerApellido.innerHTML = "El primer apellido sólo debe contener letras";
        primerApellido.classList.add("invalido");
        return false;
    } else {
        errorPrimerApellido.innerHTML= "";
        primerApellido.classList.remove("invalido");
        primerApellido.classList.add("valido");
        return true;
    }
}

function validarSegundorApellido(){
    var segundoApellido = document.getElementById('segundoApellido');
    var errorSegundoApellido = document.getElementById('errorSegundoApellido');
    var pattern = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/i;

    if (segundoApellido.value == 0){
        errorSegundoApellido.innerHTML = "Rellene este campo";
        segundoApellido.classList.add("invalido");
        return false;
    } else if (!pattern.test(segundoApellido.value)){
        errorSegundoApellido.innerHTML = "El segundo apellido sólo debe contener letras";
        segundoApellido.classList.add("invalido");
        return false;
    } else {
        errorSegundoApellido.innerHTML= "";
        segundoApellido.classList.remove("invalido");
        segundoApellido.classList.add("valido");
        return true;
    }
}

function validarEmail(){
    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');
    var validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(email.value == 0){
        errorEmail.innerHTML = "Rellene este campo";
        email.classList.add("invalido");
        return false;
    } else if (validarEmail.test(email.value)){
        errorEmail.innerHTML = "";
        email.classList.remove("invalido");
        email.classList.add("valido");
        return true;
    } else {
        errorEmail.innerHTML = "El formato del email no es correcto";
        email.classList.add("invalido");
        return false;
    }
}

function validarLogin(){
    var login = document.getElementById('login');
    var errorLogin = document.getElementById('errorLogin');

    if (login.value == 0){
        errorLogin.innerHTML = "Rellene este campo";
        login.classList.add("invalido");
        return false;
    } else {
        errorLogin.innerHTML= "";
        login.classList.remove("invalido");
        login.classList.add("valido");
        return true;
    }
}

function validarPassword(){
    var password = document.getElementById('password');
    var errorPassword = document.getElementById('errorPassword');

    if(password.value == 0){
        errorPassword.innerHTML = "Rellene este campo";
        password.classList.add("invalido");
        return false;
    } else if (password.value.length < 4 || password.value.length > 8){
        errorPassword.innerHTML = "Debe tener entre 4 y 8 caracteres";
        password.classList.add("invalido");
        return false;
    } else {
        password.classList.remove("invalido");
        errorPassword.innerHTML = "";
        password.classList.add("valido");
        return true;
    }
}

function validarFormulario(){
    if (validarNombre() && validarPrimerApellido() && validarSegundorApellido() && validarEmail() && validarLogin() && validarPassword()){
        return true;
    } else {
        return false;
    }
}

function consultaDatos(){
    window.location.href = "consulta.php";
}

function volver(){
    window.location.href = "index.html";
}