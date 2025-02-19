// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import ResetPassword from '../views/ResetPassword.vue';
import ChangePassword from '../views/ChangePassword.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
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
    path: '/home',
    name: 'homeview',
    component: HomeView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
