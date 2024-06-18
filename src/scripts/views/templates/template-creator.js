const createWanderlustItemTemplate = (wanderlust) => {
  const {
    id, title, image_url, description,
  } = wanderlust;

  const halfDescriptionLength = Math.floor(description.length / 2);
  const halfDescription = description.slice(0, halfDescriptionLength) + '...';

  return `
    <div class="col-md-4 col-6 mb-3">
      <div class="card">
        <img data-src="${image_url}" class="lazyload card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${halfDescription}</p>
          <a href="/#/detail/${id}" class="stretched-link"></a>
        </div>
      </div>
    </div>
  `;
}


const createWanderlustDetailTemplate = (wanderlust) => {
  const {
    title, image_url, description,
  } = wanderlust;

  return `
    <div class="col-md-8 col-12">
      <div class="title">
        <h2>${title}</h2>
      </div>
      <div class="img__fluid">
        <img src="${image_url}" class="img-fluid mx-auto d-block rounded" alt="">
      </div>
      <div class="deskripsi-destinasi">
        <p>${description}</p>
      </div>
    </div>
  `;
}

const createWanderLustFavoriteItemTemplate = (wanderlust) => {
  const {
    id, title, image_url, description,
  } = wanderlust;

  const halfDescriptionLength = Math.floor(description.length / 2);
  const halfDescription = description.slice(0, halfDescriptionLength) + '...';

  return `
    <div class="col-md-4 col-6 mb-3">
      <div class="card">
        <img data-src="${image_url}" class="lazyload card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${halfDescription}</p>
          <a href="/#/detail/${id}" class="stretched-link"></a>
        </div>
      </div>
    </div>
  `;
}



const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

module.exports = {
  createWanderlustItemTemplate,
  createWanderlustDetailTemplate,
  createWanderLustFavoriteItemTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate
};