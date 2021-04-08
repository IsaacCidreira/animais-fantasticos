// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST

export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  activeAccordion(element) {
    element.classList.toggle(this.activeClass);
    element.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((element) => {
      element.addEventListener("click", () => this.activeAccordion(element));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}

//-------------------------------------------------------------------FIM DOS TABS ACCORDIONS LIST
