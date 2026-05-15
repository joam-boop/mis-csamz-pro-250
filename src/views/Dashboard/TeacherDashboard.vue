```vue
<template>
  <v-app>
    <DashboardSidebar />

    <v-main class="teacher-dashboard">
      <div class="dashboard-container">

        <!-- TOP HEADER -->
        <div class="top-header">
          <div>
            <h1 class="page-title">
              <i class="bi bi-mortarboard-fill"></i>
              Teacher Dashboard
            </h1>

            <p class="subtitle">
              Welcome back, manage classes, students and reports easily.
            </p>
          </div>

          <button class="profile-btn">
            <i class="bi bi-person-circle"></i>
            My Profile
          </button>
        </div>

        <!-- STATISTICS -->
        <div class="stats-grid">

          <div class="stat-card pink-card">
            <div class="icon-box">
              <i class="bi bi-people-fill"></i>
            </div>

            <div>
              <h2>1,240</h2>
              <p>Total Students</p>
            </div>
          </div>

          <div class="stat-card purple-card">
            <div class="icon-box">
              <i class="bi bi-journal-bookmark-fill"></i>
            </div>

            <div>
              <h2>18</h2>
              <p>Subjects</p>
            </div>
          </div>

          <div class="stat-card blue-card">
            <div class="icon-box">
              <i class="bi bi-calendar-check-fill"></i>
            </div>

            <div>
              <h2>95%</h2>
              <p>Attendance</p>
            </div>
          </div>

          <div class="stat-card orange-card">
            <div class="icon-box">
              <i class="bi bi-file-earmark-text-fill"></i>
            </div>

            <div>
              <h2>32</h2>
              <p>Reports</p>
            </div>
          </div>

        </div>

        <!-- MAIN CONTENT -->
        <div class="content-grid">

          <!-- LEFT -->
          <div class="left-section">

            <!-- TODAY SCHEDULE -->
            <div class="card-box">
              <div class="card-header">
                <h3>
                  <i class="bi bi-clock-history"></i>
                  Today's Schedule
                </h3>

                <button class="view-btn">
                  View All
                </button>
              </div>

              <div class="schedule-item">
                <div class="subject math">
                  Game in vue
                </div>

                <div class="schedule-info">
                  <h4>l3 sod</h4>
                  <p>08:00 AM - 09:30 AM</p>
                </div>
              </div>

              <div class="schedule-item">
                <div class="subject science">
                  react js
                </div>

                <div class="schedule-info">
                  <h4>l4 sod</h4>
                  <p>10:00 AM - 11:30 AM</p>
                </div>
              </div>

              <div class="schedule-item">
                <div class="subject english">
                  blockchain
                </div>

                <div class="schedule-info">
                  <h4>l5 sod</h4>
                  <p>01:00 PM - 02:00 PM</p>
                </div>
              </div>
            </div>

            <!-- RECENT ACTIVITY -->
            <div class="card-box">
              <div class="card-header">
                <h3>
                  <i class="bi bi-activity"></i>
                  Recent Activity
                </h3>
              </div>

              <div class="activity-item">
                <i class="bi bi-check-circle-fill success"></i>
                <p>Marks uploaded successfully.</p>
              </div>

              <div class="activity-item">
                <i class="bi bi-person-plus-fill primary"></i>
                <p>New student joined l3 sod.</p>
              </div>

              <div class="activity-item">
                <i class="bi bi-file-earmark-bar-graph-fill warning"></i>
                <p>Monthly report generated.</p>
              </div>
            </div>

          </div>

          <!-- RIGHT -->
          <div class="right-section">

            <!-- QUICK ACTIONS -->
            <div class="card-box">
              <div class="card-header">
                <h3>
                  <i class="bi bi-lightning-charge-fill"></i>
                  Quick Actions
                </h3>
              </div>

              <div class="action-grid">

                <button class="action-btn" @click="goToAddMark">
                  <i class="bi bi-plus-circle-fill"></i>
                  Add Marks
                </button>

                <button class="action-btn"  @click="goToAttendance">
                  <i class="bi bi-calendar2-check-fill"></i>
                  Attendance
                </button>

                <button class="action-btn" @click="goToReports" >
                  <i class="bi bi-file-earmark-text-fill"></i>
                  Reports
                </button>

                <button class="action-btn" @click="goToMessages" >
                  <i class="bi bi-chat-dots-fill"></i>
                  Messages
                </button>

              </div>
            </div>

            <!-- ANNOUNCEMENTS -->
            <div class="card-box">
              <div class="card-header">
                <h3>
                  <i class="bi bi-megaphone-fill"></i>
                  Announcements
                </h3>
              </div>

              <div class="announcement">
                <p>
                  Mid-term exams start next week Monday.
                </p>
              </div>

              <div class="announcement">
                <p>
                  Staff meeting scheduled on Friday at 2 PM.
                </p>
              </div>

              <div class="announcement">
                <p>
                  Upload all marks before deadline.
                </p>
              </div>

            </div>

          </div>

        </div>
       

      </div>
    </v-main>
  </v-app>
</template>

<script setup>

import { ref } from 'vue'

import DashboardSidebar from '../../components/common/DashboardSidebar.vue'

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
</script>

<style scoped>

.teacher-dashboard{
  background:#fff5f8;
  min-height:100vh;
}

.dashboard-container{
  padding:30px;
}

/* HEADER */

.top-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  margin-bottom:30px;
}

.page-title{
  font-size:32px;
  font-weight:700;
  color:#d63384;
  margin-bottom:5px;
}

.subtitle{
  color:#777;
  font-size:15px;
}

.profile-btn{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  border:none;
  color:white;
  padding:12px 22px;
  border-radius:12px;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
  box-shadow:0 5px 15px rgba(255,105,180,0.3);
}

.profile-btn:hover{
  transform:translateY(-2px);
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stat-card{
  padding:25px;
  border-radius:20px;
  color:white;
  display:flex;
  align-items:center;
  gap:20px;
  box-shadow:0 8px 20px rgba(0,0,0,0.08);
}

.stat-card h2{
  font-size:28px;
  margin:0;
}

.stat-card p{
  margin:0;
  opacity:0.9;
}

.icon-box{
  width:65px;
  height:65px;
  border-radius:18px;
  background:rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:28px;
}

.pink-card{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
}

.purple-card{
  background:linear-gradient(135deg,#7b61ff,#9b7bff);
}

.blue-card{
  background:linear-gradient(135deg,#36a2ff,#63c7ff);
}

.orange-card{
  background:linear-gradient(135deg,#ff8a3d,#ffb36b);
}

/* CONTENT */

.content-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:25px;
}

.card-box{
  background:white;
  border-radius:20px;
  padding:25px;
  margin-bottom:25px;
  box-shadow:0 5px 20px rgba(0,0,0,0.06);
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.card-header h3{
  color:#d63384;
  font-size:20px;
}

.view-btn{
  border:none;
  background:#ffe0ec;
  color:#d63384;
  padding:8px 15px;
  border-radius:10px;
  cursor:pointer;
  font-weight:600;
}

/* SCHEDULE */

.schedule-item{
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:18px;
  padding-bottom:15px;
  border-bottom:1px solid #f1f1f1;
}

.subject{
  min-width:100px;
  text-align:center;
  padding:10px;
  border-radius:10px;
  font-weight:600;
  color:white;
}

.math{
  background:#ff4d9d;
}

.science{
  background:#7b61ff;
}

.english{
  background:#36a2ff;
}

.schedule-info h4{
  margin:0;
  color:#333;
}

.schedule-info p{
  margin:5px 0 0;
  color:#777;
}

/* ACTIVITY */

.activity-item{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:18px;
  color:#555;
}

.activity-item i{
  font-size:22px;
}

.success{
  color:#28c76f;
}

.primary{
  color:#7367f0;
}

.warning{
  color:#ff9f43;
}

/* ACTIONS */

.action-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

.action-btn{
  border:none;
  background:#fff0f6;
  padding:18px;
  border-radius:15px;
  color:#d63384;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;

  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.action-btn i{
  font-size:24px;
}

.action-btn:hover{
  background:#d63384;
  color:white;
  transform:translateY(-3px);
}

/* ANNOUNCEMENT */

.announcement{
  background:#fff5fa;
  padding:15px;
  border-radius:12px;
  margin-bottom:15px;
  border-left:5px solid #ff4d9d;
}

.announcement p{
  margin:0;
  color:#555;
}

/* RESPONSIVE */

@media(max-width:950px){

  .content-grid{
    grid-template-columns:1fr;
  }

}

@media(max-width:600px){

  .page-title{
    font-size:24px;
  }

  .top-header{
    gap:15px;
  }

}

</style>
```
