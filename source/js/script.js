const menu = document.querySelectorAll(".main-navigation__menu");
const toggle = document.querySelector(".toggle");
const orderButton = document.querySelector(".product__order");
const cardOrderButtons = document.querySelectorAll(".card__cart");
const header = document.querySelector(".header--without-js");
const modalOrder = document.querySelector(".modal-order");
const modalOrderButton = document.querySelector(".modal-order__button");
const mapContainer = document.getElementById("map");

const Key = {
  ESCAPE: 27,
};

header && header.classList.remove("header--without-js");
menu.length && menu.forEach((elem) => elem.classList.add("js-hide"));

toggle &&
  toggle.addEventListener("click", (evt) => {
    evt.preventDefault();
    menu.length && menu.forEach((elem) => elem.classList.toggle("js-hide"));
    toggle.classList.toggle("toggle--cross");
  });

if (modalOrder) {
  const x = (evt) => {
    if (evt.keyCode === Key.ESCAPE) {
      closeModal(evt);
    }
  };

  const openModal = (evt) => {
    evt.preventDefault();
    modalOrder.classList.remove("modal-order--closed");
    window.addEventListener("keydown", x);
    document.querySelector(".modal-order__input").focus();
  };

  const closeModal = (evt) => {
    evt.preventDefault();
    modalOrder.classList.add("modal-order--closed");
    window.removeEventListener("keydown", x);
  };

  modalOrderButton.addEventListener("click", closeModal);

  orderButton && orderButton.addEventListener("click", openModal);

  cardOrderButtons.length &&
    cardOrderButtons.forEach((btn) => btn.addEventListener("click", openModal));

  modalOrder.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(evt);
    }
  });
}

if (mapContainer) {
  ymaps.ready(init);

  function init() {
    (myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 16,
      controls: [],
    })),
      (myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "./img/map/map-pin.svg",
          iconImageSize: [67, 100],
          iconImageOffset: [-33, -100],
        }
      ));

    myMap.geoObjects.add(myPlacemark);
  }
}
