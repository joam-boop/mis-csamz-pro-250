```vue
<template>
  <v-app>

    <DashboardSidebar />

    <v-main class="message-dashboard">

      <div class="dashboard-container">

        <!-- TOP HEADER -->

        <div class="top-header">

          <div>
            <h1 class="dashboard-title">
              <i class="bi bi-chat-left-text-fill"></i>
              Communication Center
            </h1>

            <p class="dashboard-subtitle">
              Manage announcements, staff communication, inbox messages and internal reports.
            </p>
          </div>

          <div class="header-actions">

            <button class="header-btn compose-btn">
              <i class="bi bi-pencil-square"></i>
              Compose Message
            </button>

            <button class="header-btn announce-btn">
              <i class="bi bi-megaphone-fill"></i>
              New Announcement
            </button>

          </div>

        </div>


        <!-- TOP CARDS -->

        <div class="stats-grid">

          <div class="stats-card pink">
            <div class="stats-icon">
              <i class="bi bi-envelope-fill"></i>
            </div>

            <div>
              <h2>248</h2>
              <p>Total Messages</p>
            </div>
          </div>

          <div class="stats-card purple">
            <div class="stats-icon">
              <i class="bi bi-inbox-fill"></i>
            </div>

            <div>
              <h2>48</h2>
              <p>Inbox</p>
            </div>
          </div>

          <div class="stats-card blue">
            <div class="stats-icon">
              <i class="bi bi-send-fill"></i>
            </div>

            <div>
              <h2>124</h2>
              <p>Sent Messages</p>
            </div>
          </div>

          <div class="stats-card orange">
            <div class="stats-icon">
              <i class="bi bi-megaphone-fill"></i>
            </div>

            <div>
              <h2>12</h2>
              <p>Announcements</p>
            </div>
          </div>

        </div>


        <!-- MAIN GRID -->

        <div class="main-grid">

          <!-- LEFT SECTION -->

          <div class="left-section">

            <!-- MESSAGE MENU -->

            <div class="card-box sidebar-card">

              <button class="menu-btn active-menu">
                <i class="bi bi-inbox-fill"></i>
                Inbox
                <span>48</span>
              </button>

              <button class="menu-btn">
                <i class="bi bi-send-fill"></i>
                Sent
                <span>124</span>
              </button>

              <button class="menu-btn">
                <i class="bi bi-file-earmark-fill"></i>
                Draft
                <span>15</span>
              </button>

              <button class="menu-btn">
                <i class="bi bi-megaphone-fill"></i>
                Announcement
                <span>12</span>
              </button>

              <button class="menu-btn">
                <i class="bi bi-trash-fill"></i>
                Trash
                <span>4</span>
              </button>

            </div>


            <!-- MESSAGE LIST -->

            <div class="card-box">

              <div class="card-header">

                <div>
                  <h3>
                    <i class="bi bi-envelope-open-fill"></i>
                    Recent Messages
                  </h3>

                  <p>Latest communication between admin and staff.</p>
                </div>

                <button class="filter-btn">
                  <i class="bi bi-funnel-fill"></i>
                  Filter
                </button>

              </div>


              <!-- MESSAGE ITEM -->

              <div class="message-item unread">

                <div class="message-avatar pink-avatar">
                  A
                </div>

                <div class="message-content">

                  <div class="message-top">
                    <h4>Admin Office</h4>
                    <span>2 min ago</span>
                  </div>

                  <p>
                    Meeting scheduled for all teachers tomorrow at 8:00 AM in conference hall.
                  </p>

                </div>

              </div>


              <div class="message-item">

                <div class="message-avatar purple-avatar">
                  H
                </div>

                <div class="message-content">

                  <div class="message-top">
                    <h4>Head Teacher</h4>
                    <span>15 min ago</span>
                  </div>

                  <p>
                    Please submit all CAT marks before Friday evening.
                  </p>

                </div>

              </div>


              <div class="message-item">

                <div class="message-avatar blue-avatar">
                  D
                </div>

                <div class="message-content">

                  <div class="message-top">
                    <h4>DOS Office</h4>
                    <span>1 hour ago</span>
                  </div>

                  <p>
                    Updated class attendance reports are now available.
                  </p>

                </div>

              </div>


              <div class="message-item">

                <div class="message-avatar orange-avatar">
                  I
                </div>

                <div class="message-content">

                  <div class="message-top">
                    <h4>IT Department</h4>
                    <span>Today</span>
                  </div>

                  <p>
                    MIS system maintenance scheduled tonight from 10 PM.
                  </p>

                </div>

              </div>

            </div>

          </div>


          <!-- RIGHT SECTION -->

          <div class="right-section">

            <!-- ANNOUNCEMENT CARD -->

            <div class="card-box announcement-card">

              <div class="announcement-header">

                <i class="bi bi-megaphone-fill"></i>

                <div>
                  <h3>School Announcement</h3>
                  <p>Important academic update</p>
                </div>

              </div>

              <div class="announcement-content">

                <h2>
                  End of Term Examination
                </h2>

                <p>
                  All departments are required to finalize examination records before next Monday.
                </p>

              </div>

              <button class="announcement-btn">
                View Details
              </button>

            </div>


            <!-- QUICK ACTIONS -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-lightning-fill"></i>
                  Quick Actions
                </h3>
              </div>

              <div class="quick-grid">

                <button class="quick-btn">
                  <i class="bi bi-envelope-paper-fill"></i>
                  Send Staff Message
                </button>

                <button class="quick-btn">
                  <i class="bi bi-broadcast-pin"></i>
                  Broadcast Notice
                </button>

                <button class="quick-btn">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  Generate Report
                </button>

                <button class="quick-btn">
                  <i class="bi bi-cloud-arrow-up-fill"></i>
                  Backup Messages
                </button>

              </div>

            </div>


            <!-- ONLINE STAFF -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-people-fill"></i>
                  Active Staff
                </h3>
              </div>

              <div class="staff-item">
                <div class="staff-left">
                  <div class="staff-avatar">J</div>
                  <div>
                    <h4>Maniriho Eduard</h4>
                    <p> vue js Teacher</p>
                  </div>
                </div>

                <span class="online-status"></span>
              </div>


              <div class="staff-item">
                <div class="staff-left">
                  <div class="staff-avatar">M</div>
                  <div>
                    <h4>Tuyishimire Hyacentha</h4>
                    <p>School logistic</p>
                  </div>
                </div>

                <span class="online-status"></span>
              </div>


              <div class="staff-item">
                <div class="staff-left">
                  <div class="staff-avatar">D</div>
                  <div>
                    <h4>Bisimwa Kununishali Pascal</h4>
                    <p>Head Teacher</p>
                  </div>
                </div>

                <span class="online-status"></span>
              </div>

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

.message-dashboard{
  background:#fff6fb;
  min-height:100vh;
}

.dashboard-container{
  padding:30px;
}

.top-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:30px;
}

.dashboard-title{
  font-size:34px;
  color:#d63384;
  font-weight:700;
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
  padding:13px 20px;
  border-radius:14px;
  font-weight:600;
  cursor:pointer;
}

.compose-btn{
  background:#fff0f6;
  color:#d63384;
}

.announce-btn{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
}

.stats-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stats-card{
  border-radius:22px;
  padding:25px;
  display:flex;
  align-items:center;
  gap:20px;
  color:white;
}

.stats-icon{
  width:65px;
  height:65px;
  border-radius:18px;
  background:rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:28px;
}

.pink{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
}

.purple{
  background:linear-gradient(135deg,#7c3aed,#a78bfa);
}

.blue{
  background:linear-gradient(135deg,#2563eb,#60a5fa);
}

.orange{
  background:linear-gradient(135deg,#f97316,#fdba74);
}

.main-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:25px;
}

.card-box{
  background:white;
  border-radius:24px;
  padding:25px;
  margin-bottom:25px;
  box-shadow:0 6px 20px rgba(0,0,0,0.05);
}

.sidebar-card{
  display:flex;
  flex-direction:column;
  gap:15px;
}

.menu-btn{
  border:none;
  background:#fff0f6;
  color:#d63384;
  padding:16px;
  border-radius:14px;
  font-weight:600;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
}

.active-menu{
  background:#d63384;
  color:white;
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
}

.card-header h3{
  color:#d63384;
}

.filter-btn{
  border:none;
  background:#fff0f6;
  color:#d63384;
  padding:10px 16px;
  border-radius:10px;
  cursor:pointer;
}

.message-item{
  display:flex;
  gap:18px;
  padding:18px;
  border-radius:18px;
  margin-bottom:18px;
  border:1px solid #f4f4f4;
}

.unread{
  background:#fff0f6;
}

.message-avatar{
  width:55px;
  height:55px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-weight:700;
}

.pink-avatar{
  background:#ff4d9d;
}

.purple-avatar{
  background:#7c3aed;
}

.blue-avatar{
  background:#2563eb;
}

.orange-avatar{
  background:#f97316;
}

.message-content{
  flex:1;
}

.message-top{
  display:flex;
  justify-content:space-between;
  margin-bottom:8px;
}

.message-top h4{
  color:#222;
}

.message-top span{
  color:#999;
  font-size:13px;
}

.message-content p{
  color:#666;
  line-height:1.6;
}

.announcement-card{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
}

.announcement-header{
  display:flex;
  gap:15px;
  align-items:center;
  margin-bottom:20px;
}

.announcement-header i{
  font-size:32px;
}

.announcement-content h2{
  margin-bottom:12px;
}

.announcement-btn{
  margin-top:20px;
  border:none;
  background:white;
  color:#d63384;
  padding:12px 18px;
  border-radius:12px;
  font-weight:600;
  cursor:pointer;
}

.quick-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

.quick-btn{
  border:none;
  background:#fff0f6;
  color:#d63384;
  padding:20px;
  border-radius:18px;
  font-weight:600;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.quick-btn i{
  font-size:25px;
}

.staff-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.staff-left{
  display:flex;
  gap:15px;
  align-items:center;
}

.staff-avatar{
  width:50px;
  height:50px;
  border-radius:50%;
  background:#ff4d9d;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:700;
}

.online-status{
  width:14px;
  height:14px;
  background:#10b981;
  border-radius:50%;
}

@media(max-width:1000px){

  .main-grid{
    grid-template-columns:1fr;
  }

}

@media(max-width:700px){

  .dashboard-title{
    font-size:25px;
  }

  .header-actions{
    width:100%;
    flex-wrap:wrap;
  }

}
</style>
```
