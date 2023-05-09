import { createApp } from 'vue'

import { createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import Carte from './components/Carte.vue'
import Products from './components/Products.vue'
import Product from './components/Product.vue'
import Panier from './components/Panier.vue'
import Home from './components/Home.vue'
import CartProduct from './components/CartProduct.vue'
import CategoryPage from './components/CategoryPage.vue'
import ProductRatings from "./components/ProductRatings.vue";
import ProductsPage from "./components/ProductsPage.vue";
import ProductsFilter from "./components/ProductsFilter.vue";


const routes = [
    {path: "/",name: "home", component:Home,},
    {path: "/carte",name: "carte", component:Carte,},
    {path: "/products/:product_id",name: "product",component: Product,},
    {path: "/products",name: "products",component: ProductsPage,},
    {path: "/categoryPage/:category_id",name: "category",component: CategoryPage,},
    {path: "/panier/:id",name: "panier",component: Panier,},
    {path: "/cartProduct",name: "cartProduct",component: CartProduct,},
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


// 3 - Lancer Vue.js en lui passant notre router
const app = createApp(App);
app.use(router)
app.component('ProductRatings', ProductRatings)
app.mount('#app');
