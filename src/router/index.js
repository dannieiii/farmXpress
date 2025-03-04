// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ResetPassword from '../views/ResetPassword.vue';
import ChangePassword from '../views/ChangePassword.vue';
import HomeView from '../views/HomeView.vue';
import SellerRegister from '../views/sellerFolder/SellerRegister.vue';
import SellerHome from '../views/sellerFolder/SellerHome.vue';
import ProductCategory from '../views/sellerFolder/ProductCategory.vue';
import Category from '../views/sellerFolder/Category.vue';
import AddCategory from '../views/adminFolder/AddCategory.vue';
import Product from '../views/sellerFolder/Product.vue';
import AddProduct from '../views/sellerFolder/AddProduct.vue';
import Profile from '../views/customerFolder/Profile.vue';
import ProductDetails from '../views/customerFolder/ProductDetails.vue';
import Cart from '../views/customerFolder/Cart.vue';
import EditProfile from '../views/customerFolder/EditProfile.vue';
import SellerDashboard from '../views/sellerFolder/SellerDashboard.vue';
import ProductManagement from '../views/sellerFolder/ProductManagement.vue';
import AddEditProduct from '../views/sellerFolder/AddEditProduct.vue';
import Customers from "../views/sellerFolder/Customers.vue";
import Orders from "../views/sellerFolder/Orders.vue";
import Chat from "../views/sellerFolder/Chat.vue";

import Likes from '../views/customerFolder/Likes.vue';
import Messages from '../views/customerFolder/Messages.vue';
import CustomerOrders from '../views/customerFolder/CustomerOrders.vue';

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
  },
  {
    path: '/edit-profile',
    name: 'editprofile',
    component: EditProfile
  },
  {
    path: '/seller-dashboard',
    name: 'sellerdashboard',
    component: SellerDashboard
  },
  {
    path: '/products',
    name: 'productmanagement',
    component: ProductManagement
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddEditProduct
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: AddEditProduct
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/product-details",
    name: "productdetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/likes",
    name: "Likes",
    component: Likes,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/customer-orders",
    name: "CustomerOrders",
    component: CustomerOrders,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
