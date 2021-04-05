export default function initTooltip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  toolTips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
  function onMouseOver(e) {
    const toolTipBox = criarTooltipBox(this);
    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  const onMouseLeave = {
    handleEvent() {
      // serve para entrar em addeventlistener como objeto callback
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  const onMouseMove = {
    handleEvent(e) {
      this.toolTipBox.style.top = e.pageY + 20 + "px";
      this.toolTipBox.style.left = e.pageX + 20 + "px";
    },
  };
  function criarTooltipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
