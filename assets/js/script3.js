document.getElementById('btn-sumar').addEventListener('click', function() {

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    const suma = valor1 + valor2;

    document.querySelector('.resultado').textContent = suma;
    
});

document.getElementById('btn-restar').addEventListener('click', function() {

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    let resta = valor1 - valor2;

    if (resta < 0) {
        resta = 0;
    }

    document.querySelector('.resultado').textContent = resta;
    
});