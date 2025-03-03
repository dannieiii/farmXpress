<template>
  <div class="login-container">
    <div class="login-content">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="FarmXpress Logo" class="logo" />
        <h1 class="app-title">FarmXpress</h1>
        <h3 class="app-subtitle">MOBILE APP</h3>
      </div>

      <!-- Alert Box -->
      <transition name="fade">
        <div v-if="alertMessage" :class="['alert-box', alertType]">
          {{ alertMessage }}
        </div>
      </transition>

      <div class="login-box">
        <h2 class="login-title">Welcome Back</h2>
        <div class="input-container">
          <i class="fas fa-user icon"></i>
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <div class="input-container">
          <i class="fas fa-lock icon"></i>
          <input type="password" v-model="password" placeholder="Password" />
        </div>

        <div class="options">
          <label class="remember-me">
            <input type="checkbox" />
            <span class="checkmark"></span>
            Remember Me
          </label>
          <a @click="forgotPassword" href="#" class="forgot-password">Forgot Password?</a>
        </div>

        <button class="login-button" @click="login">
          <span>Login</span>
          <i class="fas fa-arrow-right"></i>
        </button>

        <p class="signup-link">Don't have an account? <a href="/registration">Sign Up</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      email: '',
      password: '',
      alertMessage: '',
      alertType: '',
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        if (user.emailVerified) {
          // Update Firestore's isVerified field
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists() && !userDoc.data().isVerified) {
            await updateDoc(userDocRef, { isVerified: true });
          }

          this.showAlert('Login Successful!', 'success');
          setTimeout(() => this.$router.push('/'), 1000);
        } else {
          this.showAlert('Please verify your email before logging in.', 'warning');
        }
      } catch (error) {
        console.error('Login Error:', error);
        this.showAlert('Login failed! Check your credentials.', 'error');
      }
    },

    forgotPassword() {
      this.$router.push('/reset-password');
    },

    showAlert(message, type) {
      this.alertMessage = message;
      this.alertType = type;
      setTimeout(() => {
        this.alertMessage = '';
      }, 3000);
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2e5c31, #4a8f4d);
  padding: 20px;
}

.login-content {
  width: 100%;
  max-width: 400px;
}

.logo-container {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  width: 120px;
  margin-bottom: 10px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

.app-title {
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.app-subtitle {
  color: #e0e0e0;
  font-size: 18px;
  margin: 5px 0 0;
  letter-spacing: 3px;
}

/* Alert Box */
.alert-box {
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.success {
  background: #d4edda;
  color: #155724;
}

.warning {
  background: #fff3cd;
  color: #856404;
}

.error {
  background: #f8d7da;
  color: #721c24;
}

.login-box {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  color: #2e5c31;
  margin-bottom: 25px;
  text-align: center;
}

.input-container {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 50px;
  padding: 12px 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.input-container:focus-within {
  box-shadow: 0 0 0 2px #2e5c31;
}

.icon {
  margin-right: 10px;
  color: #2e5c31;
  font-size: 18px;
}

input[type="email"],
input[type="password"] {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #333;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 25px;
}

.remember-me {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.remember-me input {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #2e5c31;
  border-radius: 4px;
  margin-right: 8px;
  display: inline-block;
  position: relative;
}

.remember-me input:checked + .checkmark:after {
  content: '\2714';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2e5c31;
}

.forgot-password {
  color: #2e5c31;
  text-decoration: none;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: #26492a;
}

.login-button {
  background: #2e5c31;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 14px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button:hover {
  background: #26492a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login-button span {
  margin-right: 10px;
}

.signup-link {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color: #666;
}

.signup-link a {
  color: #2e5c31;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.signup-link a:hover {
  color: #26492a;
}

/* Fade transition for alert box */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .login-box {
    padding: 25px;
  }

  .app-title {
    font-size: 30px;
  }

  .app-subtitle {
    font-size: 16px;
  }
}
</style>