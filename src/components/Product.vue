<template>
  <div v-if="product">
    <div class="cardProduit container text-center" >
          <h3 class="fw-bold">{{ product.name }}</h3>
          <p class="bg-success">STYLE URUGUAY</p>
          <img :src="product.img" alt="" class="imgMate">
          <h4 class="text-dark fw-bold">{{ product.unit_price }} €</h4>
          <product-ratings :ratings="product.rating"></product-ratings><br>
          <div v-html="product.description"></div>
          <router-link :to="{ 'name': 'product', params: { id: product.id }}"> <button class="btn btn-dark text-light"> Voir Produit</button></router-link>
          <div class="py-2"></div>
      </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        product: null,
      }
    },
    created() {
      fetch('/product' + this.$route.params.product_id + '.json')
          .then((response) => response.json())
          .then(data => this.product = data)
          .catch((error) => console.error('error product.vue fetch', error))
    }
  }
</script>
<style scoped>

</style>
