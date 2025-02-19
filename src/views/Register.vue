<template>
  <div class="register-container">
    <div class="header">
      <span class="back-icon"><a href="/login">←</a></span>
      <h2>CREATE ACCOUNT</h2>
    </div>

    <div class="register-box">
      <input type="text" v-model="firstName" placeholder="First Name" required />
      <input type="text" v-model="lastName" placeholder="Last Name" required />
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="text" v-model="contactNumber" placeholder="Contact Number" required />
      <input type="text" v-model="address" placeholder="Address" required />
    

      <div class="input-container">
        <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password" required />
        <span class="eye-icon" @click="togglePassword">
          <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
        </span>
      </div>
      <div class="input-container">
        <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" placeholder="Confirm Password" required />
        <span class="eye-icon" @click="toggleConfirmPassword">
          <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
        </span>
      </div>

      <button class="register-button" @click="register">Create Account</button>
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
      role: 'customer', // Default role
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    async register() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (!this.firstName || !this.lastName || !this.username || !this.email || !this.contactNumber || !this.address) {
        alert('Please fill out all fields.');
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        alert('Verification email sent! Please check your inbox.');

        // Store user data in Firestore with userId
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

        this.$router.push('/login');
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed! Check console for details.');
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f4f4f9;
  padding: 20px;
}

.header {
  background: #2e5c31;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.back-icon {
  position: absolute;
  left: 15px;
  top: 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

.menu-icon {
  position: absolute;
  right: 15px;
  top: 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

h2 {
  color: white;
  font-size: 22px;
  margin: 0;
}

.register-box {
  background: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -10px;
}

input[type="email"],
input[type="text"],
input[type="password"],
select {
  width: 100%;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 25px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
}

.input-container {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #999;
}

.register-button {
  background: #2e5c31;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;
}

.register-button:hover {
  background: #26492a;
}

/* Responsive Design */
@media (max-width: 600px) {
  .register-box {
    padding: 15px;
  }
  input[type="email"],
  input[type="text"],
  input[type="password"],
  select {
    font-size: 14px;
    padding: 10px 15px;
  }
  .register-button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
