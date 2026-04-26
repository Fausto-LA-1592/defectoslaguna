let datos = [];
let num = 0;

const img = document.getElementById("imagen");
const slideIndicator = document.getElementById("slide");
const descripcionEl = document.getElementById("descripcion");

fetch("descripciones.json")
  .then(res => res.json())
  .then(json => {
    datos = json;
    mostrar();
  });

function mostrar() {
  img.src = datos[num].imagen;
  slideIndicator.innerText = `${num + 1} / ${datos.length}`;
  descripcionEl.innerText = datos[num].descripcion || "";
}

document.getElementById("adelante").onclick = () => {
  if (num < datos.length - 1) {
    num++;
    mostrar();
  }
};

document.getElementById("atras").onclick = () => {
  if (num > 0) {
    num--;
    mostrar();
  }
};
