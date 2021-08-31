const menu = document.querySelectorAll(".main-navigation__menu");
const toggle = document.querySelector(".toggle");
const orderButton = document.querySelector(".product__order");
const cardOrderButtons = document.querySelectorAll(".card__cart");
const header = document.querySelector(".header--without-js");
const modalOrder = document.querySelector(".modal-order");
const modalOrderButton = document.querySelector(".modal-order__button");

header && header.classList.remove("header--without-js");
menu.length && menu.forEach((elem) => elem.classList.add("js-hide"));

toggle &&
  toggle.addEventListener("click", (evt) => {
    evt.preventDefault();
    menu.length && menu.forEach((elem) => elem.classList.toggle("js-hide"));
    toggle.classList.toggle("toggle--cross");
  });

if (modalOrder) {
  modalOrderButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalOrder.classList.add("modal-order--closed");
  });

  orderButton &&
    orderButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      modalOrder.classList.remove("modal-order--closed");
    });

  cardOrderButtons.length &&
    cardOrderButtons.forEach((btn) => {
      btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        modalOrder.classList.remove("modal-order--closed");
      });
    });

  modalOrder.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      modalOrder.classList.add("modal-order--closed");
    }
  });
}
