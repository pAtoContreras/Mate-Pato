<template>
    <div class="ratings">
        <i class="fa-solid fa-star"  style="color: #ffd500;;" v-for="n in full_stars"></i>
        <i class="fa-regular fa-star-half-stroke stars_to_show_on_hover" style="color: #ffd500;;" v-if="has_half_star"></i>
        <i class="fa-regular fa-star stars_to_show_on_hover" style="color: #ffd500;;" v-for="m in empty_stars"></i>
    </div>
  </template>
  
  <script>

    export default{
      props: {
        ratings: {
          type: Number,
          required: true
        },
        max: {
          type: Number,
          default: 5
        }
      },
      computed: {
        full_stars() {
          return parseInt(this.ratings);
        },
        empty_stars() {
          return parseInt(this.max - this.ratings);
        },
        has_half_star() {
         return this.full_stars + this.empty_stars < this.max; //merci les maths
        }
      }
    }
  </script>
  <style scoped>
  
  </style>
  