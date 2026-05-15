```vue
<template>
  <v-app>

    <DashboardSidebar />

    <v-main class="reports-dashboard">

      <div class="dashboard-container">

        <!-- TOP HEADER -->

        <div class="top-header">

          <div>
            <h1 class="dashboard-title">
              <i class="bi bi-bar-chart-line-fill"></i>
              Academic Reports Dashboard
            </h1>

            <p class="dashboard-subtitle">
              Analyze student performance, attendance, grading trends and institutional reports.
            </p>
          </div>

          <div class="header-actions">

            <button class="header-btn export-btn">
              <i class="bi bi-file-earmark-excel-fill"></i>
              Export Report
            </button>

            <button class="header-btn generate-btn">
              <i class="bi bi-stars"></i>
              Generate Analytics
            </button>

          </div>

        </div>


        <!-- TOP STATISTICS -->

        <div class="stats-grid">

          <div class="stats-card pink">
            <div class="stats-icon">
              <i class="bi bi-people-fill"></i>
            </div>

            <div>
              <h2>1,248</h2>
              <p>Total Students</p>
            </div>
          </div>

          <div class="stats-card purple">
            <div class="stats-icon">
              <i class="bi bi-journal-richtext"></i>
            </div>

            <div>
              <h2>84</h2>
              <p>Generated Reports</p>
            </div>
          </div>

          <div class="stats-card blue">
            <div class="stats-icon">
              <i class="bi bi-graph-up-arrow"></i>
            </div>

            <div>
              <h2>87%</h2>
              <p>Average Performance</p>
            </div>
          </div>

          <div class="stats-card orange">
            <div class="stats-icon">
              <i class="bi bi-calendar2-week-fill"></i>
            </div>

            <div>
              <h2>12</h2>
              <p>Weekly Reports</p>
            </div>
          </div>

        </div>


        <!-- FILTERS -->

        <div class="filter-card">

          <div class="filter-grid">

            <div class="filter-group">
              <label>Academic Year</label>

              <select>
                <option>2025 - 2026</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Term</label>

              <select>
                <option>Term 1</option>
                <option>Term 2</option>
                <option>Term 3</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Department</label>

              <select>
                <option>Software Development</option>
                <option>Networking</option>
                <option>Multimedia</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Class</label>

              <select>
                <option>L3 SOD</option>
                <option>L4 SOD</option>
                <option>L5 SOD</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Report Type</label>

              <select>
                <option>Performance Report</option>
                <option>Attendance Report</option>
                <option>Marks Report</option>
              </select>
            </div>

          </div>

        </div>


        <!-- MAIN GRID -->

        <div class="main-grid">

          <!-- LEFT -->

          <div class="left-section">

            <!-- PERFORMANCE TABLE -->

            <div class="card-box">

              <div class="card-header">

                <div>
                  <h3>
                    <i class="bi bi-table"></i>
                    Student Performance Reports
                  </h3>

                  <p>
                    Monitor student grades and academic progress.
                  </p>
                </div>

                <div class="table-actions">

                  <button class="mini-btn">
                    <i class="bi bi-funnel-fill"></i>
                    Filter
                  </button>

                  <button class="mini-btn generate">
                    <i class="bi bi-file-earmark-bar-graph-fill"></i>
                    Generate
                  </button>

                </div>

              </div>

              <div class="table-wrapper">

                <table class="report-table">

                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student</th>
                      <th>Class</th>
                      <th>Course</th>
                      <th>Attendance</th>
                      <th>Average</th>
                      <th>Grade</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>L3 SOD</td>
                      <td>Vue JS</td>
                      <td>96%</td>
                      <td>92%</td>

                      <td>
                        <span class="grade a">
                          A
                        </span>
                      </td>

                      <td>
                        <span class="status excellent">
                          Excellent
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>L4 SOD</td>
                      <td>React JS</td>
                      <td>88%</td>
                      <td>78%</td>

                      <td>
                        <span class="grade b">
                          B
                        </span>
                      </td>

                      <td>
                        <span class="status good">
                          Good
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Claude Mike</td>
                      <td>L5 SOD</td>
                      <td>Database</td>
                      <td>72%</td>
                      <td>58%</td>

                      <td>
                        <span class="grade c">
                          C
                        </span>
                      </td>

                      <td>
                        <span class="status warning">
                          Needs Support
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>


            <!-- REPORT ACTIVITIES -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-clock-history"></i>
                  Recent Report Activities
                </h3>
              </div>

              <div class="activity-item">
                <i class="bi bi-check-circle-fill success"></i>

                <div>
                  <h4>Term 1 Performance Report Generated</h4>
                  <p>5 minutes ago</p>
                </div>
              </div>

              <div class="activity-item">
                <i class="bi bi-file-earmark-arrow-down-fill primary"></i>

                <div>
                  <h4>Attendance Report Exported</h4>
                  <p>20 minutes ago</p>
                </div>
              </div>

              <div class="activity-item">
                <i class="bi bi-exclamation-circle-fill danger"></i>

                <div>
                  <h4>3 Missing Student Assessments</h4>
                  <p>Today</p>
                </div>
              </div>

            </div>

          </div>


          <!-- RIGHT -->

          <div class="right-section">

            <!-- ANALYTICS -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-pie-chart-fill"></i>
                  Analytics Summary
                </h3>
              </div>

              <div class="summary-item">
                <span>Best Performing Class</span>
                <strong>L3 SOD</strong>
              </div>

              <div class="summary-item">
                <span>Lowest Attendance</span>
                <strong>L5 SOD</strong>
              </div>

              <div class="summary-item">
                <span>Average GPA</span>
                <strong>3.8</strong>
              </div>

              <div class="summary-item">
                <span>Top Course</span>
                <strong>Vue JS</strong>
              </div>

            </div>


            <!-- QUICK ACTIONS -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-lightning-charge-fill"></i>
                  Quick Actions
                </h3>
              </div>

              <div class="quick-grid">

                <button class="quick-btn">
                  <i class="bi bi-printer-fill"></i>
                  Print Reports
                </button>

                <button class="quick-btn">
                  <i class="bi bi-file-earmark-pdf-fill"></i>
                  Generate PDF
                </button>

                <button class="quick-btn">
                  <i class="bi bi-envelope-paper-fill"></i>
                  Send Reports
                </button>

                <button class="quick-btn">
                  <i class="bi bi-cloud-arrow-up-fill"></i>
                  Backup Data
                </button>

              </div>

            </div>


            <!-- NOTICE -->

            <div class="card-box notice-box">

              <div class="notice-header">
                <i class="bi bi-megaphone-fill"></i>
                Academic Notice
              </div>

              <p>
                Final academic reports submission deadline is Friday at 5 PM.
              </p>

              <button class="notice-btn">
                View Academic Calendar
              </button>

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

.reports-dashboard{
  background:#fff5fa;
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
  gap:20px;
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
  padding:12px 22px;
  border-radius:12px;
  cursor:pointer;
  font-weight:600;
}

.export-btn{
  background:#eef4ff;
  color:#2563eb;
}

.generate-btn{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stats-card{
  padding:25px;
  border-radius:22px;
  color:white;
  display:flex;
  align-items:center;
  gap:20px;
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

/* FILTER */

.filter-card,
.card-box{
  background:white;
  border-radius:22px;
  padding:25px;
  margin-bottom:25px;
  box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.filter-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:20px;
}

.filter-group label{
  display:block;
  margin-bottom:8px;
  font-weight:600;
}

.filter-group select{
  width:100%;
  padding:12px;
  border-radius:12px;
  border:1px solid #eee;
}

/* GRID */

.main-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:25px;
}

.card-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:20px;
}

.card-header h3{
  color:#d63384;
}

.table-actions{
  display:flex;
  gap:10px;
}

.mini-btn{
  border:none;
  padding:10px 15px;
  border-radius:10px;
  cursor:pointer;
  background:#fff0f6;
  color:#d63384;
}

.generate{
  background:#d63384;
  color:white;
}

/* TABLE */

.table-wrapper{
  overflow-x:auto;
}

.report-table{
  width:100%;
  border-collapse:collapse;
}

.report-table th{
  background:#fff0f6;
  color:#d63384;
  padding:15px;
  text-align:left;
}

.report-table td{
  padding:15px;
  border-bottom:1px solid #f3f3f3;
}

.grade{
  padding:6px 12px;
  border-radius:20px;
  color:white;
  font-weight:600;
}

.a{
  background:#10b981;
}

.b{
  background:#3b82f6;
}

.c{
  background:#f59e0b;
}

.status{
  padding:6px 12px;
  border-radius:20px;
  font-size:13px;
  font-weight:600;
}

.excellent{
  background:#dcfce7;
  color:#166534;
}

.good{
  background:#dbeafe;
  color:#1d4ed8;
}

.warning{
  background:#fef3c7;
  color:#92400e;
}

/* ACTIVITIES */

.activity-item{
  display:flex;
  gap:15px;
  align-items:center;
  margin-bottom:20px;
}

.activity-item i{
  font-size:24px;
}

.success{
  color:#10b981;
}

.primary{
  color:#2563eb;
}

.danger{
  color:#ef4444;
}

/* SUMMARY */

.summary-item{
  display:flex;
  justify-content:space-between;
  margin-bottom:18px;
  padding-bottom:15px;
  border-bottom:1px solid #f1f1f1;
}

/* QUICK */

.quick-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

.quick-btn{
  border:none;
  background:#fff0f6;
  padding:18px;
  border-radius:16px;
  color:#d63384;
  cursor:pointer;
  font-weight:600;

  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.quick-btn i{
  font-size:24px;
}

.quick-btn:hover{
  background:#d63384;
  color:white;
}

/* NOTICE */

.notice-box{
  background:linear-gradient(135deg,#ff4d9d,#ff7eb3);
  color:white;
}

.notice-header{
  font-size:20px;
  font-weight:700;
  margin-bottom:15px;
}

.notice-btn{
  margin-top:15px;
  border:none;
  background:white;
  color:#d63384;
  padding:12px 18px;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
}

/* RESPONSIVE */

@media(max-width:1000px){

  .main-grid{
    grid-template-columns:1fr;
  }

}

@media(max-width:700px){

  .dashboard-title{
    font-size:25px;
  }

}
</style>
```
