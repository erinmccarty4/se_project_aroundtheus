export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

export const selectors = {
  popupForm: "modal__form",
  previewImage: "modal__preview-image",
  addModal: "#profile-add-modal",
  cardSection: ".page__section",
  cardTemplate: "#card-template",
  previewModal: "#card__preview-image",
  cardSection: ".cards__list",
};

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
  avatar: ".profile__image",
};

/*Elements*/
export const cardSection = document.querySelector(".page__section");

/*profile/edit elements*/
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileEditModalEl = document.querySelector("#profile-edit-modal");
export const closeEditButton =
  profileEditModalEl.querySelector(".modal__close");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);

export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileEditForm =
  profileEditModalEl.querySelector("#edit-profile-form");

/*avatar elements*/

export const avatarEditButton = document.querySelector(
  ".profile__avatar-button"
);
export const avatarEditModal = document.querySelector("#edit-avatar-modal");
// export const avatarCloseButton = avatarEditModal.querySelector(".modal__close");
export const avatarLinkInput = document.querySelector("#avatar-link-input");
export const avatarImage = document.querySelector(".profile__avatar");

/*card elements*/
export const cardListEl = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const cardTitleInput = document.querySelector("#image-title-input");
export const cardUrlInput = document.querySelector("#image-url-input");
export const deleteCardForm = document.querySelector("#delete-card-form");
export const cardDeleteButton = deleteCardForm.querySelector(
  ".modal__delete-button"
);

/*addCard elements*/
export const addNewCardButton = document.querySelector(".profile__add-button");
export const profileAddCardModal = document.querySelector("#profile-add-modal");
export const addCardModalCloseButton = profileAddCardModal.querySelector(
  "#add-card-modal-close-button"
);

/*form elements*/
export const addCardForm = document.querySelector("#add-card-form");
export const cardTitleForm = document.querySelector("#add-card-title-input");
export const cardLinkForm = document.querySelector("#add-card-url-input");
export const avatarUpdateForm = document.querySelector("#avatar-card-form");

/*preview elements*/
export const previewImageModal = document.querySelector("#preview-image-modal");
export const previewModalClose = previewImageModal.querySelector(
  "#preview-modal-close"
);

export const previewImageEl = document.querySelector(".modal__preview-image");
export const previewNameEl = document.querySelector(".modal__preview-name");

export const deleteButton = document.querySelector(".modal__button-delete");

export const deleteCard = document.querySelector("#modal-delete-card");
