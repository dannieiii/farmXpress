import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './firebaseConfig';  // assuming your Firebase config is here
import { doc, updateDoc } from 'firebase/firestore';
import '@fortawesome/fontawesome-free/css/all.min.css';






// Initialize Firebase Authentication
const auth = getAuth();

// Check if the user is logged in and email is verified
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Check if the user's email is verified
    if (user.emailVerified) {
      // Get the Firestore document reference (using user.uid as the document ID)
      const userDocRef = doc(db, 'users', user.uid);

      try {
        // Update the isVerified field in Firestore
        await updateDoc(userDocRef, {
          isVerified: true
        });
        console.log('User email is verified, updated Firestore');
      } catch (error) {
        console.error('Error updating Firestore:', error);
      }
    }
  }
});

createApp(App).use(router).mount('#app');
