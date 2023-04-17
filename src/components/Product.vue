<script>

import Starts from './Starts.vue';


export default {
  components:{
      Starts,
  },
  data() {
    return {
     product_id: this.$route.params.id, //this is the id from the browser
     cartProducts:[]
    }
  },
  methods: {
    async fetchData(){
      this.cartProducts = []
      const cartProducts= await fetch(
        '/cartProducts.json'
      )
      this.cartProducts = await cartProducts.json()
    },

  },
  computed: {
    product() {
      return this.cartProducts.find((p) => p.id == this.product_id)
    }
  },
  mounted() {
    this.fetchData()
  },
  
}
</script>


<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-12">
        <div v-if="product" class="container text-center">
        <div class="cardProduit">
            <h3 class="fw-bold">{{ product.name }}</h3>
            <p class="bg-success">STYLE URUGUAY</p>
            <img :src="product.img" alt="" class="imgMate">
            <h4 class="text-dark fw-bold">{{ product.unit_price }} €</h4>
            <h5 class="text-dark fw-bold">{{ product.detalles}} </h5>
            <Starts /><br>
            <router-link :to="{ 'name': 'panier'}"><button class="btn btn-success text-light">AJOUTE AU PANIER</button></router-link>
        </div>
    </div>

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



