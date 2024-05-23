import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = document.querySelector(".modal__preview-image");
    this._imageTitle = document.querySelector("#preview-title");
  }

  open({ name, link }) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageTitle.textContent = name;

    super.open();
  }
}
