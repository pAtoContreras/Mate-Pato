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
		<div class="position-relative">
		</div>
		<h1 class="text-success text-center">PANIER</h1>
		<table class="table py-5" id="saleable_table">
			<thead>
			  <tr>
				<th>Reference</th>
				<th>Quantité</th>
				<th>Prix U</th>
				<th>Total prix</th>
			  </tr>
			</thead>
      <tbody>
        <tr v-if="product">
          <td>{{ product.name }}</td>
          <td> <img :src="product.img" alt="" class="imgMate"></td>
          <td class="quantity">
            <input type="number" class="quantity" v-model="product.quantity"/>
          </td>        
          <td>{{ product.unit_price }} €</td>
          <td class="total"></td>
          <td ><button class="btn btn-danger">Eliminar</button></td>
        </tr>
			</tbody>
			<tfoot>
				<tr>
					<td>
					</td>
					<td>
					Total
					</td>
					<td class="global_total">
					</td>
				</tr>
			</tfoot>
		</table>
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


