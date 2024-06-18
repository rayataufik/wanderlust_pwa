class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron-background">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">Welcome the Wonders of Indonesia</h1>
          <p class="lead">Embark on a journey through the enchanting islands of Indonesia. Discover rich cultures,
            breathtaking
            landscapes, <br>and an unforgettable adventure waiting around every corner.</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('jumbotron-app', Jumbotron);
