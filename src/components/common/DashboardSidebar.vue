<template>
<!-- =========================
 NAVBAR
 ========================== -->

 <v-app-bar app flat class="main-navbar">

 <!-- LEFT -->
 <div class="navbar-left">

 <!-- LOGO -->
 <div class="logo-circle">

 <i class="bi bi-mortarboard-fill"></i>

 </div>

 <!-- TITLE -->
 <div class="joam">

 <h2>
 MIS-COLLEGIO SANTO ANTONIO MARIA ZACCARIA
 </h2>

 <p>
 School Management Information System
 </p>

 </div>

 </div>

 <v-spacer></v-spacer>

 <!-- USER -->
 <div class="user-card">

 <div class="avatar">

 {{ firstLetter }}

 </div>

 <div class="user-info">

 <h4>

 Welcome,

 <span>

 {{ fullName }}

 </span>

 </h4>

 <small>

 Logged in as

 <b>
 {{ role.toUpperCase() }}
 </b>

 </small>

 </div>

 </div>

 <!-- MENUS -->
 <div class="menu-container">

 <router-link
 to="/dashboard"
 class="joanna"
 >

 <i class="joam"></i>

 Dashboard

 </router-link>

 
 <!-- STUDENT -->
 <template v-if="role === 'student'">

 <router-link
 to="/courses"
 class="nav-link-custom"
 >

 <i class="bi bi-book-fill"></i>

 Courses

 </router-link>

 <router-link
 to="/results"
 class="nav-link-custom"
 >

 <i class="bi bi-bar-chart-fill"></i>

 Results

 </router-link>

 </template>

 <!-- TEACHER -->
 <template v-if="role === 'teacher'">

 <router-link
 to="/classes"
 class="nav-link-custom"
 >

 <i class="bi bi-easel-fill"></i>

 Classes

 </router-link>

 <router-link
 to="/marks"
 class="nav-link-custom"
 >

 <i class="bi bi-pencil-square"></i>

 Marks

 </router-link>

 </template>

 </div>
<div class="menu-links">

  <router-link to="/headteacher-dashboard" class="nav-link">
    <i class="bi bi-speedometer2"></i>
    Dashboard
  </router-link>

  <router-link to="/exams" class="nav-link">
    <i class="bi bi-file-earmark-text-fill"></i>
    Exams
  </router-link>

  <router-link to="/timetable" class="nav-link">
    <i class="bi bi-table"></i>
    Timetable
  </router-link>


  <router-link
    to="/reports"
    class="nav-link"
  >
    <i class="bi bi-file-earmark-bar-graph-fill"></i>

    Reports
  </router-link>

  <router-link
    to="/messages"
    class="nav-link"
  >
    <i class="bi bi-chat-dots-fill"></i>

    Messages
  </router-link>
</div>
<!-- =========================
DOS MANAGEMENT MODULES
========================= -->
<div>
<template v-if="role.toLowerCase() === 'dos'">

  <!-- COURSE MANAGEMENT -->
  <router-link
    to="/course-management"
    class="nav-link"
  >
    <i class="bi bi-book-half"></i>
    Courses
  </router-link>

  <!-- CLASS MANAGEMENT -->
  <router-link
    to="/class-management"
    class="nav-link"
  >
    <i class="bi bi-building"></i>
    Classes
  </router-link>

  <!-- COURSE ASSIGNMENT -->
  <router-link
    to="/course-assignment"
    class="nav-link"
  >
    <i class="bi bi-diagram-3-fill"></i>
    Assignments
  </router-link>

</template>

<!-- =========================
TEACHER MANAGEMENT
========================= -->

<template v-if="role === 'teacher'">

  <!-- ATTENDANCE MANAGEMENT -->
  <router-link
    to="/attendance-management"
    class="nav-link"
  >
    <i class="bi bi-calendar2-check-fill"></i>
    Attendance Manager
  </router-link>

