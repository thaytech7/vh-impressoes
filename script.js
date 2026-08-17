const botaoMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});
const elementosRevelar = document.querySelectorAll(".revelar");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("ativo");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementosRevelar.forEach((elemento) => {
    observador.observe(elemento);
});