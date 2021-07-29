const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const titulo = document.querySelector(".title")
const space = document.querySelector(".menu")
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
    titulo.classList.toggle("ocultar")
    space.classList.toggle("espacio")
});

const subMenu = document.querySelector("#mostrar_smenu");
    const subMenu2 = document.querySelector("#mostrar_smenu2");
        subMenu.addEventListener("click", function(){
            subMenu2.classList.toggle("mostrar2")
        });


