// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST

export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-accordion="suave"] dt'
  );
  if (accordionList.length) {
    const activeClass = "ativo";
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion(e) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((element) => {
      element.addEventListener("click", activeAccordion);
    });
  }
}

//-------------------------------------------------------------------FIM DOS TABS ACCORDIONS LIST
