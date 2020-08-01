class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.modalClose = document.querySelector(".modal__close");
    this.triggerBtns = document.querySelectorAll(".trigger-btn");
    this.addEventToBtns();
    this.closeEvent();
    this.modalAreaCloseEvent();
    this.onEscapeEvent();
  }

  addEventToBtns() {
    this.triggerBtns.forEach(element => {
      element.addEventListener("click", e => {
        this.triggerModal(e);
      });
    });
  }

  triggerModal(event) {
    event.preventDefault();
    this.modal.classList.toggle("modal__show");
  }

  closeEvent() {
    this.modalClose.addEventListener("click", () => {
      this.closeModal();
    });
  }

  modalAreaCloseEvent() {
    window.addEventListener("click", e => {
      if (e.target.classList.contains("modal")) this.closeModal();
    });
  }

  onEscapeEvent() {
    window.addEventListener("keydown", e => {
      if (e.keyCode === 27) this.closeModal();
    });
  }

  closeModal() {
    this.modal.classList.remove("modal__show");
  }
}

export default Modal;
