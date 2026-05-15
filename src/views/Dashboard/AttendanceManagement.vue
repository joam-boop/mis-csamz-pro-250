```vue
<template>
  <v-app>
    <DashboardSidebar />

    <v-main>
      <div class="attendance-page">

        <!-- HEADER -->
        <div class="top-header">

          <div>
            <h1 class="page-title">
              <i class="bi bi-calendar2-check-fill"></i>
              Attendance Management
            </h1>

            <p class="page-subtitle">
              Manage student attendance professionally using
              MIS-CSAMZ PRO.
            </p>
          </div>

          <div class="date-box">
            <i class="bi bi-calendar-event-fill"></i>
            {{ todayDate }}
          </div>

        </div>

        <!-- STATISTICS -->
        <div class="stats-grid">

          <div class="stat-card total-card">

            <div class="icon-box">
              <i class="bi bi-people-fill"></i>
            </div>

            <div>
              <h2>{{ students.length }}</h2>
              <p>Total Students</p>
            </div>

          </div>

          <div class="stat-card present-card">

            <div class="icon-box">
              <i class="bi bi-check-circle-fill"></i>
            </div>

            <div>
              <h2>{{ presentStudents }}</h2>
              <p>Present Students</p>
            </div>

          </div>

          <div class="stat-card absent-card">

            <div class="icon-box">
              <i class="bi bi-x-circle-fill"></i>
            </div>

            <div>
              <h2>{{ absentStudents }}</h2>
              <p>Absent Students</p>
            </div>

          </div>

          <div class="stat-card boys-card">

            <div class="icon-box">
              <i class="bi bi-gender-male"></i>
            </div>

            <div>
              <h2>{{ presentBoys }}/{{ absentBoys }}</h2>
              <p>Boys P/A</p>
            </div>

          </div>

          <div class="stat-card girls-card">

            <div class="icon-box">
              <i class="bi bi-gender-female"></i>
            </div>

            <div>
              <h2>{{ presentGirls }}/{{ absentGirls }}</h2>
              <p>Girls P/A</p>
            </div>

          </div>

        </div>

        <!-- TOOLBAR -->
        <div class="toolbar">

          <div class="search-box">

            <i class="bi bi-search"></i>

            <input
              type="text"
              v-model="search"
              placeholder="Search student..."
            />

          </div>

          <div class="toolbar-buttons">

            <button
              class="present-all-btn"
              @click="markAllPresent"
            >
              <i class="bi bi-check2-all"></i>
              Mark All Present
            </button>

            <button
              class="absent-all-btn"
              @click="markAllAbsent"
            >
              <i class="bi bi-x-circle"></i>
              Mark All Absent
            </button>
            <!-- ADD THIS INSIDE TOOLBAR -->

<div class="filters-section">

  <!-- CLASS FILTER -->
  <div class="filter-box">

    <i class="bi bi-mortarboard-fill"></i>

    <select v-model="selectedClass">

      <option value="">
        All Classes
      </option>

      <option value="L3 SOD">
        L3 SOD
      </option>

      <option value="L3 NOD">
        L3 NOD
      </option>

      <option value="L4 SOD">
        L4 SOD
      </option>

    </select>

  </div>

  <!-- COURSE FILTER -->
  <div class="filter-box">

    <i class="bi bi-book-half"></i>

    <select v-model="selectedCourse">

      <option value="">
        All Courses
      </option>

      <option value="Java">
        Java
      </option>

      <option value="Networking">
        Networking
      </option>

      <option value="Database">
        Database
      </option>

    </select>

  </div>

  <!-- DATE FILTER -->
  <div class="filter-box date-filter">

    <i class="bi bi-calendar-date-fill"></i>

    <input
      type="date"
      v-model="selectedDate"
    />

  </div>

</div>

          </div>

        </div>

        <!-- TABLE -->
        <div class="table-container">

          <div class="table-header">

            <h3>
              <i class="bi bi-table"></i>
              Daily Attendance Records
            </h3>

          </div>

          <table>

            <thead>

              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Status</th>
                <th>Action</th>
                <th>course</th>
                <th>date</th>
              </tr>

            </thead>

            <tbody>

              <tr
                v-for="(student,index) in filteredStudents"
                :key="student.id"
              >

                <td>{{ index + 1 }}</td>

                <td>

                  <div class="student-badge">
                    {{ student.name }}
                  </div>

                </td>

                <td>

                  <span
                    class="gender-badge"
                    :class="student.gender.toLowerCase()"
                  >
                    {{ student.gender }}
                  </span>

                </td>

                <td>{{ student.class }}</td>

                <td>

                  <span
                    class="status-badge"
                    :class="student.status.toLowerCase()"
                  >
                    {{ student.status }}
                  </span>

                </td>
                <td>{{ student.cousrse }}</td>
                <td>{{ student.date }}</td>

                <td>

                  <div class="action-buttons">

                    <button
                      class="present-btn"
                      @click="markPresent(student.id)"
                    >
                      Present
                    </button>

                    <button
                      class="absent-btn"
                      @click="markAbsent(student.id)"
                    >
                      Absent
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </v-main>
  </v-app>
</template>

<script setup>

import DashboardSidebar from '../../components/common/DashboardSidebar.vue'

import {
  ref,
  computed,
  onMounted
} from 'vue'

const search = ref('')

const students = ref([])

const todayDate = new Date().toLocaleDateString()
const selectedClass = ref('')

const selectedCourse = ref('')

const selectedDate = ref('')
onMounted(() => {

  const savedAttendance =
    JSON.parse(
      localStorage.getItem(
        'attendanceRecords'
      )
    )

  if(savedAttendance){

    students.value = savedAttendance

  } else {

    students.value = [

      {
        id:1,
        name:'John Bosco',
        gender:'Male',
        class:' l3 SOD ',
        status:'Present',
        course: 'java',
        date: '12-05-2026'

      },

      {
        id:2,
        name:'Alice Uwase',
        gender:'Female',
        class:' l3 SOD ',
        status:'Absent',
        course: 'java',
        date: '12-05-2026'

      },

      {
        id:3,
        name:'Kevin Mugisha',
        gender:'Male',
        class:'l3 sod',
        status:'Present',
        course: 'java',
        date: '12-05-2026'

      },

      {
        id:4,
        name:'Diane Keza',
        gender:'Female',
        class:'l3 sod',
        status:'Present',
        course: 'java',
        date: '12-05-2026'

      },

      {
        id:5,
        name:'Patrick Ishimwe',
        gender:'Male',
        class:'l3 sod',
        status:'Absent',
        course: 'java',
        date: '12-05-2026'

      }

    ]

    saveAttendance()

  }

})

function saveAttendance(){

  localStorage.setItem(
    'attendanceRecords',
    JSON.stringify(students.value)
  )

}

function markPresent(id){

  const student =
    students.value.find(
      item => item.id === id
    )

  if(student){

    student.status = 'Present'

    saveAttendance()

  }

}

function markAbsent(id){

  const student =
    students.value.find(
      item => item.id === id
    )

  if(student){

    student.status = 'Absent'

    saveAttendance()

  }

}

function markAllPresent(){

  students.value.forEach(student => {

    student.status = 'Present'

  })

  saveAttendance()

}

function markAllAbsent(){

  students.value.forEach(student => {

    student.status = 'Absent'

  })

  saveAttendance()

}

const filteredStudents = computed(() => {

  return students.value.filter(student => {

    const matchesSearch =
      student.name
        .toLowerCase()
        .includes(
          search.value.toLowerCase()
        )

    const matchesClass =
      selectedClass.value === ''
      ||
      student.class === selectedClass.value

    const matchesCourse =
      selectedCourse.value === ''
      ||
      student.course === selectedCourse.value

    const matchesDate =
      selectedDate.value === ''
      ||
      student.date === selectedDate.value

    return (
      matchesSearch
      &&
      matchesClass
      &&
      matchesCourse
      &&
      matchesDate
    )

  })

})

const presentStudents = computed(() => {

  return students.value.filter(
    student => student.status === 'Present'
  ).length

})

const absentStudents = computed(() => {

  return students.value.filter(
    student => student.status === 'Absent'
  ).length

})

const presentBoys = computed(() => {

  return students.value.filter(

    student =>
      student.gender === 'Male'
      &&
      student.status === 'Present'

  ).length

})

const absentBoys = computed(() => {

  return students.value.filter(

    student =>
      student.gender === 'Male'
      &&
      student.status === 'Absent'

  ).length

})

const presentGirls = computed(() => {

  return students.value.filter(

    student =>
      student.gender === 'Female'
      &&
      student.status === 'Present'

  ).length

})

const absentGirls = computed(() => {

  return students.value.filter(

    student =>
      student.gender === 'Female'
      &&
      student.status === 'Absent'

  ).length

})

</script>

<style scoped>

.attendance-page{
  padding:30px;
  background:#f8fafc;
  min-height:100vh;
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

.page-title{
  font-size:34px;
  font-weight:800;
  color:#0f172a;
}

.page-subtitle{
  color:#64748b;
  margin-top:10px;
}

.date-box{
  background:#2563eb;
  color:white;
  padding:14px 22px;
  border-radius:14px;
  font-weight:600;
  display:flex;
  align-items:center;
  gap:10px;
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stat-card{
  border-radius:20px;
  padding:24px;
  color:white;
  display:flex;
  align-items:center;
  gap:18px;
}

.icon-box{
  width:70px;
  height:70px;
  border-radius:18px;
  background:rgba(255,255,255,0.2);
  display:flex;
  align-items:center;
  justify-content:center;
}

.icon-box i{
  font-size:28px;
}

.total-card{
  background:linear-gradient(
    135deg,
    #2563eb,
    #3b82f6
  );
}

.present-card{
  background:linear-gradient(
    135deg,
    #059669,
    #10b981
  );
}

.absent-card{
  background:linear-gradient(
    135deg,
    #dc2626,
    #ef4444
  );
}

.boys-card{
  background:linear-gradient(
    135deg,
    #7c3aed,
    #8b5cf6
  );
}

.girls-card{
  background:linear-gradient(
    135deg,
    #db2777,
    #ec4899
  );
}

/* TOOLBAR */

.toolbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:25px;
}

.search-box{
  background:white;
  padding:14px 18px;
  border-radius:14px;
  display:flex;
  align-items:center;
  gap:10px;
  width:350px;
}

.search-box input{
  border:none;
  outline:none;
  width:100%;
}

.toolbar-buttons{
  display:flex;
  gap:15px;
}

.present-all-btn{
  border:none;
  background:#10b981;
  color:white;
  padding:13px 20px;
  border-radius:12px;
  font-weight:600;
}

.absent-all-btn{
  border:none;
  background:#ef4444;
  color:white;
  padding:13px 20px;
  border-radius:12px;
  font-weight:600;
}

/* TABLE */

.table-container{
  background:white;
  border-radius:20px;
  overflow:hidden;
}

.table-header{
  padding:22px;
  border-bottom:1px solid #e2e8f0;
}

table{
  width:100%;
  border-collapse:collapse;
}

th{
  background:#f1f5f9;
  padding:16px;
  text-align:left;
  font-weight:700;
}

td{
  padding:16px;
  border-bottom:1px solid #f1f5f9;
}

.student-badge{
  background:#dbeafe;
  color:#1d4ed8;
  padding:8px 14px;
  border-radius:30px;
  display:inline-block;
  font-weight:700;
}

.gender-badge{
  padding:7px 14px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.male{
  background:#dbeafe;
  color:#1d4ed8;
}

.female{
  background:#fce7f3;
  color:#be185d;
}

.status-badge{
  padding:8px 14px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.present{
  background:#dcfce7;
  color:#166534;
}

.absent{
  background:#fee2e2;
  color:#991b1b;
}

.action-buttons{
  display:flex;
  gap:10px;
}

.present-btn{
  border:none;
  background:#10b981;
  color:white;
  padding:10px 16px;
  border-radius:10px;
  font-weight:600;
}

.absent-btn{
  border:none;
  background:#ef4444;
  color:white;
  padding:10px 16px;
  border-radius:10px;
  font-weight:600;
}
.filters-section{
  display:flex;
  gap:15px;
  flex-wrap:wrap;
}

.filter-box{
  background:white;
  padding:14px 18px;
  border-radius:14px;
  display:flex;
  align-items:center;
  gap:10px;
  min-width:190px;
  box-shadow:0 4px 15px rgba(0,0,0,0.05);
}

.filter-box i{
  color:#2563eb;
  font-size:18px;
}

.filter-box select,
.filter-box input{
  border:none;
  outline:none;
  width:100%;
  background:transparent;
  font-weight:600;
  color:#334155;
}

.date-filter{
  min-width:220px;
}

/* MODERN HOVER EFFECTS */

.stat-card,
.filter-box,
.search-box,
.table-container{
  transition:0.3s ease;
}

.stat-card:hover,
.filter-box:hover,
.search-box:hover,
.table-container:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.present-btn,
.absent-btn,
.present-all-btn,
.absent-all-btn{
  transition:0.3s ease;
  cursor:pointer;
}

.present-btn:hover,
.present-all-btn:hover{
  transform:scale(1.05);
  background:#059669;
}

.absent-btn:hover,
.absent-all-btn:hover{
  transform:scale(1.05);
  background:#dc2626;
}

/* RESPONSIVE */

@media(max-width:768px){

  .toolbar{
    flex-direction:column;
    align-items:stretch;
  }

  .search-box{
    width:100%;
  }

  .toolbar-buttons{
    width:100%;
  }

  .present-all-btn,
  .absent-all-btn{
    width:100%;
  }

  .filters-section{
    width:100%;
    flex-direction:column;
  }

  .filter-box{
    width:100%;
  }

}
</style>
```
