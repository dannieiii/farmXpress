<template>
    <div class="min-h-screen bg-gradient-to-br from-green-400 to-green-600 p-6 flex flex-col items-center text-center">
      <h2 class="text-3xl font-bold text-white">Seller Registration</h2>
      
      <form @submit.prevent="registerSeller" class="bg-white p-6 rounded-lg shadow-lg mt-6 w-full max-w-md">
        <div class="mb-4">
          <label class="block text-left font-bold">Full Name</label>
          <input type="text" v-model="seller.name" required class="w-full p-3 border rounded-lg">
        </div>
  
        <div class="mb-4">
          <label class="block text-left font-bold">Email</label>
          <input type="email" v-model="seller.email" required class="w-full p-3 border rounded-lg">
        </div>
  
        <div class="mb-4">
          <label class="block text-left font-bold">Password</label>
          <input type="password" v-model="seller.password" required class="w-full p-3 border rounded-lg">
        </div>
  
        <div class="mb-4">
          <label class="block text-left font-bold">Farm Name</label>
          <input type="text" v-model="seller.farmName" required class="w-full p-3 border rounded-lg">
        </div>
  
        <div class="mb-4">
          <label class="block text-left font-bold">Farm Location</label>
          <input type="text" v-model="seller.farmLocation" required class="w-full p-3 border rounded-lg">
        </div>
  
        <button type="submit" class="mt-4 px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition">
          Register as Seller
        </button>
  
        <button @click="goBack" class="mt-2 text-gray-600 underline block">Back to Home</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SellerRegister',
    data() {
      return {
        seller: {
          name: '',
          email: '',
          password: '',
          farmName: '',
          farmLocation: ''
        }
      };
    },
    methods: {
      registerSeller() {
        alert('Seller registration successful!');
        this.$router.push('/');
      },
      goBack() {
        this.$router.push('/home');
      }
    }
  }
  </script>
  