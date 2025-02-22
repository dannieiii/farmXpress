<template>
    <div class="product">
        <!-- Header -->
        <div class="header">
            <h1 class="app-title">FarmXpress</h1>
            <div class="icons">
                <i class="fas fa-comments"></i>
                <i class="fas fa-user-circle"></i>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <h2>Manage Your Products</h2>
            <p>You currently have {{ products.length }} products. Expand your offerings by adding new products.</p>

            <div class="product-section">
                <span class="product-label">Total Products: {{ products.length }}</span>
            </div>

            <!-- Display Products -->
            <div class="product-list">
                <div v-for="(product, index) in products" :key="index" class="product-item">
                    <img v-if="product.image" :src="product.image" alt="Product Image" class="product-image" />
                    <p>{{ product.name }}</p>
                    <p class="product-price">₱{{ product.price.toFixed(2) }}</p>
                </div>
            </div>

            <button class="add-product-btn" @click="goToAddProduct">Add Product</button>
        </div>

        <!-- Bottom Navigation -->
        <div class="bottom-nav">
            <router-link to="/seller-home">
                <i class="fas fa-home"></i>
            </router-link>
            <router-link to="/add-product">
                <i class="fas fa-plus-circle"></i>
            </router-link>
            <router-link to="/orders">
                <i class="fas fa-shopping-cart"></i>
            </router-link>
            <router-link to="/sales">
                <i class="fas fa-chart-line"></i>
            </router-link>
            <router-link to="/notifications">
                <i class="fas fa-bell"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: "Product",
    setup() {
        const products = inject("products");

        const goToAddProduct = () => {
            window.location.href = "/add-product";
        };

        return { products, goToAddProduct };
    }
};
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background: #f2f2f2;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #2e5c31;
    color: white;
}

.icons i {
    font-size: 24px;
    margin-left: 15px;
}

.main-content {
    text-align: center;
    padding: 20px;
}

.product-section {
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
}

.add-product-btn {
    background: #2e5c31;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.add-product-btn:hover {
    background: #256127;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.product-item {
    background: white;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    text-align: center;
}

.product-image {
    width: 100px;
    height: 100px;
    border-radius: 5px;
}

.product-price {
    color: #2e5c31;
    font-weight: bold;
}

.bottom-nav {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background: white;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.bottom-nav a {
    text-decoration: none;
}

.bottom-nav i {
    font-size: 24px;
    color: #2e5c31;
}
</style>
