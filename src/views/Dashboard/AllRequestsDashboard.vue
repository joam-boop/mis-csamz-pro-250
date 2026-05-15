<template>
  <div class="dashboard">

    <h2>All Requests (Student + Staff)</h2>

    <!-- FILTER -->
    <div class="filters">
      <button @click="filter='all'">All</button>
      <button @click="filter='pending'">Pending</button>
      <button @click="filter='valid'">Approved</button>
      <button @click="filter='invalid'">Rejected</button>
    </div>

    <!-- CARDS -->
    <div class="cards">
      <div v-for="req in filtered" :key="req.id" class="card">

        <h3>{{ req.firstName }} {{ req.lastName }}</h3>
        <p>Type: {{ req.type }}</p>
        <p>Status: {{ req.status }}</p>

        <div v-if="req.status === 'pending'">
          <button @click="approve(req)">Approve</button>
          <button @click="reject(req)">Reject</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
const all = ref([])
const filter = ref("all")

onMounted(()=>{
  const students = JSON.parse(localStorage.getItem("studentRequests") || "[]")
  const staff = JSON.parse(localStorage.getItem("staffRequests") || "[]")

  // add type
  const studentData = students.map(s => ({...s, type:"student"}))
  const staffData = staff.map(s => ({...s, type:"staff"}))

  all.value = [...studentData, ...staffData]
})

const filtered = computed(()=>{
  if(filter.value === "all") return all.value
  return all.value.filter(r => r.status === filter.value)
})

function updateStorage(){
  const students = all.value.filter(r => r.type === "student")
  const staff = all.value.filter(r => r.type === "staff")

  localStorage.setItem("studentRequests", JSON.stringify(students))
  localStorage.setItem("staffRequests", JSON.stringify(staff))
}

function approve(req){
  req.status = "valid"
  updateStorage()
}

function reject(req){
  req.status = "invalid"
  updateStorage()
}
</script>