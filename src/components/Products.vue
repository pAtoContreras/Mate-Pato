<script>

import Starts from './Starts.vue';


export default {
    components:{
        Starts,
      
  },
  data() {
    return {
      todoId: 1,
     cartProducts:[]
    }
  },
  methods: {
    async fetchData(){
      this.cartProducts = []
      const cartProducts= await fetch(
        `cartProducts.json`
      )
      this.cartProducts = await cartProducts.json()
    },
  },
  mounted() {
    this.fetchData()
  },
  
}

</script>

<template>
  <div v-for="product in cartProducts" :cartProduct="product" class="container text-center">
      <div class="cardProduit">
          <h3 class="fw-bold">{{ product.name }}</h3>
          <p class="bg-success">STYLE URUGUAY</p>
          <img :src="product.img" alt="" class="imgMate">
          <h4 class="text-dark fw-bold">{{ product.unit_price }} €</h4>
          <Starts />
          <router-link :to="{ 'name': 'product', params: { id: product.id }}"> <button class="btn btn-dark text-light"> Voir Produit</button></router-link>
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



