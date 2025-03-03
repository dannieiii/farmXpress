<template>
    <div class="dashboard-container">
      <Sidebar initialActiveItem="Customers" />
      
      <div class="main-content">
        <header class="header">
          <div class="page-title">
            <h1>Customers</h1>
            <p>Manage and view your customer information</p>
          </div>
        </header>
  
        <div class="content-wrapper">
          <div class="actions-bar">
            <div class="search-container">
              <div class="search-box">
                <Search size="18" class="search-icon" />
                <input type="text" placeholder="Search customers..." v-model="searchQuery" />
              </div>
            </div>
            <button class="add-customer-btn">
              <UserPlus size="18" />
              Add Customer
            </button>
          </div>
  
          <table class="customers-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="customer in filteredCustomers" :key="customer.id">
                <td>
                  <div class="customer-info">
                    <div class="customer-avatar">
                      <img :src="customer.avatar" :alt="`${customer.name}'s avatar`" />
                    </div>
                    <span>{{ customer.name }}</span>
                  </div>
                </td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phone }}</td>
                <td>{{ customer.orderCount }}</td>
                <td>${{ customer.totalSpent.toFixed(2) }}</td>
                <td>
                  <span :class="['status-badge', customer.status.toLowerCase()]">
                    {{ customer.status }}
                  </span>
                </td>
                <td>
                  <div class="action-buttons">
                    <button class="action-btn view-btn">
                      <Eye size="14" />
                      View
                    </button>
                    <button class="action-btn edit-btn">
                      <Edit size="14" />
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
  
          <div class="pagination">
            <button class="page-btn" :disabled="currentPage === 1" @click="prevPage">&lt; Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button class="page-btn" :disabled="currentPage === totalPages" @click="nextPage">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Sidebar from '@/components/Sidebar.vue';
  import { Search, UserPlus, Eye, Edit } from 'lucide-vue-next';
  
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = 10;
  
  const customers = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '(555) 123-4567', 
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg', 
      orderCount: 5, 
      totalSpent: 250.50,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      phone: '(555) 987-6543', 
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg', 
      orderCount: 3, 
      totalSpent: 150.75,
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Bob Johnson', 
      email: 'bob@example.com', 
      phone: '(555) 246-8135', 
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg', 
      orderCount: 7, 
      totalSpent: 375.25,
      status: 'Inactive'
    },
    { 
      id: 4, 
      name: 'Alice Brown', 
      email: 'alice@example.com', 
      phone: '(555) 369-8520', 
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg', 
      orderCount: 2, 
      totalSpent: 120.00,
      status: 'Active'
    },
    { 
      id: 5, 
      name: 'Charlie Wilson', 
      email: 'charlie@example.com', 
      phone: '(555) 741-9630', 
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg', 
      orderCount: 4, 
      totalSpent: 200.50,
      status: 'New'
    },
    { 
      id: 6, 
      name: 'Diana Miller', 
      email: 'diana@example.com', 
      phone: '(555) 852-7410', 
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg', 
      orderCount: 1, 
      totalSpent: 75.25,
      status: 'Active'
    },
    { 
      id: 7, 
      name: 'Edward Davis', 
      email: 'edward@example.com', 
      phone: '(555) 963-8520', 
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg', 
      orderCount: 6, 
      totalSpent: 300.00,
      status: 'Active'
    },
    { 
      id: 8, 
      name: 'Fiona Clark', 
      email: 'fiona@example.com', 
      phone: '(555) 159-7530', 
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg', 
      orderCount: 3, 
      totalSpent: 180.75,
      status: 'Inactive'
    }
  ];
  
  const filteredCustomers = computed(() => {
    return customers.filter(customer => 
      customer.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      customer.phone.includes(searchQuery.value)
    );
  });
  
  const totalPages = computed(() => Math.ceil(filteredCustomers.value.length / itemsPerPage));
  
  const paginatedCustomers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredCustomers.value.slice(start, end);
  });
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    min-height: 100vh;
    background-color: #f9fafb;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .page-title h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 5px 0;
  }
  
  .page-title p {
    font-size: 0.9rem;
    color: #6b7280;
    margin: 0;
  }
  
  .content-wrapper {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .actions-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-container {
    flex: 1;
    max-width: 300px;
  }
  
  .search-box {
    display: flex;
    align-items: center;
    background-color: #f3f4f6;
    border-radius: 20px;
    padding: 8px 16px;
    width: 100%;
  }
  
  .search-icon {
    color: #9ca3af;
    margin-right: 8px;
  }
  
  .search-box input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    font-size: 0.9rem;
  }
  
  .add-customer-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: #2e5c31;
    color: #ffffff;
    border: none;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .add-customer-btn:hover {
    background-color: #26492a;
  }
  
  .customers-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .customers-table th,
  .customers-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .customers-table th {
    font-weight: 600;
    color: #4b5563;
    background-color: #f9fafb;
  }
  
  .customer-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .customer-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .customer-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .status-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  .status-badge.active {
    background-color: #d1fae5;
    color: #059669;
  }
  
  .status-badge.inactive {
    background-color: #fee2e2;
    color: #dc2626;
  }
  
  .status-badge.new {
    background-color: #dbeafe;
    color: #2563eb;
  }
  
  .action-buttons {
    display: flex;
    gap: 8px;
  }
  
  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .view-btn {
    background-color: #e0f2fe;
    color: #0284c7;
  }
  
  .view-btn:hover {
    background-color: #bae6fd;
  }
  
  .edit-btn {
    background-color: #f3f4f6;
    color: #4b5563;
  }
  
  .edit-btn:hover {
    background-color: #e5e7eb;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  
  .page-btn {
    padding: 6px 12px;
    background-color: #f3f4f6;
    color: #4b5563;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .page-btn:hover:not(:disabled) {
    background-color: #e5e7eb;
  }
  
  .page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Dark mode styles */
  :global(.dark) .main-content {
    background-color: #111827;
  }
  
  :global(.dark) .content-wrapper {
    background-color: #1f2937;
  }
  
  :global(.dark) .page-title h1 {
    color: #f9fafb;
  }
  
  :global(.dark) .page-title p {
    color: #9ca3af;
  }
  
  :global(.dark) .search-box,
  :global(.dark) .customers-table th,
  :global(.dark) .action-btn.edit-btn,
  :global(.dark) .page-btn {
    background-color: #374151;
  }
  
  :global(.dark) .search-box input,
  :global(.dark) .customers-table th,
  :global(.dark) .customers-table td {
    color: #e5e7eb;
  }
  
  :global(.dark) .customers-table td {
    border-color: #4b5563;
  }
  
  :global(.dark) .action-btn.view-btn {
    background-color: #1e40af;
    color: #bfdbfe;
  }
  
  :global(.dark) .action-btn.view-btn:hover {
    background-color: #1e3a8a;
  }
  
  :global(.dark) .action-btn.edit-btn:hover,
  :global(.dark) .page-btn:hover:not(:disabled) {
    background-color: #4b5563;
  }
  </style>
  