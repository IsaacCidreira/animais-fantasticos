// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST
export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();
  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
//-------------------------------------------------------------------FIM DOS TABS ACCORDIONS LIST

/* const agora = new Date()
const futuro = new Date('December 24 2021')

function calcularTempo (tempo){
  return tempo / (24 * 60 * 60 *1000)
}
const diasAgora = calcularTempo((agora.getTime()))
const diasFuturo = calcularTempo((futuro.getTime()))

console.log(Math.floor(diasFuturo - diasAgora) ) */
