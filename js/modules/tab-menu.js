//-------------------------------------------------------------------INICIO DOS TABS MENUS
export default function initTab() {
  const imgSelect = document.querySelectorAll('[data-tab="menu"] li');
  const sectionSeelect = document.querySelectorAll(
    '[data-tab="content"] section'
  );
  if (imgSelect.length && sectionSeelect.length) {
    sectionSeelect[0].classList.add("ativo");
    function activeTab(index) {
      sectionSeelect.forEach((element) => {
        element.classList.remove("ativo");
      });
      const direcao = sectionSeelect[index].dataset.anime;
      sectionSeelect[index].classList.add("ativo", direcao);
    }

    imgSelect.forEach((element, index) => {
      element.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
//---------------------------------------------------------------------FIM DOS TABS MENUS
