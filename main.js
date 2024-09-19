let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");

let mensajeDeSeguridad = document.getElementById("mensaje");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

function generar() {

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert('La cantidad de caracteres tiene que ser mayor que 8');
    }
    
    let password = '';

    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];

        /* += contactena y asigna los caracrteres  */
        password += caracterAleatorio;
    
    }
    contraseña.value = password;

    function validarSeguridad(password) {
        let tieneMayusculas = false;
        let tieneMinusculas = false;
        let tieneNumeros = false;
        let tieneEspeciales = false;
        
        // Recorremos cada carácter de la contraseña
        for (let i = 0; i < password.length; i++) {
            let char = password[i];
            
            // Verificamos si tiene mayúsculas
            if (char >= 'A' && char <= 'Z') {
                tieneMayusculas = true;
            }
            // Verificamos si tiene minúsculas
            else if (char >= 'a' && char <= 'z') {
                tieneMinusculas = true;
            }
            // Verificamos si tiene números
            else if (char >= '0' && char <= '9') {
                tieneNumeros = true;
            }
            // Verificamos si tiene caracteres especiales
            else if (cadenaCaracteres.indexOf(char) !== -1 && !(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && !(char >= '0' && char <= '9')) {
                tieneEspeciales = true;
            }
        }
    
        // Evaluamos la seguridad en función de la presencia de los diferentes tipos de caracteres
        if (tieneMayusculas && tieneMinusculas && tieneNumeros && tieneEspeciales) {
            console.log("La seguridad es alta.");
            mensajeDeSeguridad.innerHTML = "La seguridad es alta.";
        } else {
            console.log("La seguridad es media.");
            mensajeDeSeguridad.innerHTML = "La seguridad es media.";
        }
    }
    
    // Llamada a la función para validar la contraseña
    validarSeguridad(password);
    
}


function limpiar() {
    document.getElementById("cantidad").value = '';
    document.getElementById("contrasena").value = '';
    mensajeDeSeguridad.innerHTML = ' ';
}
