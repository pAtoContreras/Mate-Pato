
<template>
  <div class="container">
		<div class="position-relative">
		</div>
		<h1 class="bg-primary text-center">PANIER</h1>
		<table class="table py-5" id="saleable_table">
			<thead>
			  <tr>
				<th>Reference</th>
        <th>Name</th>
				<th>Quantité</th>
				<th>Prix U</th>
				<th>Total prix</th>
			  </tr>
			</thead>
      <tbody id="">
        <CartProduct v-for="product in cartProducts"
                   :cartProduct="product"
                   @change="manageProductChanged"
                   @remove="removeProduct"   
      />
			</tbody>
			<tfoot>
        <tr>
        <td colspan="6">
          <ShipmentChoice @change="setShipment"/>
        </td>
      </tr>
				<tr>
					<td>
					Total:
					</td>
          <td>	
					</td>
					<td >{{ total_price_cart }}€</td>
					<td>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>

</template>

<script>
import CartProduct from '../components/CartProduct.vue';
import ShipmentChoice from '../components/ShipmentChoice.vue';

export default {
  components: {
    CartProduct,
    ShipmentChoice
  },
  data() {
    return {
      id: 0,
      cartProducts: [],
      selectedShipment: null,
    }
  },
// fetch json
  methods: {
    async fetchData(){
      this.cartProducts = []
      const cartProducts= await fetch(
        `cartProducts.json`
      )
      this.cartProducts = await cartProducts.json()
    },
// change la quantity
    manageProductChanged(product_changed) {
      this.cartProducts.forEach((product) => {
        if (product.id == product_changed.id) {
          product.quantity = product_changed.quantity;
          product.total_price = product_changed.total_price;
        }
      })
    },
//  remove une product
    removeProduct(payload) {
      this.cartProducts = this.cartProducts.filter((p) => p.id !== payload.id);
    },
// select le livraison
    setShipment(payload) {
      this.selectedShipment = payload.shipment;
    }

  },

  computed: {
    total_price_cart: function() {
      // calcule total
      let total = 0;
      this.cartProducts.forEach((cartProduct) => {
        total += cartProduct.total_price;
      });
          // 2 - Ajout du coût de livraison
          if (this.selectedShipment !== null) {
        total += this.selectedShipment.price
      }
      return total;
  },
},
// watch
  watch: {
    cartProducts: {
      deep: true,
      immediate: true,
      handler: function() {
        this.cartProducts.forEach((cartProduct) => {
          cartProduct.total_price = cartProduct.quantity * cartProduct.unit_price
        })
      }
    },
  },

  // pour aficher json
  mounted() {
    this.fetchData()
  }

}
</script>

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




