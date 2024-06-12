export default class UserInfo {
  constructor({ name, description, userAvatarSelector }) {
    this._title = document.querySelector(name);
    this._description = document.querySelector(description);
    this._userAvatar = document.querySelector(userAvatarSelector);
  } // new UserInfo({'',})

  getUserInfo() {
    const userInfo = {
      title: this._title.textContent,
      description: this._description.textContent,
      avatar: this._userAvatar.src,
    };
    return userInfo;
  }

  setUserInfo({ name, about }) {
    this._title.textContent = data.name;
    this._description.textContent = data.about;
  }
  setUserAvatar(avatar) {
    this._userAvatar.src = avatar.avatar;
  }
}
