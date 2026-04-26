// agregá las rutas de tus imágenes acá
const imagenes = [
  "imagenes/foto1.jpg",
  "imagenes/foto2.jpg",
  "imagenes/foto3.jpg",
];

let num = 0;
const img = document.getElementById("imagen");
const slideIndicator = document.getElementById("slide");

function mostrarImagen() {
  img.src = imagenes[num];
  slideIndicator.innerText = `${num + 1} / ${imagenes.length}`;
}

document.getElementById("adelante").onclick = () => {
  if (num < imagenes.length - 1) {
    num++;
    mostrarImagen();
  }
};

document.getElementById("atras").onclick = () => {
  if (num > 0) {
    num--;
    mostrarImagen();
  }
};

mostrarImagen();
