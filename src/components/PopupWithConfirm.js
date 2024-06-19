import PopUp from "./Popup";

export default class PopUpWithConfirm extends PopUp {
  constructor(popUpSelector) {
    super(popUpSelector);
    this._popUpForm = this._popupElement.querySelector(".modal__form");
  }

  handleDelete(handleDeleteSubmit) {
    this._handleDeleteSubmit = handleDeleteSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popUpForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDeleteSubmit();
    });
  }
}
