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
};

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const cardSection = document.querySelector(".page__section");

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

export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const cardListEl = document.querySelector(".cards__list");
export const cardListSelector = ".cards__list";

export const addCardForm = document.querySelector("#add-card-form");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const profileAddCardModal = document.querySelector("#profile-add-modal");
export const addCardModalCloseButton = profileAddCardModal.querySelector(
  "#add-card-modal-close-button"
);

export const cardTitleForm = document.querySelector("#add-card-title-input");
export const cardLinkForm = document.querySelector("#add-card-url-input");

export const previewImageModal = document.querySelector("#preview-image-modal");
export const previewModalClose = previewImageModal.querySelector(
  "#preview-modal-close"
);

export const previewImageEl = document.querySelector(".card__preview-image");
export const previewNameEl = document.querySelector(".modal__preview-name");
