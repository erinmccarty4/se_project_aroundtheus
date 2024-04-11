import Card from "../components/Card.js";

const initialCards = [
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

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const closeEditButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");

const addNewCardButton = document.querySelector(".profile__add-button");
const profileAddCardModal = document.querySelector("#profile-add-modal");
const addCardModalCloseButton = profileAddCardModal.querySelector(
  "#add-card-modal-close-button"
);
const cardTitleForm = document.querySelector("#add-card-title-input");
const cardLinkForm = document.querySelector("#add-card-url-input");

const addCardForm = profileAddCardModal.querySelector(".modal__form");
const cardsWrap = document.querySelector(".cards__list");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewModalClose = previewImageModal.querySelector(
  "#preview-modal-close"
);

const previewImageEl = document.querySelector(".card__preview-image");
const previewNameEl = document.querySelector(".modal__preview-name");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                  */
/* -------------------------------------------------------------------------- */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
  document.removeEventListener("mousedown", handleImageClick);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
  document.addEventListener("mousedown", handleImageClick);
}

// function getCardElement(cardData) {
//     const cardElement = cardTemplate.cloneNode(true);
//     const cardImageEl = cardElement.querySelector(".card__image");
//     const cardTitleEl = cardElement.querySelector(".card__title");
//

//     cardImageEl.setAttribute("src", cardData.link);
//     cardImageEl.setAttribute("alt", cardData.name);
//     // cardImage.src = data.link;
//     // cardImage.alt = data.name;

//     cardTitleEl.textContent = cardData.name;

//     const likeButton = cardElement.querySelector(".card__like-button");
//     likeButton.addEventListener("click", () => {
//         likeButton.classList.toggle("card__like-button_active");
//       });

//     const deleteButton = cardElement.querySelector(".card__delete-button");
//       deleteButton.addEventListener("click", () => {
//         cardElement.remove();
//       });

//       cardImageEl.addEventListener("click", () => {
//         openModal(previewImageModal);
//         previewNameEl.textContent = cardData.name;
//         previewImageEl.alt = cardData.name;
//         previewImageEl.src = cardData.link;
//       });

//     return cardElement;
//     }

function handleImageClick() {
  openModal(previewImageModal);
  previewNameEl.textContent = cardData.name;
  previewImageEl.alt = cardData.name;
  previewImageEl.src = cardData.link;
}

/* -------------------------------------------------------------------------- */
/*                                  Event Handlers                        */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleForm.value;
  const link = cardLinkForm.value;
  addCardForm.reset();
  closePopup(profileAddCardModal);
}

// create an instance of the Card class
// call the getView method
// prepend the card to the page

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                                  Event Listeners                           */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  toggleButtonState(
    [profileTitleInput, profileDescriptionInput],
    profileEditForm.querySelector(config.submitButtonSelector),
    config
  );
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
closeEditButton.addEventListener("click", () => closePopup(profileEditModal));

addNewCardButton.addEventListener("click", () => {
  openModal(profileAddCardModal);
});

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

addCardModalCloseButton.addEventListener("click", () =>
  closePopup(profileAddCardModal)
);

previewModalClose.addEventListener("click", () =>
  closePopup(previewImageModal)
);

const allModals = document.querySelectorAll(".modal");
//close popup by clicking on overlay
allModals.forEach((modal) => {
  //click evenet for each modal
  modal.addEventListener("click", (evt) => {
    //if event target contain modal opened class
    if (evt.target.classList.contains("modal_opened")) {
      //removes modal opened class
      closePopup(modal);
    }
  });
});

function handleEsc(evt) {
  if (evt.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}

/* -------------------------------------------------------------------------- */
/*                                 Initializer                                */
/* -------------------------------------------------------------------------- */

initialCards.forEach((cardData) => {
  // create an instance of the Card class
  const card = new Card(cardData, "#card-template", handleImageClick);
  // call the getView method
  const cardElement = card.getView();
  // place card on the page
  cardListEl.append(cardElement);
});
