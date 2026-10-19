
let imagenes = 
[
    "img/1-pokemon.webp",
    "img/2-pokemon.webp",
    "img/3-pokemon.webp",
    "img/4-pokemon.webp",
    "img/5-pokemon.webp",
    "img/6-pokemon.webp",
    "img/7-pokemon.webp",
    "img/8-pokemon.webp",
    "img/9-pokemon.webp"
]

let contador = 1;
function cambiarImagen(){
    document.getElementById("pokemon").src = imagenes[contador];
    contador++;

    if(contador == imagenes.length){
        contador = 0;
    }
}

//Llamada a la función cada 1 segundos
setInterval(cambiarImagen, 1000);

