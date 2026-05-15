<template>
<v-app>
    <DashboardSidebar/>

    <v-main>
        <div class="dod-dashboard">

            <!-- HEADER -->
            <div class="top-section">
                <div>
                    <h1 class="dashboard-title">
                        <i class="bi bi-mortarboard-fill"></i>
                        DOD Dashboard
                    </h1>

                    <p class="dashboard-subtitle">
                        Director Of Discipline management and monitoring system
                    </p>
                </div>

                <div class="profile-box">
                    <i class="bi bi-person-badge-fill"></i>
                    <span>DOD Panel</span>
                </div>
            </div>

            <!-- STATISTICS -->
            <div class="stats-grid">

                <div class="stat-card">
                    <div class="icon pink">
                        <i class="bi bi-people-fill"></i>
                    </div>

                    <div>
                        <h2>1,245</h2>
                        <p>Total Students</p>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="icon purple">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </div>

                    <div>
                        <h2>86</h2>
                        <p>Discipline Cases</p>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="icon blue">
                        <i class="bi bi-check-circle-fill"></i>
                    </div>

                    <div>
                        <h2>97%</h2>
                        <p>Attendance Rate</p>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="icon orange">
                        <i class="bi bi-shield-check"></i>
                    </div>

                    <div>
                        <h2>24</h2>
                        <p>Resolved Cases</p>
                    </div>
                </div>

            </div>

            <!-- MAIN CONTENT -->
            <div class="content-grid">

                <!-- LEFT -->
                <div class="left-section">

                    <div class="card-box">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-clock-history"></i>
                                Recent Discipline Activities
                            </h3>
                        </div>

                        <div class="activity-item">
                            <div class="activity-icon bg1">
                                <i class="bi bi-person-x-fill"></i>
                            </div>

                            <div>
                                <h4>Late Attendance Report</h4>
                                <p>15 students reported late this morning</p>
                            </div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-icon bg2">
                                <i class="bi bi-journal-check"></i>
                            </div>

                            <div>
                                <h4>Weekly Inspection</h4>
                                <p>Uniform inspection completed successfully</p>
                            </div>
                        </div>

                        <div class="activity-item">
                            <div class="activity-icon bg3">
                                <i class="bi bi-shield-fill-check"></i>
                            </div>

                            <div>
                                <h4>Discipline Improvement</h4>
                                <p>Overall discipline increased by 12%</p>
                            </div>
                        </div>

                    </div>

                    <div class="card-box">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-bar-chart-fill"></i>
                                Discipline Performance
                            </h3>
                        </div>

                        <div class="progress-section">

                            <div class="progress-item">
                                <div class="progress-text">
                                    <span>Attendance</span>
                                    <span>97%</span>
                                </div>

                                <div class="progress-bar">
                                    <div class="progress-fill fill1"></div>
                                </div>
                            </div>

                            <div class="progress-item">
                                <div class="progress-text">
                                    <span>Uniform Compliance</span>
                                    <span>90%</span>
                                </div>

                                <div class="progress-bar">
                                    <div class="progress-fill fill2"></div>
                                </div>
                            </div>

                            <div class="progress-item">
                                <div class="progress-text">
                                    <span>Behavior Score</span>
                                    <span>85%</span>
                                </div>

                                <div class="progress-bar">
                                    <div class="progress-fill fill3"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- RIGHT -->
                <div class="right-section">

                    <div class="card-box quick-actions">
                        <!-- QUICK ACTIONS -->
            <div class="card-box quick-actions">
                <div class="card-header">
                    <h3>
                        <i class="bi bi-lightning-fill"></i>
                        Quick Actions
                    </h3>
                </div>

                <button class="action-btn" @click="addDisciplineCase">
                    <i class="bi bi-plus-circle-fill"></i>
                    Add Discipline Case
                </button>

                <button class="action-btn" @click="generateReport">
                    <i class="bi bi-file-earmark-text-fill"></i>
                    Generate Report
                </button>

                <button class="action-btn" @click="openStudentRecords">
                    <i class="bi bi-person-lines-fill"></i>
                    Student Records
                </button>

                <button class="action-btn" @click="sendNotifications">
                    <i class="bi bi-envelope-fill"></i>
                    Send Notifications
                </button>
                    </div>
                     <!-- MODAL -->
      <div v-if="showAddCaseModal" class="modal-overlay">
        <div class="modal-box">
          <h3>Add Discipline Case</h3>

          <form @submit.prevent="submitCase">
            <label class="j">Student Name:</label>
            <input v-model="newCase.student" required />

            <label class="j">Issue:</label>
            <input v-model="newCase.issue" required>

            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <p v-if="successMessage" class="success">{{ successMessage }}</p>

            <div class="modal-actions">
              <button type="submit" :disabled="loading">
                {{ loading ? 'Saving...' : 'Save' }}
              </button>
              <button type="button" @click="showAddCaseModal = false">Cancel</button>
            </div>
          </form>
        </div>
      </div>

                    <div class="card-box">
                        <div class="card-header">
                            <h3>
                                <i class="bi bi-calendar-event-fill"></i>
                                Upcoming Activities
                            </h3>
                        </div>

                        <div class="event-item">
                            <i class="bi bi-calendar2-week-fill"></i>
                            <span>Monday Discipline Meeting</span>
                        </div>

                        <div class="event-item">
                            <i class="bi bi-megaphone-fill"></i>
                            <span>Student Awareness Campaign</span>
                        </div>

                        <div class="event-item">
                            <i class="bi bi-award-fill"></i>
                            <span>Best Discipline Award</span>
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
import { ref } from 'vue';
import DashboardSidebar from '../../components/common/DashboardSidebar.vue';

