# Professional Add Marks Dashboard (Vue + Modern MIS UI)

```vue
<template>
  <v-app>

    <DashboardSidebar />

    <v-main class="marks-dashboard">

      <div class="dashboard-container">

        <!-- TOP HEADER -->

        <div class="top-header">

          <div>
            <h1 class="dashboard-title">
              <i class="bi bi-journal-check"></i>
              Add Student Marks
            </h1>

            <p class="dashboard-subtitle">
              Manage assessments, grading, performance tracking and marks submission.
            </p>
          </div>

          <div class="header-actions">

            <button class="header-btn export-btn">
              <i class="bi bi-download"></i>
              Export
            </button>

            <button class="header-btn publish-btn">
              <i class="bi bi-send-check"></i>
              Publish Results
            </button>

          </div>

        </div>


        <!-- TOP STATISTICS -->

        <div class="stats-grid">

          <div class="stats-card blue">
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
              <i class="bi bi-book-fill"></i>
            </div>

            <div>
              <h2>18</h2>
              <p>Courses</p>
            </div>
          </div>

          <div class="stats-card green">
            <div class="stats-icon">
              <i class="bi bi-check-circle-fill"></i>
            </div>

            <div>
              <h2>87%</h2>
              <p>Marks Submitted</p>
            </div>
          </div>

          <div class="stats-card orange">
            <div class="stats-icon">
              <i class="bi bi-clock-history"></i>
            </div>

            <div>
              <h2>3 Days</h2>
              <p>Submission Deadline</p>
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
              <label>Class</label>

              <select>
                <option>l3 sod</option>
                <option>l4 sod</option>
                <option>l5 sod</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Course</label>

              <select>
                <option>Vue JS</option>
                <option>React JS</option>
                <option>Database</option>
              </select>
            </div>

            <div class="filter-group">
              <label>Assessment Type</label>

              <select>
                <option>CAT</option>
                <option>Quiz</option>
                <option>Mid Term</option>
                <option>Final Exam</option>
              </select>
            </div>

          </div>

        </div>


        <!-- MAIN GRID -->

        <div class="main-grid">

          <!-- LEFT SECTION -->

          <div class="left-section">

            <!-- MARK ENTRY TABLE -->

            <div class="card-box">

              <div class="card-header">
                <div>
                  <h3>
                    <i class="bi bi-pencil-square"></i>
                    Marks Entry Table
                  </h3>

                  <p>Enter student scores and comments.</p>
                </div>

                <div class="table-actions">

                  <button class="mini-btn">
                    <i class="bi bi-funnel"></i>
                    Filter
                  </button>

                  <button class="mini-btn save-btn">
                    <i class="bi bi-save"></i>
                    Save Draft
                  </button>

                </div>
              </div>


              <div class="table-wrapper">

                <table class="marks-table">

                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student</th>
                      <th>Gender</th>
                      <th>Course</th>
                      <th>Marks /100</th>
                      <th>Grade</th>
                      <th>Comment</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>M</td>
                      <td>Vue JS</td>

                      <td>
                        <input type="number" value="82">
                      </td>

                      <td>
                        <span class="grade grade-a">
                          A
                        </span>
                      </td>

                      <td>
                        <input type="text" value="Excellent performance">
                      </td>

                      <td>
                        <span class="status submitted">
                          Submitted
                        </span>
                      </td>
                    </tr>


                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>F</td>
                      <td>Vue JS</td>

                      <td>
                        <input type="number" value="74">
                      </td>

                      <td>
                        <span class="grade grade-b">
                          B
                        </span>
                      </td>

                      <td>
                        <input type="text" value="Good work">
                      </td>

                      <td>
                        <span class="status pending">
                          Pending
                        </span>
                      </td>
                    </tr>


                    <tr>
                      <td>3</td>
                      <td>Claude Mike</td>
                      <td>M</td>
                      <td>Vue JS</td>

                      <td>
                        <input type="number" value="58">
                      </td>

                      <td>
                        <span class="grade grade-c">
                          C
                        </span>
                      </td>

                      <td>
                        <input type="text" value="Needs improvement">
                      </td>

                      <td>
                        <span class="status review">
                          Review
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>


            <!-- RECENT SUBMISSIONS -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-clock-fill"></i>
                  Recent Marks Activity
                </h3>
              </div>

              <div class="activity-item">
                <i class="bi bi-check-circle-fill success"></i>
                <div>
                  <h4>l3 sod CAT Marks Submitted</h4>
                  <p>2 minutes ago</p>
                </div>
              </div>

              <div class="activity-item">
                <i class="bi bi-pencil-fill primary"></i>
                <div>
                  <h4>Database Scores Updated</h4>
                  <p>15 minutes ago</p>
                </div>
              </div>

              <div class="activity-item">
                <i class="bi bi-exclamation-circle-fill warning"></i>
                <div>
                  <h4>5 Students Missing Marks</h4>
                  <p>Today</p>
                </div>
              </div>

            </div>

          </div>


          <!-- RIGHT SECTION -->

          <div class="right-section">

            <!-- PERFORMANCE SUMMARY -->

            <div class="card-box">

              <div class="card-header">
                <h3>
                  <i class="bi bi-bar-chart-fill"></i>
                  Performance Summary
                </h3>
              </div>

              <div class="summary-item">
                <span>Average Score</span>
                <strong>78%</strong>
              </div>

              <div class="summary-item">
                <span>Highest Score</span>
                <strong>96%</strong>
              </div>

              <div class="summary-item">
                <span>Lowest Score</span>
                <strong>42%</strong>
              </div>

              <div class="summary-item">
                <span>Distinctions</span>
                <strong>24 Students</strong>
              </div>

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

                <button class="quick-btn" @click="exportToExcel">
                  <i class="bi bi-printer-fill"></i>
                  Print Results
                </button>

                <button class="quick-btn">
                  <i class="bi bi-envelope-fill"></i>
                  Send Reports
                </button>

                <button class="quick-btn">
                  <i class="bi bi-file-earmark-pdf-fill"></i>
                  Generate PDF
                </button>

                <button class="quick-btn">
                  <i class="bi bi-cloud-arrow-up-fill"></i>
                  Backup Marks
                </button>

              </div>

            </div>


            <!-- DEADLINE NOTICE -->

            <div class="card-box notice-box">

              <div class="notice-header">
                <i class="bi bi-alarm-fill"></i>
                Submission Deadline
              </div>

              <p>
                All CAT marks must be submitted before Friday at 5:00 PM.
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

import * as XLSX from 'xlsx'


const exportToExcel = () => {

  const marksData = [

    {
      ID: 1,
      Student: 'John Doe',
      Gender: 'M',
      Class: 'L3 SOD',
      Course: 'Vue JS',
      CAT: 22,
      Assignment: 18,
      Midterm: 25,
      Final: 30,
      Total: 95,
      Grade: 'A',
      Comment: 'Excellent',
      Status: 'Submitted'
    },

    {
      ID: 2,
      Student: 'Jane Smith',
      Gender: 'F',
      Class: 'L3 SOD',
      Course: 'Vue JS',
      CAT: 18,
      Assignment: 16,
      Midterm: 22,
      Final: 28,
      Total: 84,
      Grade: 'A',
      Comment: 'Very Good',
      Status: 'Submitted'
    },

    {
      ID: 3,
      Student: 'Claude Mike',
      Gender: 'M',
      Class: 'L4 SOD',
      Course: 'React JS',
      CAT: 15,
      Assignment: 14,
      Midterm: 18,
      Final: 24,
      Total: 71,
      Grade: 'B',
      Comment: 'Good',
      Status: 'Pending'
    },

    {
      ID: 4,
      Student: 'Alice Joy',
      Gender: 'F',
      Class: 'L5 SOD',
      Course: 'Database',
      CAT: 12,
      Assignment: 10,
      Midterm: 16,
      Final: 20,
      Total: 58,
      Grade: 'C',
      Comment: 'Needs Improvement',
      Status: 'Review'
    },

    {
      ID: 5,
      Student: 'Kevin Lee',
      Gender: 'M',
      Class: 'L3 SOD',
      Course: 'Vue JS',
      CAT: 20,
      Assignment: 19,
      Midterm: 24,
      Final: 29,
      Total: 92,
      Grade: 'A',
      Comment: 'Outstanding',
      Status: 'Submitted'
    }

  ]

  const worksheet =
    XLSX.utils.json_to_sheet(marksData)

  const workbook =
    XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    'Student Marks'
  )

  XLSX.writeFile(
    workbook,
    'Professional_Student_Marks.xlsx'
  )

}

</script>

<style scoped>

.marks-dashboard{
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
  flex-wrap:wrap;
  margin-bottom:30px;
  gap:20px;
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
  padding:12px 20px;
  border-radius:12px;
  font-weight:600;
  cursor:pointer;
}

.export-btn{
  background:#eef5ff;
  color:#2563eb;
}

.publish-btn{
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
  border-radius:20px;
  padding:25px;
  display:flex;
  align-items:center;
  gap:20px;
  color:white;
}

.stats-icon{
  width:65px;
  height:65px;
  border-radius:16px;
  background:rgba(255,255,255,0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:28px;
}

.blue{
  background:linear-gradient(135deg,#2563eb,#60a5fa);
}

.purple{
  background:linear-gradient(135deg,#7c3aed,#a78bfa);
}

.green{
  background:linear-gradient(135deg,#10b981,#34d399);
}

.orange{
  background:linear-gradient(135deg,#f97316,#fdba74);
}

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
  color:#444;
}

.filter-group select{
  width:100%;
  padding:12px;
  border-radius:12px;
  border:1px solid #eee;
}

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
  gap:15px;
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
  background:#fff0f6;
  color:#d63384;
  cursor:pointer;
}

.save-btn{
  background:#d63384;
  color:white;
}

.table-wrapper{
  overflow-x:auto;
}

.marks-table{
  width:100%;
  border-collapse:collapse;
}

.marks-table th{
  background:#fff0f6;
  color:#d63384;
  padding:15px;
  text-align:left;
}

.marks-table td{
  padding:15px;
  border-bottom:1px solid #f3f3f3;
}

.marks-table input{
  width:100%;
  padding:10px;
  border-radius:10px;
  border:1px solid #e5e5e5;
}

.grade{
  padding:6px 12px;
  border-radius:20px;
  color:white;
  font-weight:600;
}

.grade-a{
  background:#10b981;
}

.grade-b{
  background:#3b82f6;
}

.grade-c{
  background:#f59e0b;
}

.status{
  padding:6px 12px;
  border-radius:20px;
  font-size:13px;
  font-weight:600;
}

.submitted{
  background:#dcfce7;
  color:#166534;
}

.pending{
  background:#fef3c7;
  color:#92400e;
}

.review{
  background:#fee2e2;
  color:#991b1b;
}

.activity-item{
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:20px;
}

.activity-item i{
  font-size:24px;
}

.success{
  color:#10b981;
}

.primary{
  color:#3b82f6;
}

.warning{
  color:#f59e0b;
}

.summary-item{
  display:flex;
  justify-content:space-between;
  margin-bottom:18px;
  padding-bottom:15px;
  border-bottom:1px solid #f1f1f1;
}

.quick-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

.quick-btn{
  border:none;
  background:#fff0f6;
  padding:18px;
  border-radius:15px;
  color:#d63384;
  font-weight:600;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.quick-btn i{
  font-size:24px;
}

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
