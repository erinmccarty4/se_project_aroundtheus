import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import * as constants from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import { profileEditForm } from "../utils/constants.js";
import { profileEditModal } from "../utils/constants.js";
import avatarImage from "../images/jacques-cousteau.jpg";
const avatarImageEl = document.querySelector(".profile__image");
avatarImageEl.src = avatarImage;
console.log("test");

const newCardPopup = new PopupWithForm();
newCardPopup.open();

newCardPopup.close();

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
  name: "#profile-title-input",
  description: "#profile-description-input",
});

const profileEditModal = new PopupWithForm("#profile-edit-modal", (data) => {
  userInformation.setUserInfo({
    name: data.title,
    description: data.description,
  });
});
profileEditForm.setEventListeners();
constants.profileEditButton.addEventListener("click", () => {
  editProfileFormValidator.resetValidation();
  const userData = userInformation.getUserInfo();
  constants.profileTitleInput.value = userData.name;
  constants.profileDescriptionInput.value = userData.description.trim();

  profileEditForm.open();
});

const profileAddCardModal = new PopupWithForm("#profile-add-modal", (data) => {
  cardSection.addItem(createCard(data));
});
addCardForm.setEventListeners();
constants.addNewCardButton.addEventListener("click", () => {
  addCardForm.open();
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

const editProfileFormValidator = new FormValidator(
  constants.settings,
  constants.profileEditModal
);
const addCardFormValidator = new FormValidator(
  constants.settings,
  constants.profileAddCardModal
);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
