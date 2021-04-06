//-------------------------------------------------------------------INICIO DO SCROLL SUAVE
export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollSuave = this.scrollSuave.bind(this);
  }

  scrollSuave(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);

    /* const topo = section.offsetTop; 
        window.scrollTo({
            top:topo,
            behavior: 'smooth'
        }) */
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollSuave);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
//-------------------------------------------------------------------FIM DO SCROLL SUAVE
