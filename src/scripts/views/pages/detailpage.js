import favoriteDB from "../../data/favorite-idb";
import wanderlustSource from "../../data/wanderlust-source";
import UrlParser from "../../routes/url-parser";
import FavoriteButtonInitiator from "../../utils/favorite-btn-init";
import { createWanderlustDetailTemplate } from "../templates/template-creator";

const DetailPage = {
  async render() {
    return `
    <div class="container py-5 detail">
      <div id="wanderlust-detail" class="row justify-content-center">
      </div>
    </div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const wanderlust = await wanderlustSource.getDetail(url.id);
    const wanderlustDetail = document.getElementById('wanderlust-detail');
    wanderlustDetail.innerHTML = createWanderlustDetailTemplate(wanderlust);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteWanderlust: favoriteDB,
      wanderlust: {
        id: wanderlust.id,
        title: wanderlust.title,
        description: wanderlust.description,
        image_url: wanderlust.image_url,
      },
    });
  }
};

export default DetailPage;