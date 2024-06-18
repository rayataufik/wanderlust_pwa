class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-bg fixed-top" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#/home">
          <img src="./images/navbar_logo.png" alt="Logo" width="20" height="26"
              class="d-inline-block align-text-top">
          Wanderlust
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/favorite">Favorite</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
