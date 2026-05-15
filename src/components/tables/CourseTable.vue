```vue id="n4o1k9"
<template>

<div class="course-wrapper">

  <!-- =========================
  HEADER
  ========================== -->

  <div class="top-header">

    <div>

      <h1>
        Course Management
      </h1>

      <p>
        Manage all school courses and academic programs professionally.
      </p>

    </div>

    <!-- ADD BUTTON -->
    <button
      class="add-btn"
      @click="openModal"
    >

      <i class="bi bi-plus-circle-fill"></i>

      Add Course

    </button>

  </div>

  <!-- =========================
  STATISTICS
  ========================== -->

  <div class="stats-grid">

    <div class="stat-card">

      <i class="bi bi-book-half"></i>

      <div>

        <h2>
          {{ courses.length }}
        </h2>

        <p>
          Total Courses
        </p>

      </div>

    </div>

    <div class="stat-card">

      <i class="bi bi-diagram-3-fill"></i>

      <div>

        <h2>
          {{ uniqueDepartments }}
        </h2>

        <p>
          Departments
        </p>

      </div>

    </div>

    <div class="stat-card">

      <i class="bi bi-person-workspace"></i>

      <div>

        <h2>
          {{ assignedTeachers }}
        </h2>

        <p>
          Assigned Teachers
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
      placeholder="Search course..."
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

          <th>Course Name</th>

          <th>Course Code</th>

          <th>Department</th>

          <th>Teacher</th>

          <th>Status</th>

          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        <tr
          v-for="(course,index) in filteredCourses"
          :key="course.id"
        >

          <td>
            {{ index + 1 }}
          </td>

          <td>
            {{ course.name }}
          </td>

          <td>

            <span class="course-code">

              {{ course.code }}

            </span>

          </td>

          <td>
            {{ course.department }}
          </td>

          <td>
            {{ course.teacher }}
          </td>

          <td>

            <span
              class="status-badge"
            >

              Active

            </span>

          </td>

          <td>

            <button
              class="edit-btn"
              @click="editCourse(course)"
            >

              <i class="bi bi-pencil-square"></i>

            </button>

            <button
              class="delete-btn"
              @click="deleteCourse(course.id)"
            >

              <i class="bi bi-trash-fill"></i>

            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <!-- =========================
  MODAL
  ========================== -->

  <div
    class="modal-overlay"
    v-if="showModal"
  >

    <div class="modal-card">

      <h2>

        {{ isEditing
          ? 'Edit Course'
          : 'Add New Course'
        }}

      </h2>

      <!-- FORM -->

      <div class="form-group">

        <label>
          Course Name
        </label>

        <input
          type="text"
          v-model="courseForm.name"
        />

      </div>

      <div class="form-group">

        <label>
          Course Code
        </label>

        <input
          type="text"
          v-model="courseForm.code"
        />

      </div>

      <div class="form-group">

        <label>
          Department
        </label>

        <input
          type="text"
          v-model="courseForm.department"
        />

      </div>

      <div class="form-group">

        <label>
          Teacher
        </label>

        <input
          type="text"
          v-model="courseForm.teacher"
        />

      </div>

      <!-- ACTIONS -->

      <div class="modal-actions">

        <button
          class="cancel-btn"
          @click="closeModal"
        >

          Cancel

        </button>

        <button
          class="save-btn"
          @click="saveCourse"
        >

          Save Course

        </button>

      </div>

    </div>

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
// DATA
// =========================

const courses = ref([])

const search = ref('')

const showModal = ref(false)

const isEditing = ref(false)

const editingId = ref(null)

// =========================
// FORM
// =========================

const courseForm = ref({

  name:'',
  code:'',
  department:'',
  teacher:''

})

// =========================
// LOAD DATA
// =========================

onMounted(() => {

  courses.value =
  getData('courses')

})

// =========================
// FILTER
// =========================

const filteredCourses =
computed(() => {

  return courses.value.filter(course =>

    course.name
    .toLowerCase()
    .includes(
      search.value.toLowerCase()
    )

  )

})

// =========================
// STATISTICS
// =========================

const uniqueDepartments =
computed(() => {

  return new Set(

    courses.value.map(
      c => c.department
    )

  ).size

})

const assignedTeachers =
computed(() => {

  return new Set(

    courses.value.map(
      c => c.teacher
    )

  ).size

})

// =========================
// OPEN MODAL
// =========================

function openModal(){

  showModal.value = true

}

// =========================
// CLOSE MODAL
// =========================

function closeModal(){

  showModal.value = false

  isEditing.value = false

  editingId.value = null

  courseForm.value = {

    name:'',
    code:'',
    department:'',
    teacher:''

  }

}

// =========================
// SAVE COURSE
// =========================

function saveCourse(){

  if(

    !courseForm.value.name ||
    !courseForm.value.code

  ){

    alert(
      'Please fill all fields'
    )

    return

  }

  if(isEditing.value){

    const index =
    courses.value.findIndex(

      c => c.id === editingId.value

    )

    courses.value[index] = {

      ...courseForm.value,
      id:editingId.value

    }

  }else{

    courses.value.push({

      id:Date.now(),

      ...courseForm.value

    })

  }

  saveData(
    'courses',
    courses.value
  )

  closeModal()

}

// =========================
// EDIT COURSE
// =========================

function editCourse(course){

  courseForm.value = {

    ...course

  }

  editingId.value =
  course.id

  isEditing.value = true

  showModal.value = true

}

// =========================
// DELETE COURSE
// =========================

function deleteCourse(id){

  const confirmDelete =
  confirm(
    'Delete this course?'
  )

  if(confirmDelete){

    courses.value =
    courses.value.filter(
      c => c.id !== id
    )

    saveData(
      'courses',
      courses.value
    )

  }

}

</script>

<style scoped>

/* =========================
WRAPPER
========================= */

.course-wrapper{

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

  margin-top:6px;

}

/* =========================
BUTTON
========================= */

.add-btn{

  border:none;

  background:#2563eb;

  color:white;

  padding:14px 20px;

  border-radius:12px;

  font-weight:600;

  display:flex;

  align-items:center;

  gap:10px;

  transition:0.3s;

}

.add-btn:hover{

  background:#1d4ed8;

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

  padding:25px;

  border-radius:18px;

  display:flex;

  align-items:center;

  gap:18px;

  box-shadow:0 8px 20px rgba(0,0,0,0.06);

}

.stat-card i{

  font-size:35px;

  color:#2563eb;

}

.stat-card h2{

  margin:0;

  font-size:30px;

}

.stat-card p{

  color:#64748b;

}

/* =========================
SEARCH
========================= */

.search-box{

  background:white;

  padding:15px 18px;

  border-radius:14px;

  display:flex;

  align-items:center;

  gap:12px;

  margin-bottom:25px;

  box-shadow:0 5px 15px rgba(0,0,0,0.05);

}

.search-box input{

  width:100%;

  border:none;

  outline:none;

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

.course-code{

  background:#dbeafe;

  color:#2563eb;

  padding:8px 14px;

  border-radius:20px;

  font-size:13px;

  font-weight:700;

}

.status-badge{

  background:#dcfce7;

  color:#16a34a;

  padding:8px 14px;

  border-radius:20px;

  font-size:13px;

  font-weight:700;

}

/* =========================
BUTTONS
========================= */

.edit-btn,
.delete-btn{

  border:none;

  width:40px;

  height:40px;

  border-radius:10px;

  color:white;

  margin-right:10px;

}

.edit-btn{

  background:#2563eb;

}

.delete-btn{

  background:#dc2626;

}

/* =========================
MODAL
========================= */

.modal-overlay{

  position:fixed;

  inset:0;

  background:rgba(0,0,0,0.4);

  display:flex;

  justify-content:center;

  align-items:center;

}

.modal-card{

  width:500px;

  background:white;

  padding:30px;

  border-radius:20px;

}

.modal-card h2{

  margin-bottom:25px;

}

.form-group{

  margin-bottom:18px;

}

.form-group label{

  display:block;

  margin-bottom:8px;

  font-weight:600;

}

.form-group input{

  width:100%;

  padding:14px;

  border:1px solid #cbd5e1;

  border-radius:10px;

  outline:none;

}

.modal-actions{

  display:flex;

  justify-content:flex-end;

  gap:15px;

  margin-top:25px;

}

.cancel-btn,
.save-btn{

  border:none;

  padding:12px 18px;

  border-radius:10px;

  font-weight:600;

}

.cancel-btn{

  background:#e2e8f0;

}

.save-btn{

  background:#2563eb;

  color:white;

}

</style>
```
