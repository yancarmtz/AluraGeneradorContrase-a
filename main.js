let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 

function generar() {

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert('La cantidad de caracteres tiene que ser mayor que 8');
    }
    
    let password = '';

    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        /* += contactena y asigna los caracrteres  */
        password += caracterAleatorio;
    
    }
    contraseña.value = password;
}













