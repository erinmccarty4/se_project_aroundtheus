//Imports

import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  selectors,
  config,
  profileForm,
  cardForm,
  profileEditButton,
  addNewCardButton,
  profileTitleInput,
  profileDescriptionInput,
  //deleteCardForm,
  avatarUpdateForm,
  avatarImage,
} from "../utils/constants.js";
// import avatarImage from "../images/jacques-cousteau.jpg";
// const avatarImageEl = document.querySelector(".profile__image");
// avatarImageEl.src = avatarImage;
// console.log("test");

// const newCardPopup = new PopupWithForm(constants.selectors.addModal, () =>
//   console.log("clicked")
// );
// newCardPopup.open();

// newCardPopup.close();

/*Functions*/

function openPreviewModal(data) {
  previewImagePopup.open(data);
}

/* Instantiations*/

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "d5d1d874-a161-48bd-b3b4-ae8e38400ed9",
    "Content-Type": "application/json",
  },
});

let cardSection;

api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
  })
  .catch((err) => {});

api
  .getInitialCards()
  .then((res) => {
    cardSection = new Section(
      { items: res, renderer: renderCard },
      ".cards__list"
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

function renderCard(cardData) {
  const card = new Card(
    cardData,
    selectors.cardTemplate,
    openPreviewModal,
    handleCardDeleteClick,
    handleLikeClick
  ).getCardElement();
  cardSection.addItem(card);
}

const userInfo = new UserInfo({
  name: ".profile__title",
  description: ".profile__description",
  userAvatarSelector: ".profile__image",
});

const profileEditForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
const cardEditForm = new PopupWithForm("#add-card-modal", handleCardFormSubmit);
const previewImagePopup = new PopupWithImage("#modal__preview-card");
const confirmDeletePopup = new PopupWithConfirm("#delete-card-modal");

const avatarImagePopup = new PopupWithForm(
  "#edit-avatar-modal",
  handleAvatarFormSubmit
);

/*Validation*/

const editFormValidator = new FormValidator(config, profileForm);
const addCardValidator = new FormValidator(config, cardForm);
const avatarValidator = new FormValidator(config, avatarUpdateForm);

/*Event Handlers*/

function handleProfileEditSubmit(inputItems) {
  profileEditForm.renderLoading(true);
  api
    .userProfileInfo(inputItems.name, inputItems.about)
    .then((res) => {
      console.log(res);
      userInfo.setUserInfo(res);
      profileEditForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileEditForm.renderLoading(false);
    });
}
function handleCardFormSubmit(data) {
  cardEditForm.renderLoading(true);
  api
    .addNewCard(data.name, data.link)
    .then((res) => {
      renderCard(res);
      cardEditForm.close();
      addCardValidator.resetValidation();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardEditForm.renderLoading(false);
    });
}

function handleLikeClick(card) {
  console.log(card);
  if (card.isLiked) {
    api
      .dislikeCard(card._id)
      .then(() => {
        card.handleLikeButton();
        card.isLiked = false;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (!card.isLiked) {
    api
      .likeCard(card._id)
      .then(() => {
        card.handleLikeButton();
        card.isLiked = true;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function handleCardDeleteClick(card) {
  console.log(card);
  confirmDeletePopup.open();
  confirmDeletePopup.handleDelete(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        confirmDeletePopup.close();
        card.handleTrashButton();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function handleAvatarFormSubmit(data) {
  avatarImagePopup.renderLoading(true);

  api
    .updateAvatar(data.link)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
    .then(() => {
      console.log("Avatar has been updated");
      avatarImagePopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarImagePopup.renderLoading(false);
    });
}

/*Event Listeners*/

profileEditButton.addEventListener("click", () => {
  profileEditForm.open();
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileDescriptionInput.value = userData.description;
});

addNewCardButton.addEventListener("click", () => {
  cardEditForm.open();
});

avatarImage.addEventListener("click", () => {
  avatarImagePopup.open();
});

profileEditForm.setEventListeners();
cardEditForm.setEventListeners();
previewImagePopup.setEventListeners();
confirmDeletePopup.setEventListeners();
avatarImagePopup.setEventListeners();

//Initialization

editFormValidator.enableValidation();
addCardValidator.enableValidation();
avatarValidator.enableValidation();
