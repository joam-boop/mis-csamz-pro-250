```vue
<template>
  <v-app>
    <DashboardSidebar />

    <v-main class="student-dashboard">

      <div class="dashboard-container">

        <!-- HEADER -->
        <div class="top-header">

          <div>
            <h1 class="page-title">
              <i class="bi bi-person-workspace"></i>
              Student Dashboard
            </h1>

            <p class="subtitle">
              Welcome back student, track your studies and activities easily.
            </p>
          </div>

          <button class="student-btn">
            <i class="bi bi-person-circle"></i>
            My Profile
          </button>

        </div>

        <!-- TOP STATS -->
        <div class="stats-grid">

          <div class="stat-card pink-card">
            <div class="icon-box">
              <i class="bi bi-journal-richtext"></i>
            </div>

            <div>
              <h2>8</h2>
              <p>Subjects</p>
            </div>
          </div>

          <div class="stat-card purple-card">
            <div class="icon-box">
              <i class="bi bi-clipboard-check-fill"></i>
            </div>

            <div>
              <h2>92%</h2>
              <p>Attendance</p>
            </div>
          </div>

          <div class="stat-card blue-card">
            <div class="icon-box">
              <i class="bi bi-award-fill"></i>
            </div>

            <div>
              <h2>A</h2>
              <p>Average Grade</p>
            </div>
          </div>

          <div class="stat-card orange-card">
            <div class="icon-box">
              <i class="bi bi-bell-fill"></i>
            </div>

            <div>
              <h2>5</h2>
              <p>Notifications</p>
            </div>
          </div>

        </div>

        <!-- MAIN CONTENT -->
        <div class="content-grid">

          <!-- LEFT -->
          <div class="left-section">

            <!-- TODAY CLASSES -->
            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-calendar2-week-fill"></i>
                  Today's Classes
                </h3>

                <button class="view-btn">
                  View All
                </button>
              </div>

              <div class="class-item">
                <div class="subject math">
                  vue 
                </div>

                <div class="class-info">
                  <h4>vue js framework</h4>
                  <p>08:00 AM - 09:30 AM</p>
                </div>
              </div>

              <div class="class-item">
                <div class="subject science">
                  java
                </div>

                <div class="class-info">
                  <h4>javascript</h4>
                  <p>10:00 AM - 11:00 AM</p>
                </div>
              </div>

              <div class="class-item">
                <div class="subject english">
                  web
                </div>

                <div class="class-info">
                  <h4>website development</h4>
                  <p>01:00 PM - 02:00 PM</p>
                </div>
              </div>

            </div>

            <!-- ASSIGNMENTS -->
            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-book-half"></i>
                  Assignments
                </h3>
              </div>

              <div class="assignment-item">
                <div>
                  <h4>UX/UI DESIGN Quiz</h4>
                  <p>Due Tomorrow</p>
                </div>

                <span class="pending">
                  Pending
                </span>
              </div>

              <div class="assignment-item">
                <div>
                  <h4>project research</h4>
                  <p>Due Friday</p>
                </div>

                <span class="progress">
                  In Progress
                </span>
              </div>

              <div class="assignment-item">
                <div>
                  <h4>javascript assessment</h4>
                  <p>Completed</p>
                </div>

                <span class="done">
                  Done
                </span>
              </div>

            </div>

            <!-- RECENT RESULTS -->
            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-bar-chart-fill"></i>
                  Recent Results
                </h3>
              </div>

              <div class="result-item">
                <span>javascript Test</span>
                <strong>A</strong>
              </div>

              <div class="result-item">
                <span>website development Quiz</span>
                <strong>B+</strong>
              </div>

              <div class="result-item">
                <span>vue js CAT</span>
                <strong>A-</strong>
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

                <button class="action-btn">
                  <i class="bi bi-upload"></i>
                  Submit Work
                </button>

                <button class="action-btn">
                  <i class="bi bi-book"></i>
                  My Courses
                </button>

                <button class="action-btn">
                  <i class="bi bi-calendar-check"></i>
                  Attendance
                </button>

                <button class="action-btn">
                  <i class="bi bi-chat-dots-fill"></i>
                  Messages
                </button>

              </div>

            </div>

            <!-- SCHOOL NOTICE -->
            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-megaphone-fill"></i>
                  School Notices
                </h3>
              </div>

              <div class="notice">
                <p>
                  Mid-term exams begin next week.
                </p>
              </div>

              <div class="notice">
                <p>
                  Friday is sports and talent day.
                </p>
              </div>

              <div class="notice">
                <p>
                  Remember to submit assignments on time.
                </p>
              </div>

            </div>

            <!-- MOTIVATION -->
            <div class="motivation-card">

              <i class="bi bi-stars"></i>

              <h3>
                Keep Working Hard
              </h3>

              <p>
                Success comes from consistency and discipline.
              </p>

            </div>

          </div>

        </div>

      </div>

    </v-main>
  </v-app>
</template>

<script setup>
import DashboardSidebar from '../../components/common/DashboardSidebar.vue'
</script>

<style scoped>

.student-dashboard{
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
  font-size:34px;
  font-weight:700;
  color:#d63384;
  margin-bottom:5px;
}

.subtitle{
  color:#777;
  font-size:15px;
}

.student-btn{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
  border:none;
  padding:12px 22px;
  border-radius:14px;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
  box-shadow:0 8px 20px rgba(255,105,180,0.3);
}

.student-btn:hover{
  transform:translateY(-3px);
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stat-card{
  border-radius:22px;
  padding:25px;
  display:flex;
  align-items:center;
  gap:20px;
  color:white;
  box-shadow:0 8px 20px rgba(0,0,0,0.08);
}

.stat-card h2{
  font-size:30px;
  margin:0;
}

.stat-card p{
  margin:0;
  opacity:0.9;
}

.icon-box{
  width:70px;
  height:70px;
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
  background:linear-gradient(135deg,#7b61ff,#9f7bff);
}

.blue-card{
  background:linear-gradient(135deg,#36a2ff,#69c6ff);
}

.orange-card{
  background:linear-gradient(135deg,#ff914d,#ffbe7b);
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
  background:#ffe0ec;
  border:none;
  color:#d63384;
  padding:8px 15px;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
}

/* CLASSES */

.class-item{
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:18px;
  padding-bottom:15px;
  border-bottom:1px solid #f1f1f1;
}

.subject{
  min-width:80px;
  text-align:center;
  padding:10px;
  border-radius:10px;
  color:white;
  font-weight:600;
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

.class-info h4{
  margin:0;
  color:#333;
}

.class-info p{
  margin-top:5px;
  color:#777;
}

/* ASSIGNMENTS */

.assignment-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:18px;
  padding-bottom:15px;
  border-bottom:1px solid #f3f3f3;
}

.assignment-item h4{
  margin:0;
  color:#333;
}

.assignment-item p{
  margin-top:5px;
  color:#777;
}

.pending,
.progress,
.done{
  padding:7px 12px;
  border-radius:30px;
  font-size:13px;
  font-weight:600;
}

.pending{
  background:#ffe5ec;
  color:#ff4d9d;
}

.progress{
  background:#ece7ff;
  color:#7b61ff;
}

.done{
  background:#ddfff0;
  color:#00a86b;
}

/* RESULTS */

.result-item{
  display:flex;
  justify-content:space-between;
  margin-bottom:15px;
  padding:15px;
  background:#fff5fa;
  border-radius:12px;
}

.result-item strong{
  color:#d63384;
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
  border-radius:16px;
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

/* NOTICE */

.notice{
  background:#fff5fa;
  border-left:5px solid #ff4d9d;
  padding:15px;
  border-radius:12px;
  margin-bottom:15px;
}

.notice p{
  margin:0;
  color:#555;
}

/* MOTIVATION */

.motivation-card{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
  border-radius:22px;
  padding:30px;
  text-align:center;
  box-shadow:0 8px 25px rgba(255,105,180,0.3);
}

.motivation-card i{
  font-size:45px;
  margin-bottom:15px;
}

.motivation-card h3{
  margin-bottom:10px;
}

/* RESPONSIVE */

@media(max-width:950px){

  .content-grid{
    grid-template-columns:1fr;
  }

}

@media(max-width:600px){

  .page-title{
    font-size:26px;
  }

  .top-header{
    gap:15px;
  }

}

</style>
```
