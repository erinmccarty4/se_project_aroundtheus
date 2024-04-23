import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import * as constants from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

const cardPreview = new PopupWithImage("#modal-image-preview");
cardPreview.setEventListeners();

function handleImageClick(name, link) {
  cardPreview.open({ name, link });
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card-template", handleImageClick);
  return cardElement.getView();
}

const userInformation = new UserInfo({
  name: "#profile-title",
  description: "#profile-description",
});

const editModalForm = new PopupWithForm("#profile-edt-modal", (data) => {
  userInformation.setUserInfo({
    name: data.title,
    description: data.description,
  });
});
editModalForm.setEventListeners();
constants.profileEdtBtn.addEventListener("click", () => {
  editCardFormValidator.resetValidation();
  const userData = userInformation.getUserInfo();
  constants.profileModalInput.value = userData.name;
  constants.profileModalInputDescription.value = userData.description.trim();

  editModalForm.open();
});

const modalAddForm = new PopupWithForm("#profile-add-modal", (data) => {
  cardSection.addItem(createCard(data));
});
modalAddForm.setEventListeners();
constants.profileAddButton.addEventListener("click", () => {
  modalAddForm.open();
  addCardFormValidator.resetValidation();
});

const cardSection = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  constants.cardListSelector
);

cardSection.renderItems(constants.initialCards);

const editCardFormValidator = new FormValidator(
  constants.settings,
  constants.profileModalForm
);
const addCardFormValidator = new FormValidator(
  constants.settings,
  constants.addProfileModalForm
);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();