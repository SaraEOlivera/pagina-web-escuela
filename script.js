    // Menu 
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





//Slider
const tiempo_intervalo = 2000;
let idIntervalo = null;
let index = 1;
mostrarDiapositiva(index);

function calcularDiapositiva(n) {
  mostrarDiapositiva(index += n);// actualiza valor del index sumando o restando segun btn que toque
}

// funcion que recibe un numero (diapo a mostrar) y decida cual debe mostrar. 
function mostrarDiapositiva(n) {
  let i;
  let slides = document.getElementsByClassName("Containers"); //slides guarda containers (todos) en una lista
  if (n > slides.length) {index = 1}// si n supera cantidad de diapos, vuelve a la 1. SI img = 3 y apreto sgte
  if (n < 1) {index = slides.length}//si n es menor a diapo 1 entonces pas a la ultima diapo
  for (i = 0; i < slides.length; i++) {//recorre lista y a todo display none, deja carrusel vacio
      slides[i].style.display = "none";//por un ratito
  }

  slides[index-1].style.display = "block";//agarra la diapo a mostrar y le cambia el display, de none a block
} // index-

//Activar el autoplay
function activarAutoplay() {
    idIntervalo = setInterval(function(){
        calcularDiapositiva(1)
    }, tiempo_intervalo);
}



activarAutoplay()
