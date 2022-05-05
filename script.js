"use strict";
const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
