<template>
  <div class="register-container">
    <div class="register-content">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="FarmXpress Logo" class="logo" />
        <h1 class="app-title">FarmXpress</h1>
        <h3 class="app-subtitle">MOBILE APP</h3>
      </div>

      <transition name="fade">
        <div v-if="alertMessage" :class="['alert-box', alertType]">
          {{ alertMessage }}
        </div>
      </transition>

      <div class="register-box">
        <h2 class="register-title">Create Account</h2>
        
        <div class="input-container">
          <i class="fas fa-user icon"></i>
          <input type="text" v-model="firstName" placeholder="First Name" required />
        </div>
        
        <div class="input-container">
          <i class="fas fa-user icon"></i>
          <input type="text" v-model="lastName" placeholder="Last Name" required />
        </div>
        
        <div class="input-container">
          <i class="fas fa-user-circle icon"></i>
          <input type="text" v-model="username" placeholder="Username" required />
        </div>
        
        <div class="input-container">
          <i class="fas fa-envelope icon"></i>
          <input type="email" v-model="email" placeholder="Email" required />
        </div>
        
        <div class="input-container">
          <i class="fas fa-phone icon"></i>
          <input type="text" v-model="contactNumber" placeholder="Contact Number" required />
        </div>
        
        <div class="input-container">
          <i class="fas fa-map-marker-alt icon"></i>
          <input type="text" v-model="address" placeholder="Address" required />
        </div>
        
        <div class="input-container">
          <i class="fas fa-lock icon"></i>
          <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password" required />
          <i :class="['fas', showPassword ? 'fa-eye-slash' : 'fa-eye', 'toggle-password']" @click="togglePassword"></i>
        </div>
        
        <div class="input-container">
          <i class="fas fa-lock icon"></i>
          <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" placeholder="Confirm Password" required />
          <i :class="['fas', showConfirmPassword ? 'fa-eye-slash' : 'fa-eye', 'toggle-password']" @click="toggleConfirmPassword"></i>
        </div>

        <button class="register-button" @click="register">
          <span>Create Account</span>
          <i class="fas fa-arrow-right"></i>
        </button>

        <div class="login-link" @click="$router.push('/login')">
          Already have an account? <span>Log In</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      contactNumber: '',
      address: '',
      role: 'customer',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      alertMessage: '',
      alertType: ''
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    showAlert(message, type) {
      this.alertMessage = message;
      this.alertType = type;
      setTimeout(() => {
        this.alertMessage = '';
      }, 3000);
    },
    async register() {
      if (this.password !== this.confirmPassword) {
        this.showAlert('Passwords do not match!', 'error');
        return;
      }
      if (!this.firstName || !this.lastName || !this.username || !this.email || !this.contactNumber || !this.address) {
        this.showAlert('Please fill out all fields.', 'error');
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        this.showAlert('Verification email sent! Please check your inbox.', 'success');

        await setDoc(doc(db, 'users', user.uid), {
          userId: user.uid,
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          contactNumber: this.contactNumber,
          address: this.address,
          role: this.role,
          isVerified: false
        });

        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      } catch (error) {
        console.error('Error during registration:', error);
        this.showAlert('Registration failed! Check console for details.', 'error');
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2e5c31, #4a8f4d);
  padding: 20px;
}

.register-content {
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

.error {
  background: #f8d7da;
  color: #721c24;
}

.register-box {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.register-title {
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

input[type="text"],
input[type="email"],
input[type="password"] {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #333;
}

.toggle-password {
  cursor: pointer;
  color: #2e5c31;
}

.register-button {
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

.register-button:hover {
  background: #26492a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.register-button span {
  margin-right: 10px;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}

.login-link span {
  color: #2e5c31;
  cursor: pointer;
  font-weight: bold;
}

.login-link span:hover {
  text-decoration: underline;
}

/* Fade transition for alert box */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .register-box {
    padding: 25px;
  }

  .app-title {
    font-size: 30px;
  }

  .app-subtitle {
    font-size: 16px;
  }

  .input-container {
    padding: 10px 15px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    font-size: 14px;
  }
}
</style>