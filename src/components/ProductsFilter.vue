<template>
<div class="" style="margin-right: 0px !important; margin-left: 0px !important;"> 
    <div class="container text-center">
        <ul style="list-style: none; display:flex; letter-spacing: 1px;">
            <li  @click="filter3() " class=" text-dark" style="font-style: none;"><a href="#" >Tous les produits  </a> </li><strong > &nbsp;/ &nbsp;</strong>
            <li  @click="filter()" class=" text-dark" style="font-style: none;"><a href="#" >Le plus cher </a> </li><strong >&nbsp; /&nbsp; </strong> 
            <li @click="filter2()" class=" text-dark" style="font-style: none;"><a href="#">Le moins cher <strong > </strong> </a></li>
        </ul>
    </div>
</div>
</template>

<script>
// import Products from "@/components/Products.vue";
export default {
  
  data() {
    return{
        priceMenor:50,
        priceMax:50,
        productsFiltered: null,
    }
},
components: {
    //   Products
      
    },
    emits: [
        'filter-products'
    
    ],
 props: {
   products: {
     type: Array,
     required: true
   }
   
 },
 methods: {
    filter() {
        this.productsFiltered = this.products.filter(products => products.unit_price >= this.priceMax);
    },
    filter2() {
        this.productsFiltered = this.products.filter(products => products.unit_price <= this.priceMenor);
    },
    filter3() {
        this.productsFiltered = this.products;
    }
 },
 watch: {
    productsFiltered: function(){
        this.$emit('filter-products', this.productsFiltered)
    }
 }
}
</script>
<style>
li:hover{
    text-decoration: underline;
}
</style>