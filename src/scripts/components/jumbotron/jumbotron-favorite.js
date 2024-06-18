class JumbotronFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="py-5 jumbotron-background__favorite">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Your favorite place</h1>
          <p class="lead">Discover Your’s Favorite Getaways</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('jumbotron-favorite', JumbotronFavorite);
