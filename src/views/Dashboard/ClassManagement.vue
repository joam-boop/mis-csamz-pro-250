```vue id="0wrll2"
<template>
  <v-app>
    <DashboardSidebar />

    <v-main>
      <div class="class-page">

        <!-- HEADER -->
        <div class="top-header">

          <div>
            <h1 class="page-title">
              <i class="bi bi-building-fill"></i>
              Class Management
            </h1>

            <p class="page-subtitle">
              Create, organize and manage academic classes,
              departments and learning sections professionally.
            </p>
          </div>

          <button
            class="create-btn"
            @click="openForm"
          >
            <i class="bi bi-plus-circle-fill"></i>
            Create Class
          </button>

        </div>

        <!-- STATISTICS -->
        <div class="stats-grid">

          <div class="stat-card blue-card">

            <div class="icon-box">
              <i class="bi bi-buildings-fill"></i>
            </div>

            <div>
              <h2>{{ classes.length }}</h2>
              <p>Total Classes</p>
            </div>

          </div>

          <div class="stat-card green-card">

            <div class="icon-box">
              <i class="bi bi-diagram-3-fill"></i>
            </div>

            <div>
              <h2>{{ departmentCount }}</h2>
              <p>Departments</p>
            </div>

          </div>

          <div class="stat-card purple-card">

            <div class="icon-box">
              <i class="bi bi-mortarboard-fill"></i>
            </div>

            <div>
              <h2>{{ activeClasses }}</h2>
              <p>Active Classes</p>
            </div>

          </div>

          <div class="stat-card orange-card">

            <div class="icon-box">
              <i class="bi bi-calendar-event-fill"></i>
            </div>

            <div>
              <h2>{{ currentAcademicYear }}</h2>
              <p>Academic Year</p>
            </div>

          </div>

        </div>

        <!-- SEARCH -->
        <div class="search-card">

          <i class="bi bi-search"></i>

          <input
            type="text"
            v-model="search"
            placeholder="Search class by name, department or level..."
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

              {{ editing ? 'Update Class' : 'Create New Class' }}
            </h3>

          </div>

          <div class="form-grid">

            <!-- CLASS NAME -->
            <div class="input-group">

              <label>Class Name</label>

              <input
                type="text"
                v-model="form.className"
                placeholder="Example: SOD A"
              />

            </div>

            <!-- DEPARTMENT -->
            <div class="input-group">

              <label>Department</label>

              <input
                type="text"
                v-model="form.department"
                placeholder="Example: Software Development"
              />

            </div>

            <!-- LEVEL -->
            <div class="input-group">

              <label>Level</label>

              <select v-model="form.level">

                <option disabled value="">
                  Select Level
                </option>

                <option>Level 3</option>
                <option>Level 4</option>
                <option>Level 5</option>

              </select>

            </div>

            <!-- ACADEMIC YEAR -->
            <div class="input-group">

              <label>Academic Year</label>

              <input
                type="text"
                v-model="form.academicYear"
                placeholder="2025-2026"
              />

            </div>

            <!-- CAPACITY -->
            <div class="input-group">

              <label>Class Capacity</label>

              <input
                type="number"
                v-model="form.capacity"
                placeholder="40"
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
              @click="saveClass"
            >
              <i class="bi bi-check-circle-fill"></i>

              {{ editing ? 'Update Class' : 'Save Class' }}
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
              Registered Classes
            </h3>

          </div>

          <table>

            <thead>

              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Department</th>
                <th>Level</th>
                <th>Academic Year</th>
                <th>Capacity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              <tr
                v-for="(item,index) in filteredClasses"
                :key="item.id"
              >

                <td>{{ index + 1 }}</td>

                <td>

                  <div class="class-badge">
                    {{ item.className }}
                  </div>

                </td>

                <td>{{ item.department }}</td>

                <td>{{ item.level }}</td>

                <td>{{ item.academicYear }}</td>

                <td>{{ item.capacity }}</td>

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
                      @click="editClass(item)"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </button>

                    <button
                      class="delete-btn"
                      @click="deleteClass(item.id)"
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

const classes = ref([])

const search = ref('')

const showForm = ref(false)

const editing = ref(false)

const currentAcademicYear = ref('2025-2026')

const form = ref({
  id: null,
  className: '',
  department: '',
  level: '',
  academicYear: '',
  capacity: '',
  status: 'Active'
})

onMounted(() => {

  classes.value =
    JSON.parse(
      localStorage.getItem('classes')
    ) || []

})

const departmentCount = computed(() => {

  const departments =
    classes.value.map(
      item => item.department
    )

  return [...new Set(departments)].length

})

const activeClasses = computed(() => {

  return classes.value.filter(
    item => item.status === 'Active'
  ).length

})

const filteredClasses = computed(() => {

  return classes.value.filter(item =>

    item.className
      .toLowerCase()
      .includes(search.value.toLowerCase())

    ||

    item.department
      .toLowerCase()
      .includes(search.value.toLowerCase())

    ||

    item.level
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
    className: '',
    department: '',
    level: '',
    academicYear: '',
    capacity: '',
    status: 'Active'
  }

}

function saveClass(){

  if(
    !form.value.className ||
    !form.value.department
  ){

    alert('Please fill required fields')

    return

  }

  if(editing.value){

    const index =
      classes.value.findIndex(
        item => item.id === form.value.id
      )

    classes.value[index] = {
      ...form.value
    }

  } else {

    classes.value.push({
      ...form.value,
      id: Date.now()
    })

  }

  localStorage.setItem(
    'classes',
    JSON.stringify(classes.value)
  )

  closeForm()

}

function editClass(item){

  form.value = { ...item }

  editing.value = true

  showForm.value = true

}

function deleteClass(id){

  if(confirm('Delete this class?')){

    classes.value =
      classes.value.filter(
        item => item.id !== id
      )

    localStorage.setItem(
      'classes',
      JSON.stringify(classes.value)
    )

  }

}

</script>

<style scoped>

.class-page{
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

.create-btn{
  border:none;
  background:linear-gradient(
    135deg,
    #2563eb,
    #7c3aed
  );
  color:white;
  padding:14px 22px;
  border-radius:14px;
  font-weight:600;
  display:flex;
  align-items:center;
  gap:10px;
  transition:0.3s;
}

.create-btn:hover{
  transform:translateY(-2px);
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
  font-size:32px;
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
  font-size:14px;
}

td{
  padding:16px;
  border-bottom:1px solid #f1f5f9;
}

.class-badge{
  background:#dbeafe;
  color:#1d4ed8;
  padding:8px 14px;
  border-radius:30px;
  font-weight:700;
  display:inline-block;
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
