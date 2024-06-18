import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, favoriteWanderlust, wanderlust }) {
    this.favoriteButtonContainer = favoriteButtonContainer;
    this.wanderlust = wanderlust;
    this.favoriteWanderlust = favoriteWanderlust;
    this.favoriteButton = this.favoriteButtonContainer.querySelector('#favoriteButton');

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this.wanderlust;

    if (await this._iswanderlustExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _iswanderlustExist(id) {
    try {
      const wanderlust = await this.favoriteWanderlust.getDetail(id);
      return !!wanderlust;
    } catch (error) {
      console.error('Error checking if wanderlust exists:', error);
      return false;
    }
  },

  _renderLike() {
    this.favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();
    this.favoriteButton = this.favoriteButtonContainer.querySelector('#favoriteButton');
    if (this.favoriteButton) {
      this._addButtonClickHandler(this._addToFavorites.bind(this));
    } else {
      console.error('Favorite button not found.');
    }
  },

  _renderLiked() {
    this.favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();
    this.favoriteButton = this.favoriteButtonContainer.querySelector('#favoriteButton');
    if (this.favoriteButton) {
      this._addButtonClickHandler(this._removeFromFavorites.bind(this));
    } else {
      console.error('Favorite button not found.');
    }
  },

  async _addToFavorites() {
    try {
      await this.favoriteWanderlust.put(this.wanderlust);
      this._renderButton();
    } catch (error) {
      console.error('Error adding wanderlust to favorites:', error);
    }
  },

  async _removeFromFavorites() {
    try {
      await this.favoriteWanderlust.delete(this.wanderlust.id);
      this._renderButton();
    } catch (error) {
      console.error('Error removing wanderlust from favorites:', error);
    }
  },

  _addButtonClickHandler(handler) {
    this.favoriteButton.addEventListener('click', handler);
  },
};

export default FavoriteButtonInitiator;