// Modal state
const showAddCaseModal = ref(false);

const newCase = ref({ student: '', issue: '' });
const cases = ref([]); // local list of cases
const errorMessage = ref('');
const successMessage = ref('');
const loading = ref(false);

// Professional function: entry point
function addDisciplineCase() {
  // Fungura modal ifishi
  showAddCaseModal.value = true;
  // Reset fields
  newCase.value = { student: '', issue: '' };
  errorMessage.value = '';
  successMessage.value = '';
}

// Submit logic: purely frontend
function submitCase() {
  // Validation
  if (!newCase.value.student.trim() || !newCase.value.issue.trim()) {
    errorMessage.value = "Please fill in all required fields.";
    return;
  }

  loading.value = true;
  setTimeout(() => {
    // Simulate saving locally
    cases.value.push({
      student: newCase.value.student,
      issue: newCase.value.issue,
      createdAt: new Date().toLocaleString()
    });

    successMessage.value = `Case for ${newCase.value.student} saved successfully.`;
    showAddCaseModal.value = false;
    loading.value = false;
  }, 800); // simulate delay for realism
}

function generateReport() {
  alert("Report generated successfully!");
  // Ushobora gukora export PDF cyangwa CSV hano
}

function openStudentRecords() {
  alert("Opening student records...");
  // Ushobora gukoresha router.push('/student-records') niba ufite route
}

function sendNotifications() {
  alert("Notifications sent to all students!");
  // Ushobora gukora API call yo kohereza email/SMS
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
}
.modal-box {
  background: purple;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
.j{
    color: #3498db;
}
.error { color: red; }
.success { color: green; }
.modal-actions {
  margin-top: 10px;
  display: flex; gap: 10px;
}
/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
}
.modal-box {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
.modal-actions {
  margin-top: 10px;
  display: flex; gap: 10px;
}



.dod-dashboard{
    padding: 25px;
    background: #fff5fa;
    min-height: 100vh;
}

/* TOP */
.top-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.dashboard-title{
    font-size: 34px;
    font-weight: bold;
    color: #d63384;
}

.dashboard-title i{
    margin-right: 10px;
}

.dashboard-subtitle{
    color: #777;
    margin-top: 5px;
}

.profile-box{
    background: linear-gradient(135deg,#ff4da6,#d63384);
    color: white;
    padding: 14px 22px;
    border-radius: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 5px 20px rgba(214,51,132,0.3);
}

/* STATS */
.stats-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    gap: 20px;
    margin-bottom: 25px;
}

.stat-card{
    background: white;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
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
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: white;
}

.pink{
    background: linear-gradient(135deg,#ff4da6,#ff66b3);
}

.purple{
    background: linear-gradient(135deg,#9b59b6,#c56cf0);
}

.blue{
    background: linear-gradient(135deg,#3498db,#5dade2);
}

.orange{
    background: linear-gradient(135deg,#ff9800,#ffb74d);
}

/* CONTENT */
.content-grid{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;
}

.card-box{
    background: white;
    border-radius: 20px;
    padding: 22px;
    margin-bottom: 25px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
}

.card-header{
    margin-bottom: 20px;
}

.card-header h3{
    color: #d63384;
    font-size: 22px;
}

/* ACTIVITIES */
.activity-item{
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 18px;
    padding: 14px;
    border-radius: 14px;
    background: #fff7fb;
}

.activity-icon{
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}

.bg1{
    background: #ff4da6;
}

.bg2{
    background: #9b59b6;
}

.bg3{
    background: #3498db;
}

/* PROGRESS */
.progress-item{
    margin-bottom: 20px;
}

.progress-text{
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-weight: 600;
}

.progress-bar{
    height: 10px;
    background: #f1f1f1;
    border-radius: 20px;
    overflow: hidden;
}

.progress-fill{
    height: 100%;
    border-radius: 20px;
}

.fill1{
    width: 97%;
    background: linear-gradient(to right,#ff4da6,#ff66b3);
}

.fill2{
    width: 90%;
    background: linear-gradient(to right,#9b59b6,#c56cf0);
}

.fill3{
    width: 85%;
    background: linear-gradient(to right,#3498db,#5dade2);
}

/* ACTION BUTTONS */
.quick-actions{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.action-btn{
    border: none;
    padding: 15px;
    border-radius: 14px;
    background: linear-gradient(135deg,#ff4da6,#d63384);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
}

.action-btn:hover{
    transform: scale(1.03);
}

/* EVENTS */
.event-item{
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px;
    border-radius: 12px;
    background: #fff7fb;
    margin-bottom: 15px;
    color: #444;
    font-weight: 600;
}

.event-item i{
    color: #d63384;
    font-size: 20px;
}

/* RESPONSIVE */
@media(max-width: 900px){
    .content-grid{
        grid-template-columns: 1fr;
    }
}

</style>
```
