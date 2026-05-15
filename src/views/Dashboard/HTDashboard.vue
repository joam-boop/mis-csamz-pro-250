<template>
  <v-app>

    <DashboardSidebar />

    <v-main>
      
<div>
 

        <!-- TOP CARD -->
        <div class="welcome-card">

          <div>
            <h2>
              <i class="bi bi-person-circle"></i>
              Welcome {{ admin.firstName }} {{ admin.lastName }}
            </h2>

            <p class="subtitle">
              Head Teacher dashboard
            </p>
             
          </div>
         
            <!-- STATS -->
          <div class="stats">

            <div class="stat-box pending clickable" @click="showRequests('pending')">
 
              <i class="bi bi-hourglass-split"></i>
              <span>{{ pendingCount }}</span>
            </div>

            <div class="stat-box approved clickable" @click="showRequests('valid')">
              <i class="bi bi-check-circle-fill"></i>
              <span>{{ approvedCount }}</span>
            </div>

            <div class="stat-box rejected clickable"  @click="showRequests('invalid')">

              <i class="bi bi-x-circle-fill"></i>
              <span>{{ rejectedCount }}</span>
            </div>

          </div>

        </div>

        <!-- TABLE CARD -->
        <div class="table-card">

          <h3>
            <i class="bi bi-table"></i>
            Registration Requests
          </h3>
           <!-- FILTERED TABLE -->
<div
  class="table-card filtered-card"
  v-if="selectedStatus"
>

  <h3>

    <i class="bi bi-funnel-fill"></i>

    {{
      selectedStatus === 'pending'
      ? 'Pending Requests'

      : selectedStatus === 'valid'
      ? 'Approved Requests'

      : 'Rejected Requests'
    }}

  </h3>

  <div class="table-wrapper">

    <table class="custom-table">

      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Type</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr
          v-for="req in filteredRequests"
          :key="req.id"
        >

          <td>{{ req.firstName }}</td>
          <td>{{ req.lastName }}</td>
          <td>{{ req.type }}</td>
          <td>{{ req.email }}</td>
          <td>{{ req.phone }}</td>

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

        </tr>

      </tbody>

    </table>

  </div>

</div>

          <!-- SCROLL WRAPPER -->
          <div class="table-wrapper">

            <table class="custom-table">

              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Type</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="req in requests"
                  :key="req.id"
                >

                  <td>{{ req.firstName }}</td>

                  <td>{{ req.lastName }}</td>

                  <td>{{ req.type }}</td>

                  <td>{{ req.email }}</td>

                  <td>{{ req.phone }}</td>

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
 
      </div>

    </v-main>
    

  </v-app>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

import DashboardSidebar from
'../../components/common/DashboardSidebar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAttendance = () => {

  router.push('/attendance-management')

}
const goToAddMark =()=> {
  router.push(
    '/add-marks'
  )
}
const goToMessages = () => {

  router.push('/messages')

}
const goToReports = () => {

  router.push('/reports')

}
const admin = ref({})
const requests = ref([])

/* NEW */
const selectedStatus = ref(null)

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

  // LOGGED USER
  admin.value = JSON.parse(
    localStorage.getItem("loggedInUser")
  ) || {}

  // LOAD REQUESTS
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
      (
        u.email === req.email ||
        u.phone === req.phone
      )
  )

  if(!exists){

    users.push({

      firstName: req.firstName,
      lastName: req.lastName,

      email: req.email,
      phone: req.phone,

      password: req.password,

      role: req.role,

      registrationNumber:
        req.registrationNumber || null
    })

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    )
  }

  updateStorage()

  alert("Request Approved")
}

