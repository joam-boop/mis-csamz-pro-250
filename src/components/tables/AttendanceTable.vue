```vue id="p4pxup"
<template>

<div class="attendance-wrapper">

  <!-- =========================
  TOP HEADER
  ========================== -->

  <div class="top-header">

    <div>

      <h1>
        Attendance Management
      </h1>

      <p>
        Manage and monitor student attendance professionally.
      </p>

    </div>

    <!-- DATE -->
    <div class="date-box">

      <i class="bi bi-calendar-event"></i>

      {{ currentDate }}

    </div>

  </div>

  <!-- =========================
  STATISTICS
  ========================== -->

  <div class="stats-grid">

    <div class="stat-card present">

      <i class="bi bi-check-circle-fill"></i>

      <div>
        <h2>
          {{ presentStudents }}
        </h2>

        <p>
          Present Students
        </p>
      </div>

    </div>

    <div class="stat-card absent">

      <i class="bi bi-x-circle-fill"></i>

      <div>
        <h2>
          {{ absentStudents }}
        </h2>

        <p>
          Absent Students
        </p>
      </div>

    </div>

    <div class="stat-card boys">

      <i class="bi bi-gender-male"></i>

      <div>
        <h2>
          {{ boysPresent }}
        </h2>

        <p>
          Boys Present
        </p>
      </div>

    </div>

    <div class="stat-card girls">

      <i class="bi bi-gender-female"></i>

      <div>
        <h2>
          {{ girlsPresent }}
        </h2>

        <p>
          Girls Present
        </p>
      </div>

    </div>

  </div>

  <!-- =========================
  SEARCH
  ========================== -->

  <div class="search-box">

    <i class="bi bi-search"></i>

    <input
      type="text"
      v-model="search"
      placeholder="Search student..."
    />

  </div>

  <!-- =========================
  TABLE
  ========================== -->

  <div class="table-container">

    <table>

      <thead>

        <tr>

          <th>#</th>

          <th>Student Name</th>

          <th>Gender</th>

          <th>Class</th>

          <th>Status</th>

          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        <tr
          v-for="(student,index) in filteredStudents"
          :key="student.id"
        >

          <td>
            {{ index + 1 }}
          </td>

          <td>
            {{ student.name }}
          </td>

          <td>

            <span
              class="gender-badge"
              :class="student.gender"
            >

              {{ student.gender }}

            </span>

          </td>

          <td>
            {{ student.class }}
          </td>

          <td>

            <span
              class="status-badge"
              :class="student.status"
            >

              {{ student.status }}

            </span>

          </td>

          <td>

            <button
              class="present-btn"
              @click="markPresent(student)"
            >

              Present

            </button>

            <button
              class="absent-btn"
              @click="markAbsent(student)"
            >

              Absent

            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</div>

</template>

<script setup>

import {
  ref,
  computed,
  onMounted
} from 'vue'

import {
  saveData,
  getData
} from '../../services/LocalStorageServices'

// =========================
// SEARCH
// =========================

const search = ref('')

// =========================
// DATE
// =========================

const currentDate =
new Date().toLocaleDateString()

// =========================
// STUDENTS
// =========================

const students = ref([])

// =========================
// LOAD DATA
// =========================

onMounted(() => {

  const savedStudents =
  getData('attendanceStudents')

  if(savedStudents.length){

    students.value =
    savedStudents

  }else{

    students.value = [

      {
        id:1,
        name:'Jean Claude',
        gender:'Male',
        class:'l3 sod',
        status:'Present'
      },

      {
        id:2,
        name:'Aline Keza',
        gender:'Female',
        class:'l4 plt',
        status:'Absent'
      },

      {
        id:3,
        name:'Eric Ndayisaba',
        gender:'Male',
        class:'l3 wot',
        status:'Present'
      },

      {
        id:4,
        name:'Grace Ineza',
        gender:'Female',
        class:'l5 csa',
        status:'Present'
      }

    ]

    saveData(
      'attendanceStudents',
      students.value
    )

  }

})

// =========================
// FILTER STUDENTS
// =========================

const filteredStudents =
computed(() => {

  return students.value.filter(student =>

    student.name
    .toLowerCase()
    .includes(
      search.value.toLowerCase()
    )

  )

})

// =========================
// MARK PRESENT
// =========================

function markPresent(student){

  student.status = 'Present'

  saveData(
    'attendanceStudents',
    students.value
  )

}

// =========================
// MARK ABSENT
// =========================

function markAbsent(student){

  student.status = 'Absent'

  saveData(
    'attendanceStudents',
    students.value
  )

}

// =========================
// STATISTICS
// =========================

const presentStudents =
computed(() => {

  return students.value.filter(
    s => s.status === 'Present'
  ).length

})

const absentStudents =
computed(() => {

  return students.value.filter(
    s => s.status === 'Absent'
  ).length

})

const boysPresent =
computed(() => {

  return students.value.filter(

    s =>
    s.gender === 'Male' &&
    s.status === 'Present'

  ).length

})

const girlsPresent =
computed(() => {

  return students.value.filter(

    s =>
    s.gender === 'Female' &&
    s.status === 'Present'

  ).length

})

</script>

<style scoped>

/* =========================
WRAPPER
========================= */

.attendance-wrapper{

  padding:30px;

  background:#f8fafc;

  min-height:100vh;

}

/* =========================
HEADER
========================= */

.top-header{

  display:flex;

  justify-content:space-between;

  align-items:center;

  margin-bottom:30px;

}

.top-header h1{

  font-size:32px;

  font-weight:700;

  color:#0f172a;

}

.top-header p{

  color:#64748b;

  margin-top:8px;

}

.date-box{

  background:white;

  padding:12px 20px;

  border-radius:12px;

  box-shadow:0 5px 15px rgba(0,0,0,0.05);

  font-weight:600;

  display:flex;

  align-items:center;

  gap:10px;

}

/* =========================
STATS
========================= */

.stats-grid{

  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(220px,1fr));

  gap:20px;

  margin-bottom:30px;

}

.stat-card{

  background:white;

  border-radius:18px;

  padding:25px;

  display:flex;

  align-items:center;

  gap:20px;

  box-shadow:0 8px 20px rgba(0,0,0,0.06);

}

.stat-card i{

  font-size:35px;

}

.stat-card h2{

  margin:0;

  font-size:28px;

  font-weight:700;

}

.stat-card p{

  margin-top:5px;

  color:#64748b;

}

.present{

  border-left:6px solid #16a34a;

}

.absent{

  border-left:6px solid #dc2626;

}

.boys{

  border-left:6px solid #2563eb;

}

.girls{

  border-left:6px solid #db2777;

}

/* =========================
SEARCH
========================= */

.search-box{

  background:white;

  padding:14px 18px;

  border-radius:14px;

  display:flex;

  align-items:center;

  gap:12px;

  margin-bottom:25px;

  box-shadow:0 5px 15px rgba(0,0,0,0.05);

}

.search-box input{

  border:none;

  outline:none;

  width:100%;

  font-size:15px;

}

/* =========================
TABLE
========================= */

.table-container{

  background:white;

  border-radius:20px;

  overflow:hidden;

  box-shadow:0 10px 20px rgba(0,0,0,0.06);

}

table{

  width:100%;

  border-collapse:collapse;

}

thead{

  background:#2563eb;

  color:white;

}

th,
td{

  padding:18px;

  text-align:left;

}

tbody tr{

  border-bottom:1px solid #e2e8f0;

}

tbody tr:hover{

  background:#f8fafc;

}

/* =========================
BADGES
========================= */

.status-badge{

  padding:8px 14px;

  border-radius:30px;

  color:white;

  font-size:13px;

  font-weight:600;

}

.status-badge.Present{

  background:#16a34a;

}

.status-badge.Absent{

  background:#dc2626;

}

.gender-badge{

  padding:6px 12px;

  border-radius:20px;

  font-size:13px;

  font-weight:600;

}

.gender-badge.Male{

  background:#dbeafe;

  color:#2563eb;

}

.gender-badge.Female{

  background:#fce7f3;

  color:#db2777;

}

/* =========================
BUTTONS
========================= */

.present-btn,
.absent-btn{

  border:none;

  padding:10px 14px;

  border-radius:10px;

  color:white;

  font-size:13px;

  font-weight:600;

  margin-right:8px;

  transition:0.3s;

}

.present-btn{

  background:#16a34a;

}

.present-btn:hover{

  background:#15803d;

}

.absent-btn{

  background:#dc2626;

}

.absent-btn:hover{

  background:#b91c1c;

}

</style>
```
