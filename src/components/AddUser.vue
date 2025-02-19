<template>
    <div>
      <h1>FarmXpress Test</h1>
      <button @click="addUser">Add User to Firebase</button>
    </div>
  </template>
  
  <script>
  import { db } from '../firebaseConfig'; // Import the configuration
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    methods: {
      async addUser() {
        try {
          await addDoc(collection(db, 'users'), {
            name: 'Dann Leah De Juan',
            email: 'liyahhhdejuan@gmail.com'
          });
          alert('User added to Firebase!');
        } catch (error) {
          console.error('Error adding user:', error);
        }
      }
    }
  }
  </script>
  