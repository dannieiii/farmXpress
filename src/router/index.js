// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ResetPassword from '../views/ResetPassword.vue';
import ChangePassword from '../views/ChangePassword.vue';
import HomeView from '../views/HomeView.vue';
import SellerRegister from '../views/SellerRegister.vue';
import SellerHome from '../views/SellerHome.vue';
import ProductCategory from '../views/ProductCategory.vue';
import Category from '../views/Category.vue';
import AddCategory from '../views/AddCategory.vue';
import Product from '../views/Product.vue';
import AddProduct from '../views/AddProduct.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/registration',
    name: 'registration',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reset-password',
    name: 'resetpassword',
    component: ResetPassword
  },
  {
    path: '/change-password',
    name: 'changepassword',
    component: ChangePassword
  },
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/register-seller',
    name: 'sellerregister',
    component: SellerRegister
  },
  {
    path: '/seller-home',
    name: 'sellerhome',
    component: SellerHome
  },
  {
    path: '/product-category',
    name: 'productcategory',
    component: ProductCategory
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/add-category',
    name: 'addcategory',
    component: AddCategory
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/add-product',
    name: 'addproduct',
    component: AddProduct
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
