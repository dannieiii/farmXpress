<template>
  <div class="user-home">
    <!-- Header -->
    <div class="header">
      <h1 class="app-title">FarmXpress</h1>
      <input type="text" class="search-bar" placeholder="Search for products...">
      <div class="icons">
        <i class="fas fa-comments"></i>
        <router-link to="/profile" class="profile-link">
          <i class="fas fa-user-circle"></i>
        </router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <h2>Welcome, User!</h2>
      <p>Discover fresh and organic farm products straight from local farmers.</p>
      <div class="promo-banner">
        <i class="fas fa-tag"></i>
        <p>Exclusive Deals! Get fresh produce at the best prices.</p>
      </div>
      <div class="categories">
        <div class="category">
          <i class="fas fa-carrot"></i>
          <p>Vegetables</p>
        </div>
        <div class="category">
          <i class="fas fa-apple-alt"></i>
          <p>Fruits</p>
        </div>
        <div class="category">
          <i class="fas fa-egg"></i>
          <p>Dairy & Eggs</p>
        </div>
        <div class="category">
          <i class="fas fa-seedling"></i>
          <p>Herbs</p>
        </div>
      </div>
      <router-link to="/register-seller" class="become-seller">Become a Seller</router-link>

    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
      <i class="fas fa-home"></i>
      <i class="fas fa-heart"></i>
      <i class="fas fa-shopping-cart"></i>
      <i class="fas fa-box"></i>
      <i class="fas fa-bell"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHome",
};
</script>

<style scoped>
.user-home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #f2f2f2;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #2e5c31;
  color: white;
  flex-wrap: wrap;
}

.search-bar {
  flex-grow: 1;
  margin: 0 10px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  min-width: 150px;
}

.icons {
  display: flex;
  align-items: center;
}

.icons i {
  font-size: 24px;
  margin-left: 15px;
  cursor: pointer;
}

.profile-link {
  text-decoration: none;
  color: inherit;
}

.profile-link i {
  transition: transform 0.2s;
}

.profile-link i:hover {
  transform: scale(1.1);
}

.main-content {
  text-align: center;
  padding: 20px;
}

.promo-banner {
  background: #ffcc00;
  padding: 10px;
  border-radius: 5px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
}

.promo-banner i {
  margin-right: 8px;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin: 20px 0;
}

.category {
  text-align: center;
}

.category i {
  font-size: 30px;
  color: #2e5c31;
}

.become-seller {
  background: #2e5c31;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  max-width: 300px;
  margin: 10px auto;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  bottom: 0;
}

.bottom-nav i {
  font-size: 24px;
  color: #2e5c31;
  padding: 10px;
  cursor: pointer;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .search-bar {
    width: 90%;
    margin-top: 10px;
  }

  .icons {
    margin-top: 10px;
  }

  .categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .header {
    padding: 20px;
  }

  .search-bar {
    max-width: 400px;
  }
}
</style>
