const colorbuttons = document.querySelectorAll("#btn-1, #btn-2, #btn-3, #btn-4, #btn-5, #btn-6");

const caja = document.getElementById("caja");

colorbuttons.forEach(button => {
    button.addEventListener("click", function () {

        const newColor = button.style.backgroundColor;

        caja.style.backgroundColor = newColor;
    });
});