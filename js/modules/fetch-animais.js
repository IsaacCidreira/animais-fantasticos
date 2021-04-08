// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST

import AnimaNumeros from "./anima-numeros.js";

export default function initFecthAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (error) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3> ${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  fetchAnimais("./animais.json");
}
//-------------------------------------------------------------------FIM DOS TABS ACCORDIONS LIST
