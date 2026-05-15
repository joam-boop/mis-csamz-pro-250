<template>
<div class="page-bg">
<div class="container py-5">
<!-- HEADER -->
<div class="text-center mb-5 header-text">
<h2>
Staff Registration
</h2>
<p>
MIS-COLLEGIO SANTO ANTONIO MARIA ZACCARIA
</p>
</div>
<!-- FORM -->
<div class="form-card">
<form @submit.prevent="submitForm">
<!-- PERSONAL -->
<h5 class="section-title">
Personal Information
</h5>
<div class="row">
<div class="col-md-4 mb-3">
<label class="form-label">
First Name
</label>
<input
v-model="form.fname"
class="form-control"
placeholder="Enter First Name"
required
/>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Middle Name
</label>
<input
v-model="form.mname"
class="form-control"
placeholder="Optional"
/>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Last Name
</label>
<input
v-model="form.lname"
class="form-control"
placeholder="Enter Last Name"
required
/>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Gender
</label>
<select
v-model="form.gender"
class="form-select"
required
>
<option disabled value="">
Select Gender
</option>
<option>
Male
</option>
<option>
Female
</option>
</select>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Email
</label>
<input
v-model="form.email"
class="form-control"
placeholder="example@gmail.com"
required
/>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Phone Number
</label>
<input
v-model="form.phone"
class="form-control"
placeholder="+2507XXXXXXXX"
required
/>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Password
</label>
<input
type="password"
v-model="form.password"
class="form-control"
required
/>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Confirm Password
</label>
<input
type="password"
v-model="form.confirmPassword"
class="form-control"
required
/>
</div>
</div>
<!-- JOB -->
<h5 class="section-title">
Job Information
</h5>
<div class="row">
<div class="col-md-4 mb-3">
<label class="form-label">
Job Title
</label>
<select
v-model="form.jobTitle"
class="form-select"
required
>
<option disabled value="">
Select Job Title
</option>
<optgroup
v-for="group in jobGroups"
:key="group.label"
:label="group.label"
>
<option
v-for="job in group.roles"
:key="job"
:value="job"
>
{{ job }}
</option>
</optgroup>
</select>
</div>
<div class="col-md-4 mb-3">
<label class="form-label">
Trade
</label>
<select
v-model="form.trade"
class="form-select"
>
<option
v-for="t in trades"
:key="t"
:value="t"
>
{{ t }}
</option>
</select>
</div>
</div>
<!-- SUBMIT -->
<div class="text-end mt-4">
<button class="btn btn-primary px-4">
Register Staff
</button>
</div>
</form>
</div>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue'

const form = ref({
  fname:'',
  mname:'',
  lname:'',
  gender:'',
  email:'',
  phone:'',
  password:'',
  confirmPassword:'',
  jobTitle:'',
  trade:''
})

const jobGroups = [
{
label:"Teaching Staff",
roles:[
"Technician Teacher",
"General Teacher"
]
},
{
label:"Administration Staff",
roles:[
"Head Teacher(HT)",
"Deputy Head Teacher(DoS)",
"Head of Discipline(DoD)",
"Bursar",
"Secretary",
"Patron",
"Matron"
]
},
{
label:"Supporting Staff",
roles:[
"IT Technician",
"Logistician"
]
}
]

const trades = [
"Software Development(SWD)",
"Computer System & Architecture(CSA)",
"Building Construction(BDC)",
"Wood Technology(WOT)",
"Plumbing Technology(PLT)",
"All",
"None"
]

// SUBMIT
function submitForm(){

  // PASSWORD CHECK
  if(
    form.value.password !==
    form.value.confirmPassword
  ){
    alert("Passwords do not match")
    return
  }

  // ROLE
  let role = "teacher"

  if(
    form.value.jobTitle ===
    "Head Teacher(HT)"
  ){
    role = "ht"
  }

  else if(
    form.value.jobTitle ===
    "Deputy Head Teacher(DoS)"
  ){
    role = "dos"
  }

  else if(
    form.value.jobTitle ===
    "Head of Discipline(DoD)"
  ){
    role = "dod"
  }

  else if(
    form.value.jobTitle ===
    "IT Technician"
  ){
    role = "it"
  }

  else if(
    form.value.jobTitle ===
    "Logistician"
  ){
    role = "logistic"
  }

  // NEW STAFF REQUEST
  const newStaff = {
    id: Date.now(),

    firstName: form.value.fname,
    middleName: form.value.mname,
    lastName: form.value.lname,

    gender: form.value.gender,
    email: form.value.email,
    phone: form.value.phone,

    password: form.value.password,

    jobTitle: form.value.jobTitle,
    trade: form.value.trade,

    role: role,

    type: "staff",

    status: "pending"
  }

  // GET OLD STAFF REQUESTS
  const oldRequests =
    JSON.parse(
      localStorage.getItem("staffRequests")
    ) || []

  // ADD NEW REQUEST
  oldRequests.push(newStaff)

  // SAVE STAFF REQUESTS
  localStorage.setItem(
    "staffRequests",
    JSON.stringify(oldRequests)
  )

  // ALSO SAVE IN USERS
  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || []

  users.push(newStaff)

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  )

  alert(
    "Staff Request Submitted Successfully"
  )

  // RESET FORM
  form.value = {
    fname:'',
    mname:'',
    lname:'',
    gender:'',
    email:'',
    phone:'',
    password:'',
    confirmPassword:'',
    jobTitle:'',
    trade:''
  }
}
</script>
<style scoped>
.page-bg{
min-height: 100vh;
background:
url("../../assets/images/teachers.jpg");
background-size: cover;
background-position: center;
position: relative;
font-family: sans-serif;
}
.page-bg::before{
content: "";
position: absolute;
inset: 0;
background: rgba(0,0,0,0.6);
}
.container{
position: relative;
z-index: 2;
}
.header-text h2{
color: red;
font-size: 34px;
font-weight: 700;
}
.header-text p{
color: #ffffff;
font-size: 18px;
font-weight: 500;
}
.form-card{
max-width: 1000px;
margin: auto;
padding: 35px;
border-radius: 20px;
background: rgba(255,255,255,0.25);
backdrop-filter: blur(10px);
}
.section-title{
font-size: 22px;
font-weight: 700;
color: #d4f307;
margin-bottom: 20px;
}
.form-label{
font-size: 16px;
font-weight: 600;
color: white;
}
.form-control,
.form-select{
font-size: 16px;
padding: 10px;
border-radius: 12px;
border: none;
background: rgba(255,255,255,0.9);
}
.form-control:focus,
.form-select:focus{
box-shadow: none;
border: 2px solid #0b7ef1;
}
.btn-primary{
background: #0b7ef1;
border: none;
font-weight: 600;
border-radius: 10px;
}
.btn-primary:hover{
background: #095cb5;
}
</style>