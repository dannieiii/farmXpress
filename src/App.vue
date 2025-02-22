<template>
  <router-view></router-view>
</template>

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
