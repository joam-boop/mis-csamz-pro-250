```vue
<template>
  <v-app>
    <DashboardSidebar />

    <v-main>
      <div class="logistic-dashboard">

        <!-- TOP HEADER -->
        <div class="dashboard-header">

          <div>
            <h1 class="dashboard-title">
              College Logistics Dashboard
            </h1>

            <p class="dashboard-subtitle">
              Manage school Materials, inventory, cafeteria supplies,
              maintenance requests and campus logistics operations.
            </p>
          </div>

          <div class="live-status">
            <i class="bi bi-building"></i>
            Campus Logistics Active
          </div>

        </div>

        <!-- STATISTICS -->
        <div class="stats-grid">

          <div class="stat-card">
            <div class="icon pink">
              <i class="bi bi-bus-front"></i>
            </div>

            <div>
              <h2>12</h2>
              <p>school Equipment</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="icon purple">
              <i class="bi bi-box-seam"></i>
            </div>

            <div>
              <h2>428</h2>
              <p>Inventory Items</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="icon blue">
              <i class="bi bi-tools"></i>
            </div>

            <div>
              <h2>16</h2>
              <p>Maintenance Requests</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="icon green">
              <i class="bi bi-check-circle"></i>
            </div>

            <div>
              <h2>98%</h2>
              <p>Operations Efficiency</p>
            </div>
          </div>

        </div>

        
          <!-- MAIN CONTENT -->
<div class="content-grid">

  <!-- LEFT SIDE -->
  <div class="left-section">

    <!-- RECENT REQUESTS -->
    <div class="card-box">

      <div class="card-header">
        <h3>Recent Logistics Requests</h3>

        <button class="view-btn">
          View All
        </button>
      </div>

      <table class="request-table">

        <thead>
          <tr>
            <th>Department</th>
            <th>Request</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Computer Lab</td>
            <td>Equipment Delivery</td>
            <td>
              <span class="status completed">
                Completed
              </span>
            </td>
          </tr>

          <tr>
            <td>Cafeteria</td>
            <td>Food Supply Restock</td>
            <td>
              <span class="status pending">
                Pending
              </span>
            </td>
          </tr>

          <tr>
            <td>Book Management</td>
            <td>Workshop Maintenance</td>
            <td>
              <span class="status progress">
                In Progress
              </span>
            </td>
          </tr>

        </tbody>

      </table>

    </div>

    <!-- MATERIALS -->
    <div class="dashboard-card">

      <div class="card-header">
        <h3>
          <i class="bi bi-book-fill"></i>
          Materials & Books Inventory
        </h3>

        <button class="view-btn">
          View Inventory
        </button>
      </div>

      <div class="materials-grid">

        <div class="material-card">
          <div class="material-icon pink">
            <i class="bi bi-book-half"></i>
          </div>

          <div>
            <h4>Programming Books</h4>
            <p>245 Available</p>
          </div>
        </div>

        <div class="material-card">
          <div class="material-icon blue2">
            <i class="bi bi-laptop-fill"></i>
          </div>

          <div>
            <h4>Laptops</h4>
            <p>120 Devices</p>
          </div>
        </div>

        <div class="material-card">
          <div class="material-icon green2">
            <i class="bi bi-router-fill"></i>
          </div>

          <div>
            <h4>Networking Tools</h4>
            <p>58 Active Kits</p>
          </div>
        </div>

        <div class="material-card">
          <div class="material-icon orange2">
            <i class="bi bi-journal-code"></i>
          </div>

          <div>
            <h4>IT Manuals</h4>
            <p>90 Manuals</p>
          </div>
        </div>

        <div class="material-card">
          <div class="material-icon purple2">
            <i class="bi bi-hdd-rack-fill"></i>
          </div>

          <div>
            <h4>Storage Servers</h4>
            <p>12 Installed</p>
          </div>
        </div>

        <div class="material-card">
          <div class="material-icon red2">
            <i class="bi bi-printer-fill"></i>
          </div>

          <div>
            <h4>Printers</h4>
            <p>16 Working</p>
          </div>
        </div>

      </div>

    </div>

  </div>

  <!-- RIGHT SIDE -->
  <div class="right-section">

    <!-- STORAGE -->
    <div class="dashboard-card">

      <div class="card-header">
        <h3>
          <i class="bi bi-pc-display-horizontal"></i>
          Computer Storage Management
        </h3>

        <button class="view-btn">
          Manage Storage
        </button>
      </div>

      <div class="storage-grid">

        <div class="storage-card">
          <div class="storage-icon blue-storage">
            <i class="bi bi-hdd-fill"></i>
          </div>

          <div>
            <h4>Main Server Storage</h4>
            <p>4.5TB Used / 8TB Total</p>

            <div class="progress-bar">
              <div class="progress-fill blue-fill"></div>
            </div>
          </div>
        </div>

        <div class="storage-card">
          <div class="storage-icon pink-storage">
            <i class="bi bi-device-hdd-fill"></i>
          </div>

          <div>
            <h4>Computer Lab Storage</h4>
            <p>2.1TB Used / 5TB Total</p>

            <div class="progress-bar">
              <div class="progress-fill pink-fill"></div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- INVENTORY -->
    <div class="card-box">

      <div class="card-header">
        <h3>School Inventory</h3>
      </div>

      <div class="inventory-item">
        <div>
          <h4>Classroom Materials</h4>
          <p>Available Stock</p>
        </div>

        <span>82%</span>
      </div>

      <div class="progress-bar">
        <div class="progress pink-bar"></div>
      </div>

      <div class="inventory-item">
        <div>
          <h4>Cafeteria Supplies</h4>
          <p>Available Stock</p>
        </div>

        <span>64%</span>
      </div>

      <div class="progress-bar">
        <div class="progress purple-bar"></div>
      </div>

    </div>

    <!-- QUICK ACTIONS -->
    <div class="card-box quick-actions">

      <div class="card-header">
        <h3>Quick Actions</h3>
      </div>

      <button class="action-btn pink-btn">
        <i class="bi bi-plus-circle"></i>
        Add Inventory
      </button>

      <button class="action-btn purple-btn">
        <i class="bi bi-tools"></i>
        Manage Equipment
      </button>

      <button class="action-btn blue-btn">
        <i class="bi bi-wrench"></i>
        Maintenance Requests
      </button>

    </div>

  </div>

</div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import DashboardSidebar from '../../components/common/DashboardSidebar.vue';
</script>

<style scoped>

.logistic-dashboard{
  min-height:100vh;
  padding:30px;
  background:linear-gradient(135deg,#ffe0ef,#ffd2e8,#fff4f9);
}

/* HEADER */

.dashboard-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  margin-bottom:30px;
}

.dashboard-title{
  font-size:34px;
  font-weight:700;
  color:#c2185b;
}

.dashboard-subtitle{
  margin-top:8px;
  color:#7c5a68;
}

.live-status{
  background:white;
  padding:14px 20px;
  border-radius:15px;
  color:#c2185b;
  font-weight:600;
  box-shadow:0 5px 20px rgba(0,0,0,0.08);
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stat-card{
  background:white;
  border-radius:22px;
  padding:24px;
  display:flex;
  align-items:center;
  gap:18px;
  box-shadow:0 8px 25px rgba(0,0,0,0.08);
  transition:0.3s;
}

.stat-card:hover{
  transform:translateY(-5px);
}

.icon{
  width:65px;
  height:65px;
  border-radius:18px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size:28px;
}

.pink{
  background:#ff4f9a;
}

.purple{
  background:#9c27b0;
}

.blue{
  background:#3f51b5;
}

.green{
  background:#2e7d32;
}

.stat-card h2{
  color:#222;
  font-size:28px;
}

.stat-card p{
  color:#777;
}

/* CONTENT */

.content-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:25px;
}

.card-box{
  background:white;
  border-radius:22px;
  padding:24px;
  margin-bottom:25px;
  box-shadow:0 8px 25px rgba(0,0,0,0.08);
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.card-header h3{
  color:#c2185b;
}

.view-btn{
  border:none;
  background:#ff4f9a;
  color:white;
  padding:10px 16px;
  border-radius:10px;
  cursor:pointer;
  font-weight:600;
}

/* TABLE */

.request-table{
  width:100%;
  border-collapse:collapse;
}

.request-table th{
  background:#ffe4ef;
  color:#c2185b;
  padding:14px;
  text-align:left;
}

.request-table td{
  padding:15px;
  border-bottom:1px solid #eee;
}

.status{
  padding:7px 14px;
  border-radius:20px;
  font-size:13px;
  font-weight:600;
}
/* STORAGE MANAGEMENT */

.storage-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    gap: 20px;
}

.storage-card{
    background: #fff5f8;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    gap: 18px;
    align-items: flex-start;
    border: 1px solid #ffd6e7;
    transition: 0.3s;
}

.storage-card:hover{
    transform: translateY(-5px);
    background: #ffe3ef;
}

.storage-icon{
    width: 65px;
    height: 65px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 28px;
}

.storage-card h4{
    color: #c2185b;
    margin-bottom: 8px;
    font-size: 18px;
}

.storage-card p{
    color: #666;
    margin-bottom: 12px;
    font-size: 14px;
}

.progress-bar{
    width: 100%;
    height: 10px;
    background: #f8cddd;
    border-radius: 20px;
    overflow: hidden;
}

.progress-fill{
    height: 100%;
    border-radius: 20px;
}

.blue-fill{
    width: 65%;
    background: #1e88e5;
}

.pink-fill{
    width: 42%;
    background: #d81b60;
}

.green-fill{
    width: 78%;
    background: #43a047;
}

.orange-fill{
    width: 55%;
    background: #fb8c00;
}

.blue-storage{
    background: linear-gradient(135deg,#42a5f5,#1e88e5);
}

.pink-storage{
    background: linear-gradient(135deg,#ec407a,#d81b60);
}

.green-storage{
    background: linear-gradient(135deg,#66bb6a,#43a047);
}

.orange-storage{
    background: linear-gradient(135deg,#ffa726,#fb8c00);
}
.completed{
  background:#d4edda;
  color:#155724;
}

.pending{
  background:#fff3cd;
  color:#856404;
}

.progress{
  background:#d1ecf1;
  color:#0c5460;
}

/* TRANSPORT */

.transport-item{
  display:flex;
  justify-content:space-between;
  padding:14px 0;
  border-bottom:1px solid #eee;
}

/* INVENTORY */

.inventory-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:20px;
}

.inventory-item h4{
  color:#333;
  margin-bottom:4px;
}

.inventory-item p{
  font-size:14px;
  color:#888;
}

.progress-bar{
  width:100%;
  height:10px;
  background:#f5d9e5;
  border-radius:20px;
  overflow:hidden;
  margin-top:10px;
}

.progress{
  height:100%;
  border-radius:20px;
}

.pink-bar{
  width:82%;
  background:#ff4f9a;
}

.purple-bar{
  width:64%;
  background:#9c27b0;
}

.green-bar{
  width:90%;
  background:#2e7d32;
}

/* ACTIONS */

.quick-actions{
  display:flex;
  flex-direction:column;
  gap:15px;
}

.action-btn{
  border:none;
  padding:14px;
  border-radius:14px;
  color:white;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.action-btn:hover{
  transform:scale(1.02);
}

.pink-btn{
  background:#ff4f9a;
}

.purple-btn{
  background:#9c27b0;
}

.blue-btn{
  background:#3f51b5;
}

/* RESPONSIVE */

@media(max-width:950px){

  .content-grid{
    grid-template-columns:1fr;
  }

}
/* MATERIALS */

.materials-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
    gap: 18px;
}

.material-card{
    background: #fff5f8;
    border-radius: 18px;
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: 0.3s;
    border: 1px solid #ffd6e7;
}

.material-card:hover{
    transform: translateY(-4px);
    background: #ffe3ef;
}

.material-icon{
    width: 60px;
    height: 60px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 26px;
}

.material-card h4{
    margin-bottom: 5px;
    color: #c2185b;
    font-size: 17px;
}

.material-card p{
    color: #666;
    font-size: 14px;
}

.pink{
    background: linear-gradient(135deg,#ec407a,#d81b60);
}

.blue2{
    background: linear-gradient(135deg,#42a5f5,#1e88e5);
}

.green2{
    background: linear-gradient(135deg,#66bb6a,#43a047);
}

.orange2{
    background: linear-gradient(135deg,#ffa726,#fb8c00);
}

.purple2{
    background: linear-gradient(135deg,#ab47bc,#8e24aa);
}

.red2{
    background: linear-gradient(135deg,#ef5350,#e53935);
}
.left-section,
.right-section{
  display:flex;
  flex-direction:column;
  gap:25px;
}

.dashboard-card{
  background:white;
  border-radius:22px;
  padding:24px;
  box-shadow:0 8px 25px rgba(0,0,0,0.08);
}

.card-header button{
  border:none;
  background:#ff4f9a;
  color:white;
  padding:10px 16px;
  border-radius:10px;
  cursor:pointer;
  font-weight:600;
}

@media(max-width:950px){

  .content-grid{
    grid-template-columns:1fr;
  }

}
</style>
```
