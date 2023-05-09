<template>
    <div class="">
      <div class="container"> 
         <productsFilter :products="products"  @filter-products="updateProducts"/>
      </div>
    </div>

      <div v-for="product in localProducts" :key="product.id" class="row py-5" style="padding-left: 10%; display:inline;">
        <div class="cardProduit container text-center" >
        <h3 class="fw-bold">{{ product.name }}</h3>
        <p class="bg-success">STYLE URUGUAY</p>
        <img :src="product.img" alt="" class="imgMate">
        <div v-html="product.description"></div>
        <product-ratings :ratings="product.rating"></product-ratings>
        <h4 class="text-dark fw-bold">{{ product.unit_price }} €</h4>
        <div>
          <router-link :to="{ name: 'product', params: { 'product_id': product.id }}"><button class="btn btn-dark text-light"> Voir Produit</button></router-link>
        </div>
      
      </div>
      </div>
 

</template>
<style>
img{
  width: 50px;
  height: 50px;
}
h1{
  letter-spacing:3px ;
  color: white;
  padding-top: 30px;
}
</style>

<script>
import ProductRatings from "@/components/ProductRatings.vue";
import ProductsFilter from "@/components/ProductsFilter.vue";
export default {
  
  data: function() {
      return {
        localProducts : [],
      }
    },
  components: {
    ProductRatings,
    ProductsFilter
  },
  props:{
    products: {
      type: Array,
      required: true
    }
  },

  methods: {
    updateProducts(products_filtered) {
      this.localProducts = products_filtered;
    }
  },
  watch: {
    products: function() {
      this.localProducts =  JSON.parse(JSON.stringify(this.products));
    }
  }
}
</script>

