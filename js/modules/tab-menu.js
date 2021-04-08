//-------------------------------------------------------------------INICIO DOS TABS MENUS
export default class TabNav {
  constructor(menu, section) {
    this.imgSelect = document.querySelectorAll(menu);
    this.sectionSeelect = document.querySelectorAll(section);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.sectionSeelect.forEach((element) => {
      element.classList.remove(this.activeClass);
    });
    const direcao = this.sectionSeelect[index].dataset.anime;
    this.sectionSeelect[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    this.imgSelect.forEach((element, index) => {
      element.addEventListener("click", () => this.activeTab(index));
    });
  }
  init() {
    /* this.sectionSeelect[0].classList.add( this.activeClass); */
    if (this.activeTab.length && this.sectionSeelect.length) {
      this.addTabNavEvent();
      this.activeTab(0);
    }
    return this;
  }
}
//---------------------------------------------------------------------FIM DOS TABS MENUS
