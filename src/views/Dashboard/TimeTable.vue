```vue
<template>

  <!-- PROFESSIONAL DOS ACADEMIC MONITORING SECTION -->

  <div class="academic-monitoring-section">

    <!-- TOP CARDS -->
    <div class="monitoring-cards">

      <div class="monitor-card total">
        <div>
          <h3>Total Classes</h3>
          <h1>24</h1>
          <p>All Active Classes</p>
        </div>

        <i class="bi bi-buildings-fill"></i>
      </div>

      <div class="monitor-card students">
        <div>
          <h3>Total Students</h3>
          <h1>1,284</h1>
          <p>Registered Students</p>
        </div>

        <i class="bi bi-mortarboard-fill"></i>
      </div>

      <div class="monitor-card teachers">
        <div>
          <h3>Teachers On Duty</h3>
          <h1>58</h1>
          <p>Currently Teaching</p>
        </div>

        <i class="bi bi-person-workspace"></i>
      </div>

      <div class="monitor-card lessons">
        <div>
          <h3>Lessons Running</h3>
          <h1>32</h1>
          <p>Live Classroom Sessions</p>
        </div>

        <i class="bi bi-broadcast"></i>
      </div>

    </div>

    <!-- LIVE CLASSROOM TABLE -->
    <div class="live-classroom-container">

      <div class="section-header">

        <div>
          <h2>Live Classroom Monitoring</h2>
          <p>Track what every class is studying in real-time</p>
        </div>

        <button class="refresh-btn">
          <i class="bi bi-arrow-clockwise"></i>
          Refresh
        </button>

      </div>

      <div class="table-wrapper">

        <table class="live-classroom-table">

          <thead>
            <tr>
              <th>Class</th>
              <th>Current Subject</th>
              <th>Teacher</th>
              <th>Room</th>
              <th>Students</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <span class="class-badge">S4 SOD</span>
              </td>

              <td>Vue JS Development</td>

              <td>MUGISHA Eric</td>

              <td>Lab 2</td>

              <td>42</td>

              <td>
                <span class="status live">
                  <i class="bi bi-broadcast"></i>
                  Live
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="class-badge">S5 SOD</span>
              </td>

              <td>Database Systems</td>

              <td>UWASE Alice</td>

              <td>ICT Room 1</td>

              <td>38</td>

              <td>
                <span class="status active">
                  <i class="bi bi-check-circle-fill"></i>
                  Active
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="class-badge">S6 SOD</span>
              </td>

              <td>Mobile App Development</td>

              <td>HABIMANA Jean</td>

              <td>Smart Lab</td>

              <td>36</td>

              <td>
                <span class="status live">
                  <i class="bi bi-broadcast"></i>
                  Live
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="class-badge">S3A</span>
              </td>

              <td>Mathematics</td>

              <td>NYIRANEZA Diane</td>

              <td>Block B</td>

              <td>47</td>

              <td>
                <span class="status active">
                  <i class="bi bi-check-circle-fill"></i>
                  Active
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="class-badge">S5 MPC</span>
              </td>

              <td>Physics Practical</td>

              <td>NTAWUKULIRYAYO</td>

              <td>Science Lab</td>

              <td>33</td>

              <td>
                <span class="status pending">
                  <i class="bi bi-hourglass-split"></i>
                  Starting Soon
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

    <!-- SUBJECT PROGRESS -->
    <div class="subject-progress-section">

      <!-- SOFTWARE -->
      <div class="progress-card">

        <div class="progress-top">
          <h3>Software Development</h3>
          <span>82%</span>
        </div>

        <div class="progress-bar">
          <div class="progress-fill software"></div>
        </div>

        <p>Current weekly completion</p>

      </div>

      <!-- NETWORKING -->
      <div class="progress-card">

        <div class="progress-top">
          <h3>Networking</h3>
          <span>74%</span>
        </div>

        <div class="progress-bar">
          <div class="progress-fill networking"></div>
        </div>

        <p>Current weekly completion</p>

      </div>

      <!-- DATABASE -->
      <div class="progress-card">

        <div class="progress-top">
          <h3>Database Systems</h3>
          <span>91%</span>
        </div>

        <div class="progress-bar">
          <div class="progress-fill database"></div>
        </div>

        <p>Current weekly completion</p>

      </div>

    </div>

  </div>

</template>

<script setup>
</script>

<style scoped>

.academic-monitoring-section{
  padding:30px;
}

/* TOP CARDS */

.monitoring-cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:25px;
  margin-bottom:35px;
}

.monitor-card{
  background:white;
  border-radius:22px;
  padding:25px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0 8px 25px rgba(0,0,0,0.08);
  transition:.3s;
}

.monitor-card:hover{
  transform:translateY(-6px);
}

.monitor-card h3{
  font-size:16px;
  margin-bottom:10px;
  color:#555;
}

.monitor-card h1{
  font-size:38px;
  font-weight:800;
}

.monitor-card p{
  color:gray;
  margin-top:6px;
}

.monitor-card i{
  font-size:50px;
  opacity:.9;
}

.total{
  border-left:7px solid #2563eb;
}

.students{
  border-left:7px solid #16a34a;
}

.teachers{
  border-left:7px solid #f59e0b;
}

.lessons{
  border-left:7px solid #dc2626;
}

/* TABLE */

.live-classroom-container{
  background:white;
  border-radius:25px;
  padding:25px;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
  margin-bottom:35px;
}

.section-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
}

.section-header h2{
  font-size:28px;
  margin-bottom:5px;
}

.section-header p{
  color:gray;
}

.refresh-btn{
  background:#2563eb;
  color:white;
  border:none;
  padding:12px 20px;
  border-radius:12px;
  cursor:pointer;
  font-weight:600;
}

.table-wrapper{
  overflow-x:auto;
}

.live-classroom-table{
  width:100%;
  border-collapse:collapse;
}

.live-classroom-table th{
  background:#f3f4f6;
  padding:18px;
  text-align:left;
}

.live-classroom-table td{
  padding:18px;
  border-bottom:1px solid #eee;
}

.live-classroom-table tbody tr:hover{
  background:#fafafa;
}

.class-badge{
  background:#2563eb;
  color:white;
  padding:8px 14px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.status{
  padding:8px 14px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
  display:inline-flex;
  align-items:center;
  gap:8px;
}

.status.live{
  background:#dcfce7;
  color:#16a34a;
}

.status.active{
  background:#dbeafe;
  color:#2563eb;
}

.status.pending{
  background:#fef3c7;
  color:#d97706;
}

/* PROGRESS SECTION */

.subject-progress-section{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:25px;
}

.progress-card{
  background:white;
  border-radius:22px;
  padding:25px;
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.progress-top{
  display:flex;
  justify-content:space-between;
  margin-bottom:15px;
}

.progress-top h3{
  font-size:18px;
}

.progress-top span{
  font-weight:800;
  color:#2563eb;
}

.progress-bar{
  width:100%;
  height:14px;
  background:#e5e7eb;
  border-radius:30px;
  overflow:hidden;
  margin-bottom:10px;
}

.progress-fill{
  height:100%;
  border-radius:30px;
}

.software{
  width:82%;
  background:#2563eb;
}

.networking{
  width:74%;
  background:#f59e0b;
}

.database{
  width:91%;
  background:#16a34a;
}

</style>
```
