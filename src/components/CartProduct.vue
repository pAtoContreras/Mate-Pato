<template>
<tr>
          <td><img :src="localProduct.img"></td>
          <td> {{ localProduct.name }}</td>
          <td >
            <input type="number"  v-model="localProduct.quantity"/>
          </td>  
          <td> {{ localProduct.unit_price }} €</td>
          <td> {{ localProduct.total_price }} €</td>
          <td ><button  class=" btn btn-danger" @click="remove">Supprimer</button></td> 
</tr>
</template>

<script>
  export default {
    emits: [
        'change-quantity',
        'delete',
    
    ],
    props: {
      cartProduct: {
        type: Object,
        required: true
      }
    },
    data: function() {
      return {
        localProduct: null
      }
    },
    watch: {
      'localProduct.quantity': function() {

        // 1 - on met a jour le total_price
        this.localProduct.total_price = this.localProduct.quantity * this.localProduct.unit_price

        // 2 - on gère les evenements
        this.$emit('change', this.localProduct)

        if (this.localProduct.quantity <= 0) {
          this.remove();
        }
      },
      cartProduct: {
        handler: function() {
          this.updateProp()
        },
        immediate: true
      }
    },
    methods: {
      updateProp() {
        this.localProduct = JSON.parse(JSON.stringify(this.cartProduct));
      },
      remove() {
        this.$emit('remove', {
          'id' : this.localProduct.id
        })
      },
    
    },
  }
</script>

<style scoped>

</style>
