<template>
  <div>
    <select name="shipment-choice" v-model="selectedShipment" class="form-select text-dark"  >
    
      <option disbaled>-- Choisissez un mode de livraison --</option>
      <option v-for="shipment in shipments" :key="shipment.id" :value="shipment">
        {{ shipment.name }} ( {{ shipment.price }} €)
      </option>
    </select>

    
  </div>
</template>

<script>
  export default{
    emits: [
      'change'
    ],
    data: function() {
      return {
        shipments: [],
        selectedShipment: null,
      }
    },

    methods: {
    async fetchData(){
      this.shipments = []
      const shipments = await fetch(
        `cartShipmens.json`
      )
      this.shipments = await shipments.json()
    }
  },

    watch: {
      'selectedShipment': function() {
        this.$emit('change', {
          'shipment' : JSON.parse(JSON.stringify(this.selectedShipment))
        })
      }
    },



    mounted() {
    this.fetchData()
  }
  }
</script>

<style>

.form-select{
width: 200px;
}
</style>