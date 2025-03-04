<template>
  <div class="edit-profile">
    <div class="header">
      <button class="back-button" @click="$emit('navigate', 'HomePage')">
        <ChevronLeft size="22" />
      </button>
      <h1>Edit Profile</h1>
      <div class="header-buttons">
        <button class="icon-button">
          <ShoppingCart size="18" />
        </button>
      </div>
    </div>
    
    <div class="profile-content">
      <div class="profile-picture-section">
        <div class="profile-picture">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile picture" />
          <button class="change-photo-btn">
            <Camera size="18" />
          </button>
        </div>
        <h2>Antonio Yanto</h2>
        <p>antonio.yanto@example.com</p>
      </div>
      
      <form @submit.prevent="saveProfile" class="profile-form">
        <div class="form-section">
          <h3>Personal Information</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="profileData.firstName" 
                placeholder="Enter first name"
              />
            </div>
            
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="profileData.lastName" 
                placeholder="Enter last name"
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="profileData.username" 
              placeholder="Enter username"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="profileData.email" 
              placeholder="Enter email address"
            />
          </div>
          
          <div class="form-group">
            <label for="contactNumber">Contact Number</label>
            <input 
              type="tel" 
              id="contactNumber" 
              v-model="profileData.contactNumber" 
              placeholder="Enter contact number"
            />
          </div>
          
          <div class="form-group">
            <label for="address">Address</label>
            <textarea 
              id="address" 
              v-model="profileData.address" 
              placeholder="Enter your address"
              rows="3"
            ></textarea>
          </div>
        </div>
        
        <div class="form-section">
          <h3>Change Password</h3>
          
          <div class="form-group">
            <label for="currentPassword">Current Password</label>
            <div class="password-input">
              <input 
                :type="showCurrentPassword ? 'text' : 'password'" 
                id="currentPassword" 
                v-model="profileData.currentPassword" 
                placeholder="Enter current password"
              />
              <button type="button" @click="showCurrentPassword = !showCurrentPassword" class="toggle-password">
                <Eye v-if="!showCurrentPassword" size="18" />
                <EyeOff v-else size="18" />
              </button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="newPassword">New Password</label>
            <div class="password-input">
              <input 
                :type="showNewPassword ? 'text' : 'password'" 
                id="newPassword" 
                v-model="profileData.newPassword" 
                placeholder="Enter new password"
              />
              <button type="button" @click="showNewPassword = !showNewPassword" class="toggle-password">
                <Eye v-if="!showNewPassword" size="18" />
                <EyeOff v-else size="18" />
              </button>
            </div>
          </div>
          
          <div class="form-group">
            <label for="confirmNewPassword">Confirm New Password</label>
            <div class="password-input">
              <input 
                :type="showConfirmPassword ? 'text' : 'password'" 
                id="confirmNewPassword" 
                v-model="profileData.confirmNewPassword" 
                placeholder="Confirm new password"
              />
              <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="toggle-password">
                <Eye v-if="!showConfirmPassword" size="18" />
                <EyeOff v-else size="18" />
              </button>
            </div>
            <p v-if="passwordMismatch" class="error-message">Passwords do not match</p>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="button" class="cancel-btn" @click="$emit('navigate', 'HomePage')">Cancel</button>
          <button type="submit" class="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
    
    <bottom-navigation active-tab="home" @navigate="$emit('navigate', $event)" />
  </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue';
import { 
  ChevronLeft, 
  ShoppingCart, 
  Camera, 
  Eye, 
  EyeOff 
} from 'lucide-vue-next';
import { ref, computed } from 'vue';

export default {
  components: {
    BottomNavigation,
    ChevronLeft,
    ShoppingCart,
    Camera,
    Eye,
    EyeOff
  },
  setup() {
    const profileData = ref({
      firstName: "Antonio",
      lastName: "Yanto",
      username: "antonio_yanto",
      email: "antonio.yanto@example.com",
      contactNumber: "+1 (555) 123-4567",
      address: "123 Green Street, Farmville, CA 90210",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    });
    
    const showCurrentPassword = ref(false);
    const showNewPassword = ref(false);
    const showConfirmPassword = ref(false);
    
    const passwordMismatch = computed(() => {
      return profileData.value.newPassword && 
             profileData.value.confirmNewPassword && 
             profileData.value.newPassword !== profileData.value.confirmNewPassword;
    });
    
    const saveProfile = () => {
      if (passwordMismatch.value) {
        return;
      }
      
      // Here you would typically send the data to your backend
      console.log('Saving profile data:', profileData.value);
      
      // Show success message
      alert('Profile updated successfully!');
    };
    
    return {
      profileData,
      showCurrentPassword,
      showNewPassword,
      showConfirmPassword,
      passwordMismatch,
      saveProfile
    };
  }
}
</script>

<style scoped>
.edit-profile {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: #2e5c31;
  color: white;
}

.back-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.header h1 {
  font-size: 18px;
  font-weight: 600;
}

.header-buttons {
  display: flex;
  gap: 8px;
}

.icon-button {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.profile-content {
  flex: 1;
  padding: 0 0 20px 0;
  background-color: #f5f5f5;
  overflow-y: auto;
}

.profile-picture-section {
  background-color: white;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.profile-picture {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;
  border: 3px solid #2e5c31;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.change-photo-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background-color: #2e5c31;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.profile-picture-section h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #333;
}

.profile-picture-section p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.profile-form {
  padding: 0 15px;
}

.form-section {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.form-section h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #2e5c31;
}

.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #2e5c31;
  outline: none;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 5px;
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.cancel-btn,
.save-btn {
  flex: 1;
  padding: 14px 0;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancel-btn {
  background-color: #f1f1f1;
  color: #555;
}

.save-btn {
  background-color: #2e5c31;
  color: white;
  box-shadow: 0 3px 8px rgba(46, 92, 49, 0.3);
}

.cancel-btn:hover {
  background-color: #e5e5e5;
}

.save-btn:hover {
  background-color: #26492a;
}
</style>