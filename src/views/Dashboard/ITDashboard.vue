```vue
<template>
 <v-app>
    <DashboardSidebar/>

    <v-main>
        <div class="it-dashboard">

            <!-- HEADER -->
            <div class="top-header">
                <div>
                    <h2 class="dashboard-title">
                        <i class="bi bi-cpu-fill"></i>
                        IT Dashboard
                    </h2>

                    <p class="dashboard-subtitle">
                        Monitor campus technology systems, cybersecurity,
                        network performance and digital infrastructure.
                    </p>
                </div>

                <div class="admin-profile">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt=""
                    />

                    <div>
                        <h4>IT Administrator</h4>
                        <span>System Operations</span>
                    </div>
                </div>
            </div>

            <!-- STATISTICS -->
            <div class="stats-grid">

                <div class="stat-card">
                    <div class="icon blue">
                        <i class="bi bi-pc-display"></i>
                    </div>

                    <div>
                        <h3>1,248</h3>
                        <p>Active Devices</p>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="icon green">
                        <i class="bi bi-shield-lock-fill"></i>
                    </div>

                    <div>
                        <h3>98%</h3>
                        <p>System Security</p>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="icon orange">
                        <i class="bi bi-wifi"></i>
                    </div>

                    <div>
                        <h3>99.9%</h3>
                        <p>Network Uptime</p>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="icon purple">
                        <i class="bi bi-server"></i>
                    </div>

                    <div>
                        <h3>24</h3>
                        <p>Running Servers</p>
                    </div>
                </div>

            </div>

            <!-- MAIN CONTENT -->
            <div class="content-grid">

                <!-- LEFT -->
                <div class="left-section">

                    <!-- SYSTEM STATUS -->
                    <div class="dashboard-card">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-bar-chart-fill"></i>
                                System Status
                            </h3>

                            <button>
                                View Report
                            </button>
                        </div>

                        <div class="status-list">

                            <div class="status-item">
                                <span>Database Server</span>

                                <div class="status-badge online">
                                    Online
                                </div>
                            </div>

                            <div class="status-item">
                                <span>Campus Wi-Fi</span>

                                <div class="status-badge online">
                                    Stable
                                </div>
                            </div>

                            <div class="status-item">
                                <span>Cloud Backup</span>

                                <div class="status-badge warning">
                                    Pending
                                </div>
                            </div>

                            <div class="status-item">
                                <span>Email Services</span>

                                <div class="status-badge online">
                                    Active
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- RECENT ACTIVITIES -->
                    <div class="dashboard-card">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-clock-history"></i>
                                Recent Activities
                            </h3>
                        </div>

                        <div class="activity-list">

                            <div class="activity-item">
                                <i class="bi bi-check-circle-fill success"></i>

                                <div>
                                    <h4>Software Updated</h4>
                                    <p>Computer Lab applications upgraded.</p>
                                </div>
                            </div>

                            <div class="activity-item">
                                <i class="bi bi-shield-fill-check success"></i>

                                <div>
                                    <h4>Security Scan Completed</h4>
                                    <p>No threats detected on servers.</p>
                                </div>
                            </div>

                            <div class="activity-item">
                                <i class="bi bi-exclamation-circle-fill danger"></i>

                                <div>
                                    <h4>Network Latency Alert</h4>
                                    <p>Minor delays detected in Block C.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- RIGHT -->
                <div class="right-section">

                    <!-- QUICK ACTIONS -->
                    <div class="dashboard-card">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-lightning-charge-fill"></i>
                                Quick Actions
                            </h3>
                        </div>

                        <div class="quick-actions">

                            <button class="action-btn">
                                <i class="bi bi-person-plus-fill"></i>
                                Add User
                            </button>

                            <button class="action-btn">
                                <i class="bi bi-cloud-arrow-up-fill"></i>
                                Backup Data
                            </button>

                            <button class="action-btn">
                                <i class="bi bi-arrow-repeat"></i>
                                Restart Server
                            </button>

                            <button class="action-btn">
                                <i class="bi bi-shield-lock-fill"></i>
                                Security Check
                            </button>

                        </div>
                    </div>

                    <!-- TEAM MEMBERS -->
                    <div class="dashboard-card">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-people-fill"></i>
                                IT Team
                            </h3>
                        </div>

                        <div class="team-list">

                            <div class="team-member">
                                <img
                                    src="https://i.pravatar.cc/60?img=12"
                                    alt=""
                                />

                                <div>
                                    <h4>David Mike</h4>
                                    <p>Network Engineer</p>
                                </div>
                            </div>

                            <div class="team-member">
                                <img
                                    src="https://i.pravatar.cc/60?img=32"
                                    alt=""
                                />

                                <div>
                                    <h4>Sarah Bella</h4>
                                    <p>Cybersecurity Analyst</p>
                                </div>
                            </div>

                            <div class="team-member">
                                <img
                                    src="https://i.pravatar.cc/60?img=45"
                                    alt=""
                                />

                                <div>
                                    <h4>Kevin John</h4>
                                    <p>System Administrator</p>
                                </div>
                            </div>

                        </div>
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

.it-dashboard{
    padding: 30px;
    background: #fff0f6;
    min-height: 100vh;
}

/* HEADER */

.top-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 20px;
}

.dashboard-title{
    font-size: 32px;
    font-weight: 800;
    color: #c2185b;
    margin-bottom: 8px;
}

.dashboard-subtitle{
    color: #6d6d6d;
    font-size: 15px;
}

.admin-profile{
    background: white;
    padding: 15px 20px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 6px 18px rgba(255, 105, 180, 0.15);
}

.admin-profile img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
}

/* STATS */

.stats-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card{
    background: white;
    padding: 22px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0 8px 20px rgba(255, 105, 180, 0.12);
    transition: 0.3s;
}

.stat-card:hover{
    transform: translateY(-5px);
}

.icon{
    width: 65px;
    height: 65px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
}

.blue{
    background: linear-gradient(135deg,#42a5f5,#1e88e5);
}

.green{
    background: linear-gradient(135deg,#66bb6a,#43a047);
}

.orange{
    background: linear-gradient(135deg,#ffa726,#fb8c00);
}

.purple{
    background: linear-gradient(135deg,#ab47bc,#8e24aa);
}

/* CONTENT */

.content-grid{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
}

.dashboard-card{
    background: white;
    border-radius: 22px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 8px 20px rgba(255, 105, 180, 0.12);
}

.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.card-header h3{
    color: #c2185b;
    font-size: 22px;
}

.card-header button{
    border: none;
    background: #ec407a;
    color: white;
    padding: 10px 18px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
}

/* STATUS */

.status-list{
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.status-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.status-badge{
    padding: 8px 15px;
    border-radius: 30px;
    color: white;
    font-size: 13px;
    font-weight: 700;
}

.online{
    background: #43a047;
}

.warning{
    background: #fb8c00;
}

/* ACTIVITIES */

.activity-list{
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.activity-item{
    display: flex;
    gap: 15px;
    align-items: flex-start;
}

.activity-item i{
    font-size: 24px;
}

.success{
    color: #43a047;
}

.danger{
    color: #e53935;
}

/* QUICK ACTIONS */

.quick-actions{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
}

.action-btn{
    border: none;
    background: #fce4ec;
    padding: 18px;
    border-radius: 16px;
    color: #c2185b;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
}

.action-btn:hover{
    background: #f8bbd0;
    transform: scale(1.03);
}

.action-btn i{
    font-size: 28px;
}

/* TEAM */

.team-list{
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.team-member{
    display: flex;
    align-items: center;
    gap: 15px;
}

.team-member img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
}

@media(max-width:900px){

    .content-grid{
        grid-template-columns: 1fr;
    }

    .top-header{
        flex-direction: column;
        align-items: flex-start;
    }

}

</style>
```
