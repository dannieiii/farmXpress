<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="FarmXpress Logo" class="logo" />
      <h1 class="app-title">FarmXpress</h1>
      <h3 class="app-subtitle">MOBILE APP</h3>
    </div>

    <div class="login-box">
      <div class="input-container">
        <i class="fas fa-user icon"></i>
        <input type="email" v-model="email" placeholder="Email" />
      </div>
      <div class="input-container">
        <i class="fas fa-lock icon"></i>
        <input type="password" v-model="password" placeholder="Password" />
      </div>

      <div class="options">
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <a @click="forgotPassword" href="#">Forgot Password?</a>
      </div>

      <button class="login-button" @click="login">Login</button>

      <p>Don't have an account? <a href="/">Create an account</a></p>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);

        if (userCredential.user.emailVerified) {
          alert('Login Successful!');
          this.$router.push('/home');
        } else {
          alert('Please verify your email before logging in.');
        }
      } catch (error) {
        console.error('Login Error:', error);
        alert('Login failed! Check console for details.');
      }
    },

    forgotPassword() {
      this.$router.push('/reset-password');
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f2f2f2;
  padding: 20px;
}

.logo-container {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  width: 300px;
  margin-bottom: 2px;
}

.app-title {
  color: #2e5c31;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
}

.app-subtitle {
  color: #2e5c31;
  font-size: 18px;
  margin: 0;
  letter-spacing: 3px;
}

.login-box {
  background: white;
  border-radius: 20px;
  padding: 25px;
  width: 90%;
  max-width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.input-container {
  display: flex;
  align-items: center;
  background: #eaeaea;
  border-radius: 50px;
  padding: 12px;
  margin-bottom: 15px;
}

.icon {
  margin-right: 10px;
  color: #999;
  font-size: 18px;
}

input[type="email"],
input[type="password"] {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
}

.options {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 15px;
}

.options a {
  color: #0056b3;
  text-decoration: none;
}

.login-button {
  background: #2e5c31;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background: #26492a;
}

p {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

p a {
  color: #0056b3;
  text-decoration: none;
}
</style>
