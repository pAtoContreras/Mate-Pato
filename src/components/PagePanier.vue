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
      this.todoData = null
      const res = await fetch(
        `res.json`
      )
      this.todoData = await res.json()
    },

    increment(pro) {
      pro.quantity++
    },
    restar(pro) {
      pro.quantity--
    },

  // remove 
    removeTodo(pro) {
      this.todoData  = this.todoData .filter((t) => t !== pro)
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
        <tr v-for="pro in todoData" :key="pro.id">
          <td><img :src="pro.img" ></td>
          <td>{{ pro.productName}}</td>
          <td class="quantity">
            <input type="number" class="quantity" v-model="pro.quantity"/>
            <button class="btn btn-secondary" @click="increment(pro)">+</button>&nbsp;
            <button class="btn btn-secondary" @click="restar(pro)">-</button>
          </td>        
          <td>{{ pro.price}}</td>
          <td class="total">{{ pro.price*pro.quantity}}</td>
          <td ><button class="btn btn-danger eliminar" @click="removeTodo(pro)">Eliminar</button></td>
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