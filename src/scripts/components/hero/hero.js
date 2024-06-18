class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container p-5 w-bg text-white text-center rounded">
        <div class="mx-auto">
          <h1 class="display-4">Explore Indonesia with Wanderlust</h1>
          <p class="lead">Embark on an unforgettable journey through the islands of Indonesia, where adventure meets the
            serene
            beauty of nature.</p>
        </div>
      </div>
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h1 class="display-4">500+</h1>
              <p class="lead">Place</p>
            </div>
            <div class="col text-center">
              <h1 class="display-4">50+</h1>
              <p class="lead">Island</p>
            </div>
            <div class="col text-center">
              <h1 class="display-4">100+</h1>
              <p class="lead">Culture</p>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="container text-center py-5">
        <div class="mx-auto">
          <h1 class="display-4">About Us</h1>
          <p class="lead">Our mission is to bring the <span class="w-color">hidden gems of Indonesia</span> to light. This
            website was created to
            help travelers explore the
            <span class="w-color">unparalleled beauty and cultural richness of Indonesia</span>. With detailed guides,
            travel tips, and local insights,
            we aim to
            make your journey unforgettable.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-app', Hero);
