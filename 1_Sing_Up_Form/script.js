const container = document.querySelector(".container");
const singUpBtn = document.querySelector(".green-bg button");

singUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
})