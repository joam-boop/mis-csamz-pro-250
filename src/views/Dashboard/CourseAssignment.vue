```vue id="4vws6v"
<template>
  <v-app>
    <DashboardSidebar />

    <v-main>
      <div class="assignment-page">

        <!-- HEADER -->
        <div class="top-header">

          <div>
            <h1 class="page-title">
              <i class="bi bi-diagram-3-fill"></i>
              Course Assignment Management
            </h1>

            <p class="page-subtitle">
              Assign teachers to classes and courses professionally
              using MIS-CSAMZ PRO.
            </p>
          </div>

          <button
            class="assign-btn"
            @click="openForm"
          >
            <i class="bi bi-plus-circle-fill"></i>
            New Assignment
          </button>

        </div>

        <!-- STATISTICS -->
        <div class="stats-grid">

          <div class="stat-card blue-card">

            <div class="icon-box">
              <i class="bi bi-diagram-3-fill"></i>
            </div>

            <div>
              <h2>{{ assignments.length }}</h2>
              <p>Total Assignments</p>
            </div>

          </div>

          <div class="stat-card green-card">

            <div class="icon-box">
              <i class="bi bi-book-fill"></i>
            </div>

            <div>
              <h2>{{ uniqueCourses }}</h2>
              <p>Assigned Courses</p>
            </div>

          </div>

          <div class="stat-card purple-card">

            <div class="icon-box">
              <i class="bi bi-person-workspace"></i>
            </div>

            <div>
              <h2>{{ uniqueTeachers }}</h2>
              <p>Teachers</p>
            </div>

          </div>

          <div class="stat-card orange-card">

            <div class="icon-box">
              <i class="bi bi-building"></i>
            </div>

            <div>
              <h2>{{ uniqueClasses }}</h2>
              <p>Classes</p>
            </div>

          </div>

        </div>

        <!-- SEARCH -->
        <div class="search-card">

          <i class="bi bi-search"></i>

          <input
            type="text"
            v-model="search"
            placeholder="Search teacher, course or class..."
          />

        </div>

        <!-- FORM -->
        <div
          v-if="showForm"
          class="form-container"
        >

          <div class="form-header">

            <h3>
              <i class="bi bi-pencil-square"></i>

              {{ editing ? 'Update Assignment' : 'Create Assignment' }}
            </h3>

          </div>

          <div class="form-grid">

            <!-- TEACHER -->
            <div class="input-group">

              <label>Teacher Name</label>

              <input
                type="text"
                v-model="form.teacherName"
                placeholder="Enter teacher name"
              />

            </div>

            <!-- COURSE -->
            <div class="input-group">

              <label>Course Name</label>

              <input
                type="text"
                v-model="form.courseName"
                placeholder="Enter course name"
              />

            </div>

            <!-- COURSE CODE -->
            <div class="input-group">

              <label>Course Code</label>

              <input
                type="text"
                v-model="form.courseCode"
                placeholder="CSC204"
              />

            </div>

            <!-- CLASS -->
            <div class="input-group">

              <label>Class Name</label>

              <input
                type="text"
                v-model="form.className"
                placeholder="SOD A"
              />

            </div>

            <!-- DEPARTMENT -->
            <div class="input-group">

              <label>Department</label>

              <input
                type="text"
                v-model="form.department"
                placeholder="Software Development"
              />

            </div>

            <!-- STATUS -->
            <div class="input-group">

              <label>Status</label>

              <select v-model="form.status">

                <option>Active</option>
                <option>Inactive</option>

              </select>

            </div>

          </div>

          <!-- BUTTONS -->
          <div class="button-group">

            <button
              class="save-btn"
              @click="saveAssignment"
            >
              <i class="bi bi-check-circle-fill"></i>

              {{ editing ? 'Update Assignment' : 'Save Assignment' }}
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
        <div class="table-container">

          <div class="table-header">

            <h3>
              <i class="bi bi-table"></i>
              Course Assignments
            </h3>

          </div>

          <table>

            <thead>

              <tr>
                <th>#</th>
                <th>Teacher</th>
                <th>Course</th>
                <th>Code</th>
                <th>Class</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              <tr
                v-for="(item,index) in filteredAssignments"
                :key="item.id"
              >

                <td>{{ index + 1 }}</td>

                <td>

                  <div class="teacher-badge">
                    {{ item.teacherName }}
                  </div>

                </td>

                <td>{{ item.courseName }}</td>

                <td>

                  <span class="course-code">
                    {{ item.courseCode }}
                  </span>

                </td>

                <td>{{ item.className }}</td>

                <td>{{ item.department }}</td>

                <td>

                  <span
                    class="status"
                    :class="item.status.toLowerCase()"
                  >
                    {{ item.status }}
                  </span>

                </td>

                <td>

                  <div class="action-buttons">

                    <button
                      class="edit-btn"
                      @click="editAssignment(item)"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </button>

                    <button
                      class="delete-btn"
                      @click="deleteAssignment(item.id)"
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

import {
  ref,
  computed,
  onMounted
} from 'vue'

const assignments = ref([])

const search = ref('')

const showForm = ref(false)

const editing = ref(false)

const form = ref({
  id: null,
  teacherName: '',
  courseName: '',
  courseCode: '',
  className: '',
  department: '',
  status: 'Active'
})

onMounted(() => {

  assignments.value =
    JSON.parse(
      localStorage.getItem(
        'courseAssignments'
      )
    ) || []

})

const uniqueCourses = computed(() => {

  const courses =
    assignments.value.map(
      item => item.courseName
    )

  return [...new Set(courses)].length

})

const uniqueTeachers = computed(() => {

  const teachers =
    assignments.value.map(
      item => item.teacherName
    )

  return [...new Set(teachers)].length

})

const uniqueClasses = computed(() => {

  const classes =
    assignments.value.map(
      item => item.className
    )

  return [...new Set(classes)].length

})

const filteredAssignments = computed(() => {

  return assignments.value.filter(item =>

    item.teacherName
      .toLowerCase()
      .includes(search.value.toLowerCase())

    ||

    item.courseName
      .toLowerCase()
      .includes(search.value.toLowerCase())

    ||

    item.className
      .toLowerCase()
      .includes(search.value.toLowerCase())

  )

})

function openForm(){

  showForm.value = true

}

function closeForm(){

  showForm.value = false

  editing.value = false

  resetForm()

}

function resetForm(){

  form.value = {
    id: null,
    teacherName: '',
    courseName: '',
    courseCode: '',
    className: '',
    department: '',
    status: 'Active'
  }

}

function saveAssignment(){

  if(
    !form.value.teacherName ||
    !form.value.courseName ||
    !form.value.className
  ){

    alert('Please fill all required fields')

    return

  }

  if(editing.value){

    const index =
      assignments.value.findIndex(
        item => item.id === form.value.id
      )

    assignments.value[index] = {
      ...form.value
    }

  } else {

    assignments.value.push({
      ...form.value,
      id: Date.now()
    })

  }

  localStorage.setItem(
    'courseAssignments',
    JSON.stringify(assignments.value)
  )

  closeForm()

}

function editAssignment(item){

  form.value = { ...item }

  editing.value = true

  showForm.value = true

}

function deleteAssignment(id){

  if(confirm('Delete this assignment?')){

    assignments.value =
      assignments.value.filter(
        item => item.id !== id
      )

    localStorage.setItem(
      'courseAssignments',
      JSON.stringify(assignments.value)
    )

  }

}

</script>

<style scoped>

.assignment-page{
  padding:30px;
  background:#f8fafc;
  min-height:100vh;
}

/* HEADER */

.top-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  margin-bottom:30px;
}

.page-title{
  font-size:34px;
  font-weight:800;
  color:#0f172a;
}

.page-subtitle{
  margin-top:10px;
  color:#64748b;
}

.assign-btn{
  border:none;
  background:linear-gradient(
    135deg,
    #2563eb,
    #7c3aed
  );
  color:white;
  padding:14px 24px;
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
    repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
  margin-bottom:30px;
}

.stat-card{
  border-radius:20px;
  padding:25px;
  color:white;
  display:flex;
  align-items:center;
  gap:20px;
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
  font-size:30px;
}

.blue-card{
  background:linear-gradient(
    135deg,
    #2563eb,
    #3b82f6
  );
}

.green-card{
  background:linear-gradient(
    135deg,
    #059669,
    #10b981
  );
}

.purple-card{
  background:linear-gradient(
    135deg,
    #7c3aed,
    #8b5cf6
  );
}

.orange-card{
  background:linear-gradient(
    135deg,
    #ea580c,
    #f97316
  );
}

/* SEARCH */

.search-card{
  background:white;
  border-radius:16px;
  padding:16px 20px;
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:25px;
}

.search-card input{
  width:100%;
  border:none;
  outline:none;
}

/* FORM */

.form-container{
  background:white;
  border-radius:20px;
  padding:30px;
  margin-bottom:30px;
}

.form-header{
  margin-bottom:25px;
}

.form-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.input-group{
  display:flex;
  flex-direction:column;
}

.input-group label{
  margin-bottom:8px;
  font-weight:600;
}

.input-group input,
.input-group select{
  padding:14px;
  border:1px solid #cbd5e1;
  border-radius:12px;
  outline:none;
}

/* BUTTONS */

.button-group{
  margin-top:25px;
  display:flex;
  gap:15px;
}

.save-btn{
  border:none;
  background:#2563eb;
  color:white;
  padding:13px 22px;
  border-radius:12px;
  font-weight:600;
}

.cancel-btn{
  border:none;
  background:#e2e8f0;
  padding:13px 22px;
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

.teacher-badge{
  background:#dbeafe;
  color:#1d4ed8;
  padding:8px 14px;
  border-radius:30px;
  font-weight:700;
  display:inline-block;
}

.course-code{
  background:#ede9fe;
  color:#6d28d9;
  padding:7px 12px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.status{
  padding:8px 14px;
  border-radius:30px;
  font-size:13px;
  font-weight:700;
}

.active{
  background:#dcfce7;
  color:#166534;
}

.inactive{
  background:#fee2e2;
  color:#991b1b;
}

.action-buttons{
  display:flex;
  gap:10px;
}

.edit-btn{
  width:38px;
  height:38px;
  border:none;
  border-radius:10px;
  background:#facc15;
  color:white;
}

.delete-btn{
  width:38px;
  height:38px;
  border:none;
  border-radius:10px;
  background:#ef4444;
  color:white;
}

</style>
```
