document.querySelector(`.burger`).addEventListener("click", function () {
    this.classList.toggle(`active`);
    document.querySelector(`.navbar_texts`).classList.toggle(`active`)
})