```vue type="vue" project="Grocery App" file="HomeView.vue"
[v0-no-op-code-block-prefix]<template>
  <div class="home-page">
    <div class="header">
      <div class="search-container">
        <div class="search-bar">
          <Search size="18" />
          <input type="text" placeholder='Search for "Farm Products"'>
        </div>
        <div class="header-buttons">
          <button class="icon-button" @click="navigateToPath('/cart')">
            <ShoppingCart size="18" />
            <span v-if="cartItems.length > 0" class="cart-badge">{{ cartItems.length }}</span>
          </button>
          <button class="icon-button profile-icon" @click="toggleProfileMenu" ref="profileRef">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
          </button>
          
          <!-- Profile Dropdown Menu -->
          <div class="profile-dropdown" v-if="showProfileMenu">
            <div class="profile-header">
              <div class="profile-avatar">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User avatar" />
              </div>
              <div class="profile-user-info">
                <h3>Antonio Yanto</h3>
                <p>antonio.yanto@example.com</p>
              </div>
            </div>
            
               
            <div class="profile-actions">
              <button class="become-supplier-btn" @click="navigateToPath('/seller-register')">
                <Briefcase size="16" />
                Become a Farmer/Supplier
              </button>
            </div>
            
            <div class="profile-menu">
              <button class="menu-item" @click="navigateToPath('/edit-profile')">
                <UserCog size="16" />
                Edit Profile
              </button>
              <button class="menu-item">
                <Settings size="16" />
                Account Settings
              </button>
              <button class="menu-item">
                <MapPin size="16" />
                Shipping Address
              </button>
              <button class="menu-item">
                <FileText size="16" />
                Terms and Conditions
              </button>
              <button class="menu-item">
                <Shield size="16" />
                Privacy Policy
              </button>
              <button class="menu-item">
                <Star size="16" />
                Rate this App
              </button>
              <button class="menu-item">
                <Share2 size="16" />
                Share this App
              </button>
              <button class="menu-item logout">
                <LogOut size="16" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="location">
        <p>Current Location</p>
        <h3>Manila, Philippines <MapPin size="14" /></h3>
      </div>
      
      <div class="categories">
  <div class="category">
    <div class="category-icon">
      <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Vegetables">
    </div>
    <span>Vegetables</span>
  </div>
  <div class="category">
    <div class="category-icon">
      <img src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Fruits">
    </div>
    <span>Fruits</span>
  </div>
  <div class="category">
    <div class="category-icon">
      <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Grains">
    </div>
    <span>Grains</span>
  </div>
  <div class="category">
    <div class="category-icon">
      <img src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Dairy">
    </div>
    <span>Dairy</span>
  </div>
</div>
    </div>
    
    <div class="content">
      <div class="section-header">
        <h2>Fresh Harvest</h2>
        <a href="#" class="see-more">See more</a>
      </div>
      
      <div class="products-grid">
        <div class="product-card" v-for="(product, index) in products.slice(0, 3)" :key="index" @click="viewProduct(product)">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="shop-info">({{ product.shop }})</p>
            <p class="weight">{{ product.weight }}</p>
          </div>
          <div class="product-price">
            <p><span class="price">₱{{ product.price }}</span></p>
            <button class="add-button" @click.stop="addToCart(product)">
              <Plus size="14" />
            </button>
          </div>
        </div>
      </div>
      
      <div class="delivery-options">
        <div class="delivery-card grocery">
          <h3>Farm Fresh</h3>
          <p>By 12:15pm</p>
          <p class="free">Free delivery</p>
          <img src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" alt="Farm Fresh" class="delivery-image">
        </div>
        <div class="delivery-card wholesale">
          <h3>Wholesale</h3>
          <p>By 1:30pm</p>
          <p class="free">Free Delivery</p>
          <img src="https://cdn-icons-png.flaticon.com/512/1532/1532688.png" alt="Wholesale" class="delivery-image">
        </div>
      </div>
      
      <div class="section-header">
        <h2>Featured Products</h2>
        <a href="#" class="see-all">See all</a>
      </div>
      
      <div class="featured-products">
        <div class="featured-product-card" v-for="(product, index) in featuredProducts" :key="index" @click="viewProduct(product)">
          <div class="featured-product-image">
            <img :src="product.image" :alt="product.name">
            <div class="discount-badge" v-if="product.discount">-{{ product.discount }}%</div>
          </div>
          <div class="featured-product-info">
            <h3>{{ product.name }}</h3>
            <p class="shop-info">{{ product.shop }}</p>
            <div class="featured-product-price">
              <p class="current-price">₱{{ product.currentPrice }}/{{ product.unit }}</p>
              <p class="original-price" v-if="product.originalPrice">₱{{ product.originalPrice }}</p>
            </div>
            <div class="rating">
              <Star size="12" fill="#FFD700" color="#FFD700" />
              <span>{{ product.rating }}</span>
              <span class="sold">({{ product.sold }} sold)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <bottom-navigation active-tab="/" @navigate="handleBottomNavigation" />
  </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue';
import { 
  Search, 
  ShoppingCart, 
  MapPin, 
  Plus, 
  User, 
  Star, 
  UserCog, 
  Settings, 
  FileText, 
  Shield, 
  Share2, 
  LogOut,
  Briefcase
} from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    BottomNavigation,
    Search,
    ShoppingCart,
    MapPin,
    Plus,
    User,
    Star,
    UserCog,
    Settings,
    FileText,
    Shield,
    Share2,
    LogOut,
    Briefcase
  },
  setup() {
    const router = useRouter();
    const showProfileMenu = ref(false);
    const profileRef = ref(null);
    const cartItems = ref([]);

    const toggleProfileMenu = () => {
      showProfileMenu.value = !showProfileMenu.value;
    };

    const handleClickOutside = (event) => {
      if (profileRef.value && !profileRef.value.contains(event.target)) {
        showProfileMenu.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      router,
      showProfileMenu,
      profileRef,
      toggleProfileMenu,
      cartItems
    };
  },
  data() {
    return {
      products: [
  {
    id: 1,
    name: 'Fresh Kalabasa',
    shop: 'Batangas Farms',
    weight: '500 gm',
    price: '45',
    image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Organic Avocado',
    shop: 'Davao Growers',
    weight: '450 gm',
    price: '75',
    image: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Native Carrots',
    shop: 'Baguio Farms',
    weight: '1000 gm',
    price: '60',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
],
      featuredProducts: [
  {
    id: 4,
    name: 'Free-Range Chicken',
    shop: 'Batangas Poultry',
    currentPrice: '220',
    originalPrice: '250',
    unit: 'kg',
    discount: 12,
    rating: 4.8,
    sold: 235,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 5,
    name: 'Fresh Strawberries',
    shop: 'Baguio Berry Farm',
    currentPrice: '180',
    unit: 'box',
    rating: 4.7,
    sold: 189,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 6,
    name: 'Carabao Milk',
    shop: 'Batangas Dairy',
    currentPrice: '95',
    originalPrice: '110',
    unit: 'liter',
    discount: 13,
    rating: 4.9,
    sold: 312,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 7,
    name: 'Pandesal',
    shop: 'Local Bakery',
    currentPrice: '50',
    unit: 'dozen',
    rating: 4.6,
    sold: 278,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
]
    }
  },
  methods: {
    viewProduct(product) {
      this.router.push({
        path: '/product-details',
        query: { id: product.id }
      });
    },
    handleTabChange(tab) {
      console.log(`Changed to tab: ${tab}`);
      // Handle tab change logic here
    },
    addToCart(product) {
      console.log(`Added ${product.name} to cart`);
      this.cartItems.push({...product, quantity: 1});
      // Show a toast or notification
    },
    navigateToPath(path, query = null) {
      this.showProfileMenu = false;
      if (query) {
        this.router.push({ path, query });
      } else {
        this.router.push(path);
      }
    },
    handleBottomNavigation(path) {
      this.router.push(path);
    }
  }
}
</script>

<style scoped>
.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
}

.header {
  background-color: #2e5c31;
  padding: 20px 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.search-bar {
  flex: 1;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 40px;
}

.search-bar svg {
  color: #9e9e9e;
  margin-right: 10px;
}

.search-bar input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
}

.header-buttons {
  display: flex;
  gap: 8px;
  position: relative;
}

.icon-button {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
}

.icon-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e74c3c;
  color: white;
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.profile-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Profile Dropdown Menu */
.profile-dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  width: 280px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
}

.profile-header {
  padding: 20px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  gap: 15px;
}

.profile-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #2e5c31;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-user-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #333;
}

.profile-user-info p {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.profile-actions {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.become-supplier-btn {
  width: 100%;
  padding: 10px;
  background-color: #2e5c31;
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.become-supplier-btn:hover {
  background-color: #26492a;
}

.profile-menu {
  padding: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 15px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.menu-item:hover {
  background-color: #f5f5f5;
}

.menu-item.logout {
  color: #e74c3c;
}

.menu-item.logout:hover {
  background-color: #fee2e2;
}

.location {
  color: white;
  margin-bottom: 20px;
}

.location p {
  font-size: 12px;
  opacity: 0.8;
}

.location h3 {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.categories {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.category-icon {
  width: 50px;
  height: 50px;
  background-color: #f8e9d6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.category-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category span {
  color: white;
  font-size: 12px;
}

.content {
  flex: 1;
  padding: 20px 15px;
  overflow-y: auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.see-more, .see-all {
  color: #e86424;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.product-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 10px;
}

.product-info h3 {
  font-size: 14px;
  margin-bottom: 2px;
  color: #333;
}

.shop-info {
  font-size: 11px;
  color: #666;
  margin-bottom: 2px;
}

.weight {
  font-size: 11px;
  color: #999;
}

.product-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px;
}

.price {
  font-weight: bold;
  font-size: 16px;
  color: #2e5c31;
}

.product-price sup {
  font-size: 10px;
  color: #666;
}

.add-button {
  width: 25px;
  height: 25px;
  background-color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.add-button:hover {
  background-color: #2e5c31;
  color: white;
}

.delivery-options {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.delivery-card {
  flex: 1;
  padding: 15px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  height: 120px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.delivery-card:hover {
  transform: translateY(-3px);
}

.delivery-card.grocery {
  background-color: #f8e9d6;
}

.delivery-card.wholesale {
  background-color: #ffd6d6;
}

.delivery-card h3 {
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
  font-weight: 600;
}

.delivery-card p {
  font-size: 12px;
  margin-bottom: 5px;
  color: #555;
}

.delivery-card .free {
  font-size: 11px;
  opacity: 0.7;
}

.delivery-image {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 60px;
  height: 60px;
  opacity: 0.8;
}

.featured-products {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 5px 0 15px 0;
  scrollbar-width: none; /* Firefox */
}

.featured-products::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

.featured-product-card {
  min-width: 160px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.featured-product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.featured-product-image {
  height: 120px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.featured-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #e74c3c;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 10px;
}

.featured-product-info {
  padding: 12px;
}

.featured-product-info h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.featured-product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
}

.current-price {
  font-size: 14px;
  font-weight: 700;
  color: #2e5c31;
}

.original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #666;
}

.sold {
  color: #999;
}
</style>