</template>
</div>
 <!-- LOGOUT -->
 <button
 class="logout-btn"
 @click="logout"
 >

 <i class="bi bi-box-arrow-right"></i>

 Logout

 </button>

 </v-app-bar>

 <!-- =========================
 BODY
 ========================== -->

 <div class="dashboard-body">

 <div class="hero-card">

 <div class="row align-items-center">

 <!-- LEFT -->
 <div class="col-lg-8">

 <div class="badge-custom">

 SMART SCHOOL DASHBOARD

 </div>

 <h1>

 Welcome Back

 <span>

 {{ fullName }}

 </span>

 </h1>

 <p>

 Manage school operations,
 attendance, examinations,
 timetable, teachers,
 assessments and students
 professionally using
 MIS-CSAMZ PRO.

 </p>

 <!-- CARDS -->
 <div class="quick-actions">

 <div class="mini-card">

 <i class="bi bi-people-fill"></i>

 <h5>
 Students
 </h5>

 </div>

 <div class="mini-card">

 <i class="bi bi-person-workspace"></i>

 <h5>
 Teachers
 </h5>

 </div>

 <div class="mini-card">

 <i class="bi bi-calendar-check-fill"></i>

 <h5>
 Attendance
 </h5>

 </div>

 <div class="mini-card">

 <i class="bi bi-file-earmark-text-fill"></i>

 <h5>
 Exams
 </h5>

 </div>

 </div>

 </div>

 <!-- RIGHT -->
 <div
 class="col-lg-4 text-center"
 >

 <div class="hero-icon">

 <i class="bi bi-mortarboard-fill"></i>

 </div>

 </div>

 </div>

 </div>

 </div>

</template>

<script setup>

import { ref,computed,onMounted} from 'vue'

import {useRouter} from 'vue-router'

const router = useRouter()
const role = ref('')
const fullName = ref('')
const firstLetter = computed(() => {

 return fullName.value
 ? fullName.value.charAt(0)
 : 'U'
})

onMounted(() => {
const user = JSON.parse(

 localStorage.getItem(
 'loggedInUser'
 )

)

if(user){

 role.value =
 user.role || ''

 fullName.value =
 `${user.firstName} ${user.lastName}`

}

})

function logout(){

 localStorage.removeItem(
 'loggedInUser'
 )

 router.push('/login')

}

</script>

<style scoped>


/* =========================
GLOBAL
========================= */
body {
  background: #f8fafc;
  font-family: "Poppins", sans-serif;
  color: #0f172a;
}

/* =========================
NAVBAR
========================= */

:deep(.v-toolbar),
:deep(.v-app-bar) {
  background: #1e3a8a !important;
  color: white !important;
}

.main-navbar {
  background: #1e3a8a;
  padding: 0 25px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* LEFT */

.navbar-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* LOGO */

.logo-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2563eb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
}

.logo-text h2 {
  margin: 0;
  color: darkgreen;
  font-size: 20px;
  font-weight: 700;
}

.logo-text p {
  margin: 0;
  color: orchid;
  font-size: 13px;
}

/* USER */

.user-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: brown;
  padding: 8px 12px;
  border-radius: 12px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.user-info h4 {
  margin: 0;
  color: white;
  font-size: 25px;
}

.user-info small {
  color: #e0e7ff;
}

/* =========================
MENU LINKS
========================= */

.menu-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link-custom {
  text-decoration: none !important;
  color: black !important ;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.nav-link-custom:hover {
  background: green !important;
}

.router-link-active {
  background: #2563eb !important;
  color: white !important;
}

/* =========================
LOGOUT BUTTON
========================= */

.logout-btn {
  border: none;
  background: #ef4444;
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
}

.logout-btn:hover {
  background: #dc2626;
}

/* =========================
BODY
========================= */

.dashboard-body {
  margin-top: 100px;
  padding: 20px;
  
}

/* =========================
HERO CARD
========================= */

.hero-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.badge-custom {
  display: inline-block;
  background: #e0e7ff;
  color: #1e3a8a;
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 15px;
  font-weight: 600;
}

.hero-card h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.hero-card h1 span {
  color: #2563eb;
}

.hero-card p {
  color: #475569;
  line-height: 1.6;
}

/* =========================
QUICK ACTIONS
========================= */

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 25px;
}

.mini-card {
  background: white;
  padding: 18px;
  border-radius: 14px;
  min-width: 140px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: 0.2s;
}

.mini-card:hover {
  transform: translateY(-4px);
}

.mini-card i {
  font-size: 26px;
  color: #2563eb;
  margin-bottom: 8px;
}

.mini-card h5 {
  margin: 0;
  color: #0f172a;
}

/* =========================
ICON
========================= */

.hero-icon {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #e0e7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.hero-icon i {
  font-size: 80px;
  color: #2563eb;
}
.joanna{
  text-decoration: none;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.joanna:hover{
  background: yellowgreen;
}
.joam{
  color: #111;
}
.joam:hover{
  background: green;
}
.menu-links{
  display:flex;
  align-items:center;
  gap:25px;

  margin-left:30px;
  flex-wrap:wrap;
}

.nav-link{
  text-decoration:none;
  color:black;
  font-size:15px;
  font-weight:600;

  display:flex;
  align-items:center;
  gap:8px;

  padding:10px 14px;
  border-radius:10px;

  transition:0.3s;
}

.nav-link:hover{
  background:blue;
}
</style>