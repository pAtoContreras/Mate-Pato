<script>
export default {
  data() {
    return {
      todoId: 0,
      todoData: null,
    }
  },
  methods: {
    async fetchData() {
      this.cartProducts = null
      const res = await fetch(
        `res.json`
      )
      this.cartProducts = await res.json()
    },



    computed: {
    total_unit_price_cart: function() {
      let total = 0;
      this.cartProducts.forEach((cartProduct) => {
        total += cartProduct.total_unit_price;
      });
      return total;
    }
  },
  methods:{
    removeProduct(product) {
        this.cartProducts  = this.cartProducts.filter((t) => t !== product)
      }
  },
  watch: {
    cartProducts: {
      deep: true,
      immediate: true,
      handler: function() {
        this.cartProducts.forEach((cartProduct) => {
          cartProduct.total_unit_price = cartProduct.quantity * cartProduct.unit_unit_price
        })
      }
    }
  },



    

    increment(product) {
        product.quantity++
    },
    restar(product) {
        product.quantity--
    },

  // remove 
    removeTodo(product) {
      this.todoData  = this.todoData .filter((t) => t !== product)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<template>
  <div class="container">
		<div class="position-relative">
	
		</div>
		<h1 class="bg-primary text-center">PANIER</h1>
		<table class="table py-5" id="saleable_table">
			<thead>
			  <tr>
				<th>Reference</th>
				<th>Quantité</th>
				<th>Prix U</th>
				<th>Total prix</th>
			  </tr>
			</thead>
      <tbody id="contenido">
        <tr v-for="product in cartProducts" :key="product.id">
          <td><img :src="product.img" ></td>
          <td>{{ product.Name}}</td>
          <td class="quantity">
            <input type="number" class="quantity" v-model="product.quantity"/>
            <button class="btn btn-secondary" @click="increment(product)">+</button>&nbsp;
            <button class="btn btn-secondary" @click="restar(product)">-</button>
          </td>        
          <td>{{ product.unit_price}}</td>
          <td class="total">{{ pproduct.unit_price*pro.quantity}}</td>
          <td ><button class="btn btn-danger eliminar" @click="removeTodo(product)">Eliminar</button></td>
        </tr>
			</tbody>
			<tfoot>
				<tr>
					<td>
						<span class="btn btn-warning text-dark font-italic"><strong>L</strong>IVRAISON</span>
					</td>
					<td>
						
					</td>
		
					<td>
					Total
					</td>
					<td class="global_total">

					</td>
					<td>
						<select name="livraison" class="btn btn-primary" id="livraison">
							<option value="5" class="coli">5</option>
							<option value="10" class="coli">10</option>
						</select>
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


