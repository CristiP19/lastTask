import Auth from "./modules/auth";
import Categories from "./modules/categories";
import Products from "./modules/products";

export default {
  auth: () => new Auth(),
  categories: () => new Categories(),
  products: () => new Products(),
};
