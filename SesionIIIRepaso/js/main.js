window.onload = () => {
    var modal = document.querySelector("dialog");
    var boton = document.querySelector("button");
    var cerrar = document.getElementById("cerrar");

    boton.addEventListener('click', () => {
        modal.setAttribute('open', 'true');
    });
    cerrar.addEventListener('click', () => {
        modal.removeAttribute('open');
    });
}