/* REJECT */
function reject(req){

  req.status = "invalid"

  updateStorage()

  alert("Request Rejected")
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

/* FILTERED REQUESTS */
const filteredRequests = computed(()=>{

  if(!selectedStatus.value){
    return []
  }

  return requests.value.filter(
    r => r.status === selectedStatus.value
  )
})

/* SHOW REQUESTS */
function showRequests(status){
  selectedStatus.value = status
}
</script>

<style scoped>
.menu-stats{
  display:flex;
  gap:15px;
  flex-wrap:wrap;

  margin-bottom:30px;
}

.menu-stats .stat-box{
  width:90px;
  height:90px;

  border-radius:18px;

  display:flex;
  flex-direction:column;

  justify-content:center;
  align-items:center;

  color:white;

  font-size:22px;
  font-weight:bold;

  cursor:pointer;
  transition:0.3s;
}

.menu-stats .stat-box i{
  font-size:22px;
  margin-bottom:5px;
}

.menu-stats .stat-box:hover{
  transform:translateY(-5px) scale(1.03)
}
.dashboard-container{
  padding:30px;
  background:#f4f7fb;
  min-height:100vh;
}

/* TOP CARD */
.welcome-card{
  background:white;
  padding:25px;
  border-radius:20px;
  box-shadow:0 5px 20px rgba(0,0,0,0.08);

  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;

  margin-bottom:30px;
}

.welcome-card h2{
  font-size:28px;
  font-weight:700;
  color:#0b2c4d;
}

.subtitle{
  color:gray;
  margin-top:5px;
}

/* STATS */
.stats{
  display:flex;
  gap:15px;
}

.stat-box{
  width:90px;
  height:90px;

  border-radius:18px;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  color:white;
  font-size:22px;
  font-weight:bold;
}

.pending{
  background:#ff9800;
}

.approved{
  background:#4caf50;
}

.rejected{
  background:#f44336;
}

/* TABLE CARD */
.table-card{
  background:white;
  padding:25px;
  border-radius:20px;
  box-shadow:0 5px 20px rgba(0,0,0,0.08);
}

/* TITLE */
.table-card h3{
  margin-bottom:20px;
  color:#0b2c4d;
  font-size:30px;
  text-align:center;
}

/* TABLE WRAPPER */
.table-wrapper{
  width:100%;
  overflow-x: auto;
  border-radius:15px;
}

/* TABLE */
.custom-table{
  width:100%;
  min-width:1200px;
  border-collapse:collapse;
}

/* HEADERS */
.custom-table th{
  background:#0b2c4d;
  color:white;
  padding:18px;
  white-space:nowrap;
  font-size:18px;
}

/* BODY */
.custom-table td{
  padding:18px;
  border-bottom:1px solid #ddd;
  text-align:center;
  white-space:nowrap;
  background:white;
}

/* FIXED ACTION COLUMN */
.custom-table th:last-child,
.custom-table td:last-child{
  position:sticky;
  right:0;
  background:white;
  z-index:2;
  min-width:170px;
}

/* HEADER ACTION FIX */
.custom-table th:last-child{
  background:#0b2c4d;
  color:white;
  z-index:3;
}

/* SHADOW */
.custom-table td:last-child{
  box-shadow:-5px 0 10px rgba(255,255,255,0.8);
}

/* STATUS */
.status-chip{
  padding:7px 15px;
  border-radius:30px;
  font-size:13px;
  font-weight:600;
  color:white;
}

.pending-chip{
  background:brown;
}

.approved-chip{
  background:#ff9800;
}

.rejected-chip{
  background:#f44336;
}

/* BUTTONS */
.approve-btn,
.reject-btn{
  border:none;
  padding:10px 14px;
  border-radius:10px;
  color:white;
  cursor:pointer;
  margin-right:5px;
  font-size:16px;
  transition:0.3s;
}

.approve-btn{
  background:#4caf50;
}

.reject-btn{
  background:#f44336;
}

.approve-btn:hover{
  transform:scale(1.05);
}

.reject-btn:hover{
  transform:scale(1.05);
}

/* MOBILE */
@media(max-width:768px){

  .dashboard-container{
    padding:15px;
  }

  .welcome-card{
    flex-direction:column;
    gap:20px;
    text-align:center;
  }

  .stats{
    justify-content:center;
  }

  .table-card h3{
    font-size:24px;
  }
}

/* CLICKABLE */
.clickable{
  cursor:pointer;
  transition:0.3s;
}

.clickable:hover{
  transform:translateY(-5px);
}

/* FILTERED TABLE */
.filtered-card{
  margin-top:30px;
}

</style>

