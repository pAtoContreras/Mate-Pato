import { createApp } from 'vue'

import { createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import Carte from './components/Carte.vue'
import Products from './components/Products.vue'
import Product from './components/Product.vue'
import Panier from './components/Panier.vue'
import Home from './components/Home.vue'
import CartProduct from './components/CartProduct.vue'


const routes = [
    {path: "/",name: "home", component:Home,},
    {path: "/carte",name: "carte", component:Carte,},
    {path: "/product/:id",name: "product",component: Product,},
    {path: "/products",name: "products",component: Products,},
    {path: "/panier/:id",name: "panier",component: Panier,},
    {path: "/cartProduct",name: "cartProduct",component: CartProduct,},
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;


createApp(App).use(router).mount('#app');