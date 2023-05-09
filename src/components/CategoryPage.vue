<template>
  <div v-if="category">
    <h1>Catégorie: {{ category.name }}</h1>
    <div>
      <products :products="category.products"></products>
    </div>
  </div>
</template>
<script>
import Products from "@/components/Products.vue";

export default {
  components: {
    Products
  },
  data() {
    return {
      category: null,
    }
  },

  created() {
    fetch('/category' + this.$route.params.category_id + '.json')
        .then((response) => response.json())
        .then((data) => this.category = data)
  }
}
</script>
