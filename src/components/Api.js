export default class Api {
  constructor({ baseUrl, headers }) {
    this.server = baseUrl;
    this.headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  getUserInfo() {
    return fetch(`${this.server}/users/me`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this.server}/cards`, {
      headers: this.headers,
    }).then(this._checkResponse);
  }
  renderCards() {
    Promise.all(this.getUserInfo(), this.getInitialCards());
  }

  userProfileInfo(name, about) {
    return fetch(`${this.server}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  updateAvatar(link) {
    return fetch(`${this.server}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(name, link) {
    return fetch(`${this.server}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.server}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkResponse);
  }

  likeCard(cardId) {
    return fetch(`${this.server}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    })
      .then(this._checkResponse)
      .then(() => console.log("Card has been liked"));
  }

  dislikeCard(cardId) {
    return fetch(`${this.server}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(this._checkResponse)
      .then(() => console.log("Card is not yet liked"));
  }
}
