<template>
  <div class="min-h-screen bg-gradient-to-br from-green-400 to-green-600 p-4 flex flex-col items-center text-center">
    <!-- Header -->
    <header class="w-full flex flex-col items-center mb-4">
      <div>
        <h2 class="text-2xl font-bold">Welcome back,</h2>
        <p class="text-lg text-gray-600">Mariana Napolitani</p>
      </div>
      <div class="flex space-x-4">
        <button class="bg-white p-2 rounded-full shadow-md text-orange-500"><i class="fas fa-shopping-cart"></i></button>
        <button class="bg-white p-2 rounded-full shadow-md text-orange-500"><i class="fas fa-bell"></i></button>
      </div>
    </header>

    <!-- Search Bar -->
    <div class="mt-4 relative">
      <input type="text" placeholder="Search Here" class="w-full p-3 pl-10 rounded-full shadow-md border-none">
      <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
    </div>

    <!-- Banner -->
    <div class="mt-6 rounded-xl bg-orange-500 p-6 text-white w-full">
      <h3 class="text-3xl font-bold">90% OFF</h3>
      <p class="text-lg">First Purchase Discount</p>
      <p class="mt-2">Enjoy a special discount as a token of appreciation for choosing us!</p>
      <button class="mt-4 bg-white text-orange-500 px-6 py-2 rounded-full font-bold">Shop Now</button>
    </div>

    <!-- Categories -->
    <div class="flex justify-between mt-6 overflow-x-auto space-x-4">
      <button class="px-4 py-2 bg-orange-200 text-orange-600 rounded-full">All</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Face</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Hair</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Body</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Skin</button>
      <button class="px-4 py-2 bg-gray-100 rounded-full">Nail</button>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
      <div class="bg-white p-4 rounded-xl shadow-md">
        <img src="https://via.placeholder.com/150" class="w-full rounded-lg">
        <h4 class="mt-2 font-bold italic">Sun Screen</h4>
        <p class="text-gray-500 text-sm">Fauget Store</p>
        <p class="text-lg font-bold text-orange-600">$29.99</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow-md">
        <img src="https://via.placeholder.com/150" class="w-full rounded-lg">
        <h4 class="mt-2 font-bold italic">Moisturizer</h4>
        <p class="text-gray-500 text-sm">Fauget Store</p>
        <p class="text-lg font-bold text-orange-600">$29.99</p>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="fixed bottom-0 left-0 w-full bg-white py-4 flex justify-around shadow-md rounded-t-xl text-center">
      <button class="text-orange-500"><i class="fas fa-home"></i><p>Dashboard</p></button>
      <button class="text-gray-400"><i class="fas fa-heart"></i><p>Favorites</p></button>
      <button class="text-gray-400"><i class="fas fa-shopping-bag"></i><p>Cart</p></button>
      <button class="text-gray-400"><i class="fas fa-user"></i><p>Profile</p></button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #fdfdfd;
  color: #333;
}

button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

.header h2 {
  color: #ff6b35;
}

.header p {
  color: #4a4a4a;
}

.search-bar input {
  border: 1px solid #e2e2e2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner {
  background: linear-gradient(135deg, #ff6b35, #ff9472);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.banner button {
  background-color: #fff;
  color: #ff6b35;
}

.categories button.active {
  background-color: #ff6b35;
  color: #fff;
}

.product-card {
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
