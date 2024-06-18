import wanderlustSource from "../../data/wanderlust-source";
const { createWanderlustItemTemplate } = require("../templates/template-creator");

const Homepage = {
  async render() {
    return `
      <jumbotron-app></jumbotron-app>
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Recomendation Your <br>
                Perfect Place</h2>
            </div>
            <div class="col-12 col-md-6 text-end">
              <p>Are you looking for the ideal place to vacation or <br>
                spend your time? <span class="w-color">Wanderlust</span> will help you find a <br>
                suitable and perfect place for you.</p>
            </div>
          </div>
          <div class="py-4">
            <div id="all-list" class="row">
            </div>
          </div>
        </div>
      <hero-app></hero-app>
    `;
  },

  async afterRender() {
    const wanderlust = await wanderlustSource.getAll();
    const allList = document.getElementById('all-list');
    wanderlust.forEach((wanderlust) => {
      allList.innerHTML += createWanderlustItemTemplate(wanderlust);
    });
  }
}

export default Homepage;