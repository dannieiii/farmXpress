<template>
    <div class="profile-view">
      <!-- Header -->
      <div class="header">
        <button @click="$router.go(-1)" class="back-button">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2>Profile</h2>
      </div>
  
      <!-- User Info -->
      <div class="user-info">
        <label for="profile-pic-upload" class="profile-pic-label">
          <img :src="profilePic || '/default-avatar.png'" alt="User Profile" class="profile-pic" />
        </label>
        <input type="file" id="profile-pic-upload" @change="uploadProfilePicture" accept="image/*" />
  
        <h3>{{ name }}</h3>
        <p>{{ email }}</p>
        <button class="edit-profile" @click="$router.push('/edit-profile')">Edit Profile</button>
      </div>
  
      <!-- General Settings -->
      <div class="settings">
        <h3>General Settings</h3>
        <div class="setting-item">
          <i class="fas fa-truck"></i>
          <p>Shipping Information</p>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item">
          <i class="fas fa-info-circle"></i>
          <p>About</p>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item">
          <i class="fas fa-file-alt"></i>
          <p>Terms & Conditions</p>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item">
          <i class="fas fa-lock"></i>
          <p>Privacy Policy</p>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item">
          <i class="fas fa-star"></i>
          <p>Rate This App</p>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="setting-item">
          <i class="fas fa-share-alt"></i>
          <p>Share This App</p>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
  
      <!-- Logout Button -->
      <button class="logout-button" @click="logout">Log Out</button>
    </div>
  </template>
  
  <script>
  import { auth, db, storage } from "../../firebaseConfig";
  import { signOut } from "firebase/auth";
  import { doc, getDoc, updateDoc } from "firebase/firestore";
  import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
  
  export default {
    data() {
      return {
        name: "Loading...",
        email: "Loading...",
        profilePic: null,
      };
    },
    async mounted() {
      const user = auth.currentUser;
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
  
          if (userSnap.exists()) {
            const userData = userSnap.data();
            this.name = `${userData.firstName} ${userData.lastName}`;
            this.email = userData.email;
            this.profilePic = userData.profilePic || "/default-avatar.png";
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    },
    methods: {
      async uploadProfilePicture(event) {
        const user = auth.currentUser;
        if (!user) return;
  
        const file = event.target.files[0];
        if (!file) return;
  
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        try {
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          this.profilePic = downloadURL;
  
          // Update user profile picture in Firestore
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, { profilePic: downloadURL });
        } catch (error) {
          console.error("Error uploading profile picture:", error);
        }
      },
      async logout() {
        try {
          await signOut(auth);
          this.$router.push("/login");
        } catch (error) {
          console.error("Error logging out:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-view {
    background: #f2f2f2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    background: #2e5c31;
    color: white;
  }
  
  .back-button {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  
  /* Profile Picture */
  .user-info {
    text-align: center;
    margin: 20px 0;
    position: relative;
  }
  
  .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #2e5c31;
    cursor: pointer;
  }
  
  #profile-pic-upload {
    display: none;
  }
  
  .profile-pic-label {
    display: inline-block;
    cursor: pointer;
  }
  
  .edit-profile {
    background: #2e5c31;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .settings {
    width: 100%;
    background: white;
    padding: 15px;
    border-radius: 10px;
  }
  
  .setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  
  .logout-button {
    background: red;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  </style>
  