const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const space = document.querySelector(".menu")
const expandir = document.querySelector(".cabezera");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
    space.classList.toggle("espacio")
    expandir.classList.toggle("exp_cabezera")

});

const subMenu = document.querySelector("#mostrar_smenu");
    const subMenu2 = document.querySelector("#mostrar_smenu2");
        subMenu.addEventListener("click", function(){
            subMenu2.classList.toggle("mostrar2")
        });



