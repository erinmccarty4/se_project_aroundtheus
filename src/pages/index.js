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
  profileEditForm,
  profileEditButton,
  addNewCardButton,
  profileTitleInput,
  profileDescriptionInput,
  avatarUpdateForm,
  avatarImage,
  addCardForm,
  deleteCardForm,
} from "../utils/constants.js";

// console.log("test");

/*Functions*/

function openPreviewModal(data) {
  previewImagePopup.open(data);
}

/* Instantiations*/

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  // baseUrl: "https://around-api.en.tripleten-services.com/v1/users/create"
  headers: {
    authorization: "96a4108d-13b8-47da-8399-7921de6eda41",
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
  .catch((err) => {
    console.log(err);
  });

api
  .getInitialCards()
  .then((res) => {
    cardSection = new Section(
      { items: res, renderer: renderCard },
      ".card__list"
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

// const userInfo = new UserInfo(
//   ".profile__title",
//   ".profile__description",
//   ".profile__avatar"
// );
// const profileEditForm = new PopupWithForm(
//   "#profile-edit-modal",
//   handleProfileEditSubmit
// );
// const cardEditForm = new PopupWithForm("#add-card-modal", handleCardFormSubmit);
// const previewImagePopup = new PopupWithImage("#modal__preview-card");
// const confirmDeletePopup = new PopupWithConfirm("#delete-card-modal");

// const avatarImagePopup = new PopupWithForm(
//   "#edit-avatar-modal",
//   handleAvatarFormSubmit
// );

/*Validation*/

const editFormValidator = new FormValidator(config, profileEditForm);
const addCardValidator = new FormValidator(config, addCardForm);
const deleteCardValidator = new FormValidator(config, deleteCardForm);
const avatarValidator = new FormValidator(config, avatarUpdateForm);

/*Event Handlers*/

function handleProfileEditSubmit(inputItems) {
  profileEditForm.renderLoading(true);
  api
    .userProfileInfo(inputItems.name, inputItems.description)
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
cardSection.renderItems(initialCards);
addCardValidator.enableValidation();
editFormValidator.enableValidation();
avatarValidator.enableValidation();
// deleteCardValidator.enableValidation();
