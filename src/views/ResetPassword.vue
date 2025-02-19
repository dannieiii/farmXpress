<template>
    <div class="reset-container">
      <div class="header">
        <span class="back-icon" @click="$router.push('/login')">←</span>
        <h2>FORGOT PASSWORD</h2>
        <span class="menu-icon">☰</span>
      </div>
  
      <div class="reset-box">
        <img src="@/assets/lock.png" alt="Lock Icon" class="lock-icon" />
        <h3>Trouble Logging in?</h3>
        <p>Enter your email and we'll send you a link to reset your password.</p>
        <input type="email" v-model="email" placeholder="Email" />
        <button class="reset-button" @click="sendResetLink">Reset Password</button>
      </div>
  
      <div class="footer" @click="$router.push('/login')">
        Return to Login Page
      </div>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebaseConfig';
  import { sendPasswordResetEmail } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async sendResetLink() {
        try {
          await sendPasswordResetEmail(auth, this.email);
          alert('Password reset email sent! Please check your inbox for instructions.');
          this.$router.push('/login');
        } catch (error) {
          console.error('Error sending reset email:', error);
          alert('Error sending reset email. Please check your email and try again.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .reset-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #e0e0e0;
  }
  
  .header {
    background: #2e5c31;
    width: 100%;
    padding: 20px;
    text-align: center;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    position: relative;
  }
  
  .back-icon {
    position: absolute;
    left: 20px;
    top: 25px;
    color: white;
    cursor: pointer;
    font-size: 24px;
  }
  
  .menu-icon {
    position: absolute;
    right: 20px;
    top: 25px;
    color: white;
    cursor: pointer;
    font-size: 24px;
  }
  
  h2 {
    color: white;
    font-size: 24px;
    margin: 0;
  }
  
  .reset-box {
    background: white;
    border-radius: 20px;
    padding: 20px;
    width: 90%;
    max-width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: -30px;
    text-align: center;
  }
  
  .lock-icon {
    width: 80px;
    margin: 20px 0;
  }
  
  h3 {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
    font-weight: bold;
  }
  
  p {
    font-size: 14px;
    color: #777;
    margin-bottom: 20px;
  }
  
  input[type="email"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 50px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
  }
  
  .reset-button {
    background: #2e5c31;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 20px;
  }
  
  .reset-button:hover {
    background: #26492a;
  }
  
  .footer {
    background: #2e5c31;
    color: white;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    margin-top: 20px;
    cursor: pointer;
  }
  </style>
  