<template>
    <div class="" style="padding-left: 10%; padding-top:10px;display:inline;">
      <div class="container py-3" style="padding-left: 10%; padding-top:10px;display:flex;">
        <!-- <li v-for="category in categories" class="text-center" style="list-style:none">
          <router-link :to="{'name': 'category', 'params': { 'category_id' : category.id }}">
            <button class="btn btn-dark text-light">{{ category.name}} </button>
          </router-link><br>
          
        </li>  -->
      </div>
    </div>
    <Products :products="all_products"></Products>
  </template>
  
  <script>
  import Products from '@/components/Products.vue';
  
  export default {
    components: {
      Products
      
    },
    data() {
      return {
       
        all_products: [],
        categories: []
      }
    },

    created() {
        fetch('/categories.json')
            .then((response) => response.json())
            .then((data) => this.categories = data)
            .catch((error) => console.error('error app.vue fetch', error))

      fetch('/products.json')
          .then((response) => response.json())
          .then((data) => this.all_products = data)
          .catch((error) => console.error('erreur products.vue created', error))
    }
  }
  </script>