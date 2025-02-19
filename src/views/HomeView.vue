<template>
  <div class="min-h-screen bg-gradient-to-br from-green-400 to-green-600 p-4 flex flex-col items-center text-center">
    <!-- Header -->
    <header class="w-full flex justify-between items-center mb-6 p-4">
      <div>
        <h2 class="text-xl font-bold text-white">Welcome back,</h2>
        <p class="text-lg text-green-100">Mariana Napolitani</p>
      </div>
      <div class="flex space-x-4">
        <button class="bg-white p-2 rounded-full shadow-md text-green-500"><i class="fas fa-shopping-cart"></i></button>
        <button class="bg-white p-2 rounded-full shadow-md text-green-500"><i class="fas fa-bell"></i></button>
      </div>
    </header>

    <!-- Search Bar -->
    <div class="relative w-full px-4">
      <input type="text" placeholder="Search for products" class="w-full p-3 pl-10 rounded-full shadow-md border-none text-gray-700">
      <i class="fas fa-search absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
    </div>

    <!-- Become a Seller Button -->
    <button @click="goToSellerRegistration" class="mt-4 px-6 py-3 bg-green-700 text-white font-bold rounded-full shadow-md hover:bg-green-800 transition">
      Become a Seller
    </button>

    <!-- Banner -->
    <div class="mt-6 rounded-xl bg-green-800 p-6 text-white w-full text-left">
      <h3 class="text-3xl font-bold">90% OFF</h3>
      <p class="text-lg">First Purchase Discount</p>
      <p class="mt-2">Enjoy a special discount as a token of appreciation for choosing us!</p>
      <button class="mt-4 bg-white text-green-800 px-6 py-2 rounded-full font-bold">Shop Now</button>
    </div>

    <!-- Categories -->
    <div class="flex justify-between mt-6 overflow-x-auto space-x-4 px-4">
      <button class="px-4 py-2 bg-green-200 text-green-700 rounded-full">All</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Face</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Hair</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Body</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Skin</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Nail</button>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-2 gap-4 mt-6 w-full px-4">
      <div class="bg-white p-4 rounded-xl shadow-md">
        <img src="https://via.placeholder.com/150" class="w-full rounded-lg">
        <h4 class="mt-2 font-bold">Sun Screen</h4>
        <p class="text-gray-500 text-sm">Fauget Store</p>
        <p class="text-lg font-bold text-green-700">$29.99</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow-md">
        <img src="https://via.placeholder.com/150" class="w-full rounded-lg">
        <h4 class="mt-2 font-bold">Moisturizer</h4>
        <p class="text-gray-500 text-sm">Fauget Store</p>
        <p class="text-lg font-bold text-green-700">$29.99</p>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="fixed bottom-0 left-0 w-full bg-white py-4 flex justify-around shadow-md rounded-t-xl text-center">
      <button class="text-green-600"><i class="fas fa-home"></i><p>Dashboard</p></button>
      <button class="text-gray-400"><i class="fas fa-heart"></i><p>Favorites</p></button>
      <button class="text-gray-400"><i class="fas fa-shopping-bag"></i><p>Cart</p></button>
      <button class="text-gray-400"><i class="fas fa-user"></i><p>Profile</p></button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToSellerRegistration() {
      this.$router.push('/register-seller');
    }
  }
}
</script>
