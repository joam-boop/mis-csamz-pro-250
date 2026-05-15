```vue
<template>
  <v-app>

    <DashboardSidebar />

    <v-main class="dos-dashboard">

      <div class="dashboard-container">

        <!-- TOP HEADER -->

        <div class="top-header">

          <div>
            <h1 class="dashboard-title">
              <i class="bi bi-mortarboard-fill"></i>
              DOS Smart Dashboard
            </h1>

            <p class="dashboard-subtitle">
              Monitor registration requests, academic approvals,
              staff operations and student management professionally.
            </p>
          </div>

          <div class="header-actions">

            <button class="header-btn refresh-btn">
              <i class="bi bi-arrow-clockwise"></i>
              Refresh
            </button>

            <button class="header-btn export-btn">
              <i class="bi bi-download"></i>
              Export Report
            </button>

          </div>

        </div>

        <!-- WELCOME CARD -->

        <div class="welcome-card">

          <div class="welcome-left">

            <div class="avatar-box">
              {{ admin.firstName?.charAt(0) }}
            </div>

            <div>
              <h2>
                Welcome {{ admin.firstName }} {{ admin.lastName }}
              </h2>

              <p class="subtitle">
                Director Of Studies Dashboard
              </p>

              <div class="status-line">

                <span class="online-dot"></span>

                Academic operations running normally

              </div>

            </div>

          </div>

          <!-- STATS -->

          <div class="stats-grid">

            <div
              class="stats-card pending clickable"
              @click="showRequests('pending')"
            >

              <div class="stats-icon">
                <i class="bi bi-hourglass-split"></i>
              </div>

              <div>
                <h3>{{ pendingCount }}</h3>
                <p>Pending</p>
              </div>

            </div>

            <div
              class="stats-card approved clickable"
              @click="showRequests('valid')"
            >

              <div class="stats-icon">
                <i class="bi bi-check-circle-fill"></i>
              </div>

              <div>
                <h3>{{ approvedCount }}</h3>
                <p>Approved</p>
              </div>

            </div>

            <div
              class="stats-card rejected clickable"
              @click="showRequests('invalid')"
            >

              <div class="stats-icon">
                <i class="bi bi-x-circle-fill"></i>
              </div>

              <div>
                <h3>{{ rejectedCount }}</h3>
                <p>Rejected</p>
              </div>

            </div>

          </div>

        </div>

        <!-- QUICK ACTIONS -->

        <div class="quick-actions-grid">

          <div class="quick-card pink-card">
            <i class="bi bi-person-plus-fill"></i>
            <h3>{{ requests.length }}</h3>
            <p>Total Requests</p>
          </div>

          <div class="quick-card blue-card">
            <i class="bi bi-people-fill"></i>
            <h3>{{ studentCount }}</h3>
            <p>Students</p>
          </div>

          <div class="quick-card purple-card">
            <i class="bi bi-person-badge-fill"></i>
            <h3>{{ staffCount }}</h3>
            <p>Staff</p>
          </div>

          <div class="quick-card green-card">
            <i class="bi bi-graph-up-arrow"></i>
            <h3>{{ approvalRate }}%</h3>
            <p>Approval Rate</p>
          </div>

        </div>

        <!-- SEARCH + FILTER -->

        <div class="filter-card">

          <div class="filter-left">

            <div class="search-box">

              <i class="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search student, email, trade..."
                v-model="search"
              >

            </div>

          </div>

          <div class="filter-right">

            <select v-model="selectedStatus">

              <option value="">
                All Status
              </option>

              <option value="pending">
                Pending
              </option>

              <option value="valid">
                Approved
              </option>

              <option value="invalid">
                Rejected
              </option>

            </select>

          </div>

        </div>

        <!-- TABLE -->

        <div class="table-card">

          <div class="table-header">

            <div>
              <h3>
                <i class="bi bi-table"></i>
                Registration Requests
              </h3>

              <p>
                Manage students and staff requests efficiently
              </p>
            </div>

            <button class="table-btn">
              <i class="bi bi-funnel-fill"></i>
              Filter Data
            </button>

          </div>

          <div class="table-wrapper">

            <table class="custom-table">

              <thead>

                <tr>

                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Trade</th>
                  <th>District</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                <tr
                  v-for="(req,index) in filteredRequests"
                  :key="req.id"
                >

                  <td>{{ index + 1 }}</td>

                  <td>{{ req.firstName }}</td>

                  <td>{{ req.lastName }}</td>

                  <td>{{ req.email }}</td>

                  <td>{{ req.gender }}</td>

                  <td>{{ req.trade }}</td>

                  <td>{{ req.district }}</td>

                  <td>
                    <span class="role-badge">
                      {{ req.role }}
                    </span>
                  </td>

                  <!-- STATUS -->

                  <td>

                    <span
                      class="status-chip pending-chip"
                      v-if="req.status === 'pending'"
                    >
                      Pending
                    </span>

                    <span
                      class="status-chip approved-chip"
                      v-if="req.status === 'valid'"
                    >
                      Approved
                    </span>

                    <span
                      class="status-chip rejected-chip"
                      v-if="req.status === 'invalid'"
                    >
                      Rejected
                    </span>

                  </td>

                  <!-- ACTIONS -->

                  <td class="action-column">

                    <button
                      class="approve-btn"
                      v-if="req.status === 'pending'"
                      @click="approve(req)"
                    >
                      <i class="bi bi-check-lg"></i>
                    </button>

                    <button
                      class="reject-btn"
                      v-if="req.status === 'pending'"
                      @click="reject(req)"
                    >
                      <i class="bi bi-x-lg"></i>
                    </button>


                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        <!-- ACTIVITY + NOTICE -->

        <div class="bottom-grid">

          <!-- RECENT ACTIVITY -->

          <div class="activity-card">

            <div class="section-header">
              <h3>
                <i class="bi bi-clock-history"></i>
                Recent Activities
              </h3>
            </div>

            <div class="activity-item">

              <div class="activity-icon green-bg">
                <i class="bi bi-check-circle-fill"></i>
              </div>

              <div>
                <h4>3 Requests Approved</h4>
                <p>10 minutes ago</p>
              </div>

            </div>

            <div class="activity-item">

              <div class="activity-icon pink-bg">
                <i class="bi bi-person-plus-fill"></i>
              </div>

              <div>
                <h4>New Student Registration</h4>
                <p>25 minutes ago</p>
              </div>

            </div>

            <div class="activity-item">

              <div class="activity-icon orange-bg">
                <i class="bi bi-exclamation-circle-fill"></i>
              </div>

              <div>
                <h4>Pending Approvals Alert</h4>
                <p>Today</p>
              </div>

            </div>

          </div>

          <div class="notice-card">

  <div class="notice-header">
    <i class="bi bi-lightning-charge-fill"></i>
    Quick Actions
  </div>

  <div class="quick-action-grid">

    <div class="quick-action-item" @click="goToAddMark">
      <i class="bi bi-plus-circle-fill"></i>
      <span>Add Marks</span>
    </div>

    <div class="quick-action-item">
      <i class="bi bi-calendar-check-fill"></i>
      <span>Attendance</span>
    </div>

    <div class="quick-action-item" @click="goToReports">
      <i class="bi bi-file-earmark-text-fill"></i>
      <span>Reports</span>
    </div>

    <div class="quick-action-item" @click="goToMessages">
      <i class="bi bi-chat-dots-fill"></i>
      <span>Messages</span>
    </div>

  </div>

</div>

        </div>

      </div>

    </v-main>

  </v-app>
</template>

<script setup>

import { ref, onMounted, computed } from "vue"

import DashboardSidebar from
'../../components/common/DashboardSidebar.vue'

const admin = ref({})
const requests = ref([])

const selectedStatus = ref('')
const search = ref('')

const goToMessages = () => {

  router.push('/messages')

}
const goToReports = () => {

  router.push('/reports')

}
/* LOAD REQUESTS */

function loadRequests(){

  const students = JSON.parse(
    localStorage.getItem("studentRequests")
  ) || []

  const staff = JSON.parse(
    localStorage.getItem("staffRequests")
  ) || []

  requests.value = [
    ...students,
    ...staff
  ]
}

/* ON MOUNTED */

onMounted(()=>{

  admin.value = JSON.parse(
    localStorage.getItem("loggedInUser")
  ) || {}

  loadRequests()

})

/* UPDATE STORAGE */

function updateStorage(){

  const students = requests.value.filter(
    r => r.type === "student"
  )

  const staff = requests.value.filter(
    r => r.type === "staff"
  )

  localStorage.setItem(
    "studentRequests",
    JSON.stringify(students)
  )

  localStorage.setItem(
    "staffRequests",
    JSON.stringify(staff)
  )

  loadRequests()

}

/* APPROVE */

function approve(req){

  req.status = "valid"

  const users = JSON.parse(
    localStorage.getItem("users")
  ) || []

  const exists = users.find(
    u =>
      u.email === req.email
  )

  if(!exists){

    users.push({

      firstName:req.firstName,
      lastName:req.lastName,

      email:req.email,

      password:req.password,

      role:req.role
    })

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    )

  }

  updateStorage()

}

/* REJECT */

function reject(req){

  req.status = "invalid"

  updateStorage()

}

/* COUNTS */

const pendingCount = computed(()=>{
  return requests.value.filter(
    r => r.status === "pending"
  ).length
})

const approvedCount = computed(()=>{
  return requests.value.filter(
    r => r.status === "valid"
  ).length
})

const rejectedCount = computed(()=>{
  return requests.value.filter(
    r => r.status === "invalid"
  ).length
})

const studentCount = computed(()=>{
  return requests.value.filter(
    r => r.type === "student"
  ).length
})

const staffCount = computed(()=>{
  return requests.value.filter(
    r => r.type === "staff"
  ).length
})

const approvalRate = computed(()=>{

  if(requests.value.length === 0){
    return 0
  }

  return Math.round(
    (approvedCount.value /
    requests.value.length) * 100
  )

})

/* FILTERED */

const filteredRequests = computed(()=>{

  return requests.value.filter(req=>{

    const matchesSearch =

      req.firstName?.toLowerCase().includes(
        search.value.toLowerCase()
      )

      ||

      req.lastName?.toLowerCase().includes(
        search.value.toLowerCase()
      )

      ||

      req.email?.toLowerCase().includes(
        search.value.toLowerCase()
      )

    const matchesStatus =

      selectedStatus.value === ''

      ||

      req.status === selectedStatus.value

    return matchesSearch && matchesStatus

  })

})

/* SHOW REQUESTS */

function showRequests(status){

  selectedStatus.value = status

}

</script>

<style scoped>

.dos-dashboard{
  background:#fff5fa;
  min-height:100vh;
}

.dashboard-container{
  padding:30px;
}

/* TOP HEADER */

.top-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:20px;
  margin-bottom:25px;
}

.dashboard-title{
  font-size:34px;
  font-weight:800;
  color:#d63384;
}

.dashboard-subtitle{
  color:#777;
  margin-top:8px;
}

.header-actions{
  display:flex;
  gap:15px;
}

.header-btn{
  border:none;
  padding:12px 20px;
  border-radius:14px;
  font-weight:600;
  cursor:pointer;
}

.refresh-btn{
  background:#ffe4f1;
  color:#d63384;
}

.export-btn{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
}

/* WELCOME CARD */

.welcome-card{
  background:white;
  border-radius:25px;
  padding:30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:25px;
  box-shadow:0 8px 25px rgba(0,0,0,0.05);
  margin-bottom:25px;
}

.welcome-left{
  display:flex;
  align-items:center;
  gap:20px;
}

.avatar-box{
  width:80px;
  height:80px;
  border-radius:20px;
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:32px;
  font-weight:bold;
}

.subtitle{
  color:#777;
  margin-top:5px;
}

.status-line{
  margin-top:12px;
  display:flex;
  align-items:center;
  gap:8px;
  color:#10b981;
  font-weight:600;
}

.online-dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#10b981;
}

/* STATS */

.stats-grid{
  display:flex;
  gap:15px;
  flex-wrap:wrap;
}

.stats-card{
  min-width:160px;
  padding:20px;
  border-radius:20px;
  color:white;
  display:flex;
  align-items:center;
  gap:15px;
  transition:0.3s;
}

.stats-card:hover{
  transform:translateY(-5px);
}

.stats-icon{
  width:45px;
  height:45px;
  border-radius:16px;
  background:rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:25px;
}

.pending{
  background:linear-gradient(135deg,#f59e0b,#fbbf24);
}

.approved{
  background:linear-gradient(135deg,#10b981,#34d399);
}

.rejected{
  background:linear-gradient(135deg,#ef4444,#f87171);
}

/* QUICK GRID */

.quick-actions-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-bottom:25px;
}

.quick-card{
  border-radius:22px;
  padding:25px;
  color:white;
  box-shadow:0 8px 20px rgba(0,0,0,0.05);
}

.quick-card i{
  font-size:35px;
}

.quick-card h3{
  margin-top:15px;
  font-size:30px;
}

.quick-card p{
  margin-top:8px;
}

.pink-card{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
}

.blue-card{
  background:linear-gradient(135deg,#2563eb,#60a5fa);
}

.purple-card{
  background:linear-gradient(135deg,#7c3aed,#a78bfa);
}

.green-card{
  background:linear-gradient(135deg,#10b981,#34d399);
}

/* FILTER */

.filter-card{
  background:white;
  border-radius:22px;
  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:25px;
}

.search-box{
  background:#fff1f7;
  border-radius:14px;
  padding:14px 18px;
  display:flex;
  align-items:center;
  gap:12px;
  min-width:300px;
}

.search-box input{
  border:none;
  outline:none;
  background:transparent;
  width:100%;
}

.filter-right select{
  padding:14px;
  border-radius:12px;
  border:1px solid #eee;
}

/* TABLE */

.table-card{
  background:white;
  border-radius:25px;
  padding:25px;
  box-shadow:0 8px 25px rgba(0,0,0,0.05);
  margin-bottom:25px;
}

.table-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:15px;
  margin-bottom:20px;
}

.table-header h3{
  color: darkblue;
}

.table-btn{
  border:none;
  background:#fff1f7;
  color:#d63384;
  padding:12px 18px;
  border-radius:12px;
  font-weight:600;
  cursor:pointer;
}

.table-wrapper{
  overflow-x:auto;
}

.custom-table{
  width:100%;
  min-width:1200px;
  border-collapse:collapse;
}

.custom-table th{
  background:#fff1f7;
  color:#d63384;
  padding:16px;
  text-align:left;
}

.custom-table td{
  padding:16px;
  border-bottom:1px solid #f1f1f1;
}

.custom-table tbody tr:hover{
  background:#fff8fc;
}

/* STATUS */

.status-chip{
  padding:7px 14px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.pending-chip{
  background:#fff3cd;
  color:#92400e;
}

.approved-chip{
  background:#dcfce7;
  color:#166534;
}

.rejected-chip{
  background:#fee2e2;
  color:#991b1b;
}

.role-badge{
  background:#f3e8ff;
  color:#7c3aed;
  padding:7px 14px;
  border-radius:20px;
  font-size:13px;
  font-weight:600;
}

/* ACTIONS */

.action-column{
  display:flex;
  gap:8px;
  position: fixed;
}

.approve-btn,
.reject-btn,
.view-btn{
  border:none;
  width:40px;
  height:40px;
  border-radius:12px;
  color:white;
  cursor:pointer;
}

.approve-btn{
  background:#10b981;
}

.reject-btn{
  background:#ef4444;
}

.view-btn{
  background:#3b82f6;
}

/* BOTTOM */

.bottom-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:25px;
}

.activity-card,
.notice-card{
  background:white;
  border-radius:25px;
  padding:25px;
  box-shadow:0 8px 25px rgba(0,0,0,0.05);
}

.section-header{
  margin-bottom:20px;
}

.section-header h3{
  color:#d63384;
}

.activity-item{
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:20px;
}

.activity-icon{
  width:55px;
  height:55px;
  border-radius:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size:22px;
}

.green-bg{
  background:#10b981;
}

.pink-bg{
  background:#ff4d9d;
}

.orange-bg{
  background:#f59e0b;
}

/* NOTICE */

.notice-card{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
}

.notice-header{
  font-size:22px;
  font-weight:700;
  margin-bottom:18px;
}

/* QUICK ACTION CARD */

.notice-card{
  background:white;
  border-radius:25px;
  padding:25px;
  box-shadow:0 8px 25px rgba(0,0,0,0.05);
}

.notice-header{
  font-size:22px;
  font-weight:700;
  color:#d63384;

  display:flex;
  align-items:center;
  gap:10px;

  margin-bottom:25px;
}

/* GRID */

.quick-action-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:20px;
}

/* ITEM */

.quick-action-item{
  background:#fff1f7;

  border-radius:22px;

  height:150px;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  cursor:pointer;

  transition:0.3s;
}

.quick-action-item:hover{
  transform:translateY(-6px);
  background:#ffe4f1;
}

/* ICON */

.quick-action-item i{
  font-size:38px;
  color:#d63384;

  margin-bottom:18px;
}

/* TEXT */

.quick-action-item span{
  font-size:20px;
  font-weight:700;
  color:#d63384;
}

/* RESPONSIVE */

@media(max-width:1000px){

  .bottom-grid{
    grid-template-columns:1fr;
  }

}

@media(max-width:700px){

  .dashboard-title{
    font-size:26px;
  }

  .search-box{
    min-width:100%;
  }

  .stats-card{
    width:100%;
  }

}
.custom-table th:last-child,
.custom-table td:last-child{
  position: sticky;
  right: 0;
  z-index: 10;

  background: white;
  min-width: 160px;
}

.custom-table th:last-child{
  background:#ffe4f1;
  color:#d63384;
}

.custom-table td:last-child,
.custom-table th:last-child{
  box-shadow:-4px 0 10px rgba(0,0,0,0.08);
}


.custom-table td:last-child{
  display:flex;
  align-items:center;
  gap:10px;
}
</style>
```
