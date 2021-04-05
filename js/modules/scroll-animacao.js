//-------------------------------------------------------------------INICIO DA ANIMAÇÃO SCRPLL

export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-scroll="scroll"]');
  sections[0].classList.add("ativo");
  function animaScroll() {
    sections.forEach((section) => {
      const windowMetade = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}

//-------------------------------------------------------------------FIM DA ANIMAÇÃO SCRPLL
