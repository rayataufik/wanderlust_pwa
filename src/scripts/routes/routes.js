import DetailPage from "../views/pages/detailpage";
import FavoritePage from "../views/pages/favoritepage";
import Homepage from "../views/pages/homepage";

const routes = {
  '/': Homepage,
  '/home': Homepage,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage
};

export default routes;
