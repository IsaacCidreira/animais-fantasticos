// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST
export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horaAgora >= this.horarioSemana[0] &&
      this.horaAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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
