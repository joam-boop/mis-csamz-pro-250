```vue
<template>
  <v-app>
    <DashboardSidebar />

    <v-main>
      <div class="course-page">

        <!-- HEADER -->
        <div class="top-section">

          <div>
            <h1 class="page-title">
              <i class="bi bi-book-half"></i>
              Course Management
            </h1>

            <p class="page-subtitle">
              Register, organize and manage all academic courses
              professionally in MIS-CSAMZ PRO.
            </p>
          </div>

          <button
            class="add-btn"
            @click="openForm"
          >
            <i class="bi bi-plus-circle-fill"></i>
            Add Course
          </button>

        </div>

        <!-- STATS -->
        <div class="stats-grid">

          <div class="stat-card blue">
            <i class="bi bi-journal-bookmark-fill"></i>

            <div>
              <h2>{{ courses.length }}</h2>
              <p>Total Courses</p>
            </div>
          </div>

          <div class="stat-card green">
            <i class="bi bi-building"></i>

            <div>
              <h2>{{ departmentsCount }}</h2>
              <p>Departments</p>
            </div>
          </div>

          <div class="stat-card purple">
            <i class="bi bi-check-circle-fill"></i>

            <div>
              <h2>{{ activeCourses }}</h2>
              <p>Active Courses</p>
            </div>
          </div>

        </div>

        <!-- SEARCH -->
        <div class="search-box">

          <i class="bi bi-search"></i>

          <input
            type="text"
            v-model="search"
            placeholder="Search by course name or code..."
          />

        </div>

        <!-- FORM -->
        <div
          v-if="showForm"
          class="form-card"
        >

          <h3>
            <i class="bi bi-pencil-square"></i>

            {{ editing ? 'Update Course' : 'Register New Course' }}
          </h3>

          <div class="form-grid">

            <div class="input-group">
              <label>Course Name</label>

              <input
                v-model="form.courseName"
                type="text"
                placeholder="Enter course name"
              />
            </div>

            <div class="input-group">
              <label>Course Code</label>

              <input
                v-model="form.courseCode"
                type="text"
                placeholder="Enter course code"
              />
            </div>

            <div class="input-group">
              <label>Department</label>

              <input
                v-model="form.department"
                type="text"
                placeholder="Enter department"
              />
            </div>

            <div class="input-group">
              <label>Credits</label>

              <input
                v-model="form.credits"
                type="number"
                placeholder="Credits"
              />
            </div>

          </div>

          <div class="btn-group">

            <button
              class="save-btn"
              @click="saveCourse"
            >
              <i class="bi bi-check-circle-fill"></i>

              {{ editing ? 'Update Course' : 'Save Course' }}
            </button>

            <button
              class="cancel-btn"
              @click="closeForm"
            >
              Cancel
            </button>

          </div>

        </div>

        <!-- TABLE -->
        <div class="table-card">

          <div class="table-header">

            <h3>
              <i class="bi bi-table"></i>
              Registered Courses
            </h3>

          </div>

          <table>

            <thead>

              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Course Code</th>
                <th>Department</th>
                <th>Credits</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              <tr
                v-for="(course,index) in filteredCourses"
                :key="course.id"
              >

                <td>{{ index + 1 }}</td>

                <td>{{ course.courseName }}</td>

                <td>
                  <span class="code-badge">
                    {{ course.courseCode }}
                  </span>
                </td>

                <td>{{ course.department }}</td>

                <td>{{ course.credits }}</td>

                <td>
                  <span class="status active">
                    Active
                  </span>
                </td>

                <td>

                  <div class="action-buttons">

                    <button
                      class="edit-btn"
                      @click="editCourse(course)"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </button>

                    <button
                      class="delete-btn"
                      @click="deleteCourse(course.id)"
                    >
                      <i class="bi bi-trash-fill"></i>
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

import { ref, computed, onMounted } from 'vue'

const courses = ref([])

const search = ref('')

const showForm = ref(false)

const editing = ref(false)

const form = ref({
  id: null,
  courseName: '',
  courseCode: '',
  department: '',
  credits: ''
})

onMounted(() => {

  courses.value =
    JSON.parse(localStorage.getItem('courses')) || []

})

const departmentsCount = computed(() => {

  const departments = courses.value.map(
    c => c.department
  )

  return [...new Set(departments)].length

})

const activeCourses = computed(() => {
  return courses.value.length
})

const filteredCourses = computed(() => {

  return courses.value.filter(course =>

    course.courseName
      .toLowerCase()
      .includes(search.value.toLowerCase())

    ||

    course.courseCode
      .toLowerCase()
      .includes(search.value.toLowerCase())

  )

})

function openForm() {

  showForm.value = true

}

function closeForm() {

  showForm.value = false

  editing.value = false

  resetForm()

}

function resetForm() {

  form.value = {
    id: null,
    courseName: '',
    courseCode: '',
    department: '',
    credits: ''
  }

}

function saveCourse() {

  if (
    !form.value.courseName ||
    !form.value.courseCode
  ) {
    alert('Please fill all required fields')
    return
  }

  if (editing.value) {

    const index =
      courses.value.findIndex(
        c => c.id === form.value.id
      )

    courses.value[index] = {
      ...form.value
    }

  } else {

    courses.value.push({
      ...form.value,
      id: Date.now()
    })

  }

  localStorage.setItem(
    'courses',
    JSON.stringify(courses.value)
  )

  closeForm()

}

function editCourse(course) {

  form.value = { ...course }

  editing.value = true

  showForm.value = true

}

function deleteCourse(id) {

  if(confirm('Delete this course?')){

    courses.value =
      courses.value.filter(
        c => c.id !== id
      )

    localStorage.setItem(
      'courses',
      JSON.stringify(courses.value)
    )

  }

}

</script>

<style scoped>

.course-page{
  padding:30px;
  background:#f8fafc;
  min-height:100vh;
}

/* HEADER */

.top-section{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
  flex-wrap:wrap;
  gap:20px;
}

.page-title{
  font-size:34px;
  font-weight:800;
  color:#0f172a;
}

.page-subtitle{
  color:#64748b;
  margin-top:8px;
}

.add-btn{
  border:none;
  background:linear-gradient(
    135deg,
    #2563eb,
    #7c3aed
  );
  color:white;
  padding:14px 22px;
  border-radius:12px;
  font-weight:600;
  display:flex;
  align-items:center;
  gap:10px;
}

/* STATS */

.stats-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));
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
}

.stat-card i{
  font-size:40px;
}

.blue{
  background:linear-gradient(
    135deg,
    #2563eb,
    #3b82f6
  );
}

.green{
  background:linear-gradient(
    135deg,
    #059669,
    #10b981
  );
}

.purple{
  background:linear-gradient(
    135deg,
    #7c3aed,
    #8b5cf6
  );
}

/* SEARCH */

.search-box{
  background:white;
  padding:14px 18px;
  border-radius:14px;
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:25px;
}

.search-box input{
  border:none;
  outline:none;
  width:100%;
}

/* FORM */

.form-card{
  background:white;
  padding:30px;
  border-radius:20px;
  margin-bottom:30px;
}

.form-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
  margin-top:20px;
}

.input-group{
  display:flex;
  flex-direction:column;
}

.input-group label{
  margin-bottom:8px;
  font-weight:600;
}

.input-group input{
  padding:12px;
  border:1px solid #cbd5e1;
  border-radius:10px;
}

/* BUTTONS */

.btn-group{
  margin-top:25px;
  display:flex;
  gap:15px;
}

.save-btn{
  background:#2563eb;
  color:white;
  border:none;
  padding:12px 20px;
  border-radius:10px;
}

.cancel-btn{
  background:#e2e8f0;
  border:none;
  padding:12px 20px;
  border-radius:10px;
}

/* TABLE */

.table-card{
  background:white;
  border-radius:20px;
  overflow:hidden;
}

.table-header{
  padding:20px;
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
}

td{
  padding:16px;
  border-bottom:1px solid #f1f5f9;
}

.code-badge{
  background:#dbeafe;
  color:#1d4ed8;
  padding:6px 12px;
  border-radius:20px;
  font-size:13px;
  font-weight:700;
}

.status{
  padding:6px 12px;
  border-radius:20px;
  font-size:13px;
  font-weight:600;
}

.active{
  background:#dcfce7;
  color:#166534;
}

.action-buttons{
  display:flex;
  gap:10px;
}

.edit-btn{
  border:none;
  background:#facc15;
  color:white;
  width:38px;
  height:38px;
  border-radius:10px;
}

.delete-btn{
  border:none;
  background:#ef4444;
  color:white;
  width:38px;
  height:38px;
  border-radius:10px;
}

</style>
```
