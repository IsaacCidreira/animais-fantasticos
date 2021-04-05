import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}

/* const dropDownMenu = document.querySelector('[data-dropdown]')
    const selectDrop = document.querySelector('.dropdown-menu')
    function addMenu (event){
        event.preventDefault();
        selectDrop.classList.add('ativo')
    }
    ['touchstart','click'].forEach(userEvent=>{
        dropDownMenu.addEventListener(userEvent ,addMenu)
    }) */
