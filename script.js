// crear las constantes y obtener los id
const flecha_menu = document.getElementById("flecha");
const btn_menu = document.getElementById("btn-menu");
const menu_dropdown = document.getElementById("dropdown");

// Insertar clase
const insertar_clase = function() {
    menu_dropdown.classList.toggle("show");
}

// Agregar funcion al btn
btn_menu.addEventListener("click", function name(e) {
    e.stopPropagation();
    insertar_clase();
})

// Cerrar menu
document.documentElement.addEventListener("click", function(){
    if (menu_dropdown.classList.contains("show")){
        insertar_clase();
    }
})