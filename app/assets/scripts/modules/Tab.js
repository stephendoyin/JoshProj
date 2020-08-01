class Tab {
  constructor() {
    this.tabs = document.querySelectorAll(".table-menu__item");
    this.switchTab();
  }

  switchTab() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        e.preventDefault();
        this.addStyling(tab);
      });
    });
  }

  addStyling(clickedTab) {
    this.tabs.forEach(tab => {
      if (tab !== clickedTab) tab.classList.remove("table-menu__item--active");
      else {
        clickedTab.classList.add("table-menu__item--active");
      }
    });
  }
}

export default Tab;
