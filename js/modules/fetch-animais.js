// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST

import AnimaNumeros from "./anima-numeros.js";

export default function FecthAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3> ${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function AnimaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => preencherAnimais(animal));
      AnimaAnimaisNumeros();
    } catch (error) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
//-------------------------------------------------------------------FIM DOS TABS ACCORDIONS LIST
