document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreinput = document.getElementById('nombre');
    const asuntoinput = document.getElementById('asunto');
    const mensajeinput = document.getElementById('mensaje');

    const errorNombre = document.querySelector('.errorNombre');
    const errorAsunto = document.querySelector('.errorAsunto');
    const errorMensaje = document.querySelector('.errorMensaje');
    const resultado = document.querySelector('.resultado');

const namepattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

let valid = true;

if (!namepattern.test(nombreinput.value)) {
    errorNombre.textContent = 'El nombre es requerido';
    valid = false;
} else {
    errorNombre.textContent = '';
}   

if (!namepattern.test(asuntoinput.value)) {
    errorAsunto.textContent = 'El asunto es requerido';
    valid = false;
} else {
    errorAsunto.textContent = '';
}

if (!namepattern.test(mensajeinput.value)) {
    errorMensaje.textContent = 'El mensaje es requerido';
    valid = false;
} else {
    errorMensaje.textContent = ''; 
}

if (valid) {
    resultado.textContent = 'Mensaje enviado con exito';
} else {    
    resultado.textContent = '';
}
});