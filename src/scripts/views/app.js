import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

class App {
  constructor() {
    this._mainContent = document.getElementById('main');
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;