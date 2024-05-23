/*Elements*/

/*profile elements*/

export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileCloseButton =
  profileEditModal.querySelector(".modal__close");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/*avatar elements*/

export const avatarEditButton = document.querySelector(
  ".profile__avatar-button"
);
export const avatarEditModal = document.querySelector("#edit-avatar-modal");
export const avatarCloseButton = avatarEditModal.querySelector(".modal__close");
export const avatarLinkInput = document.querySelector("#avatar-link-input");
export const avatarImage = document.querySelector(".profile__avatar");

/*addCard elements*/

export const addCardModal = document.querySelector("#add-card-modal");
export const addCardModalCloseButton = document.querySelector(".modal__close");
export const addNewCardButton = document.querySelector("#image__add-button");

/*form elements*/

export const profileForm = document.forms["profile-form"];
export const cardForm = document.forms["card-form"];
export const deleteCardForm = document.querySelector("#modal__delete-form");
export const newName = document.querySelector("#profile-title-input");
export const newJob = document.querySelector("#profile-description-input");
export const formData = { title: newName, description: newJob };
export const avatarUpdateForm = document.querySelector("#avatar-form");

/*card elements*/

export const cardListEl = document.querySelector(".cards__gallery");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const cardTitleInput = document.querySelector("#image-title-input");
export const cardUrlInput = document.querySelector("#image-url-input");
export const cardDeleteButton = document.querySelector(".modal-delete-button");

/*preview elements*/

export const previewModal = document.querySelector("#modal__preview-card");
export const previewModalImage = document.querySelector(
  ".modal__preview-image"
);
export const previewTitle = document.querySelector("#preview-title");
export const previewCloseButton = document.querySelector(".modal__close");

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const selectors = {
  cardSection: ".card__list",
  cardTemplate: "#card-template",
  popupForm: "modal__form",
  previewModal: "#modal__preview-card",
  previewImage: "modal__preview-image",
  addCardModal: "#add-card-modal",
};
