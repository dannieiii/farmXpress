<template>
  <router-view></router-view>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: #f9fafb;
}

body.dark {
  background-color: #111827;
  color: #f9fafb;
}
</style>
<script>
import { ref, provide } from "vue";

export default {
  setup() {
    const categories = ref([]);
    const products = ref([
      { name: "Sample Product", price: 100, image: "sample.jpg" }
    ]);

    // Function to add a new category
    const addCategory = (category) => {
      categories.value.push(category);
    };

    // Provide categories and addCategory function to child components
    provide("categories", categories);
    provide("addCategory", addCategory);

    // Provide products to child components
    provide("products", products);

    return { categories, addCategory, products };
  }
};
</script>
