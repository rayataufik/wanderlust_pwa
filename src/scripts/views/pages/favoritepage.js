import favoriteDB from "../../data/favorite-idb";
import { createWanderLustFavoriteItemTemplate } from "../templates/template-creator";

const FavoritePage = {

  async render() {
    return `
    <jumbotron-favorite></jumbotron-favorite>
    <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2>Discover Your Perfect Place</h2>
          </div>
        </div>
        <div class="py-4">
          <div id="all-list" class="row">
          </div>
        </div>
      </div>
    `
  },
  async afterRender() {
    const wanderlust = await favoriteDB.getAll();
    const allList = document.getElementById('all-list');

    if (wanderlust.length === 0) {
      allList.innerHTML = `
        <div class="col-12 text-center">
          <h2>Your Favorite Place is Empty</h2>
        </div>
      `;
    } else {
      wanderlust.forEach((wanderlust) => {
        allList.innerHTML += createWanderLustFavoriteItemTemplate(wanderlust);
      });
    }
  }
};



export default FavoritePage;