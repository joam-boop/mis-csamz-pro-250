<template>
<div class="login-page">
<div class="overlay">
<div class="container d-flex justify-content-center align-items-center">
<div class="login-card">
<!-- TITLE -->
<h2 class="title">
MIS LOGIN
</h2>
<!-- USER TYPE -->
<select
v-model="userType"
class="input"
>
<option disabled value="">
Select User Type
</option>
<option value="student">
Student
</option>
<option value="staff">
Staff
</option>
<option value="dos">
DOS
</option>

<option value="ht">
Head Teacher
</option>
</select>
<!-- USERNAME -->
<input
v-model="username"
class="input"
:placeholder="
userType === 'student'
?
'student email'
:
'Email or Phone'
"
>
<!-- PASSWORD -->
<input
v-model="password"
type="password"
class="input"
placeholder="Enter Password"
/>
<!-- LOGIN -->
<button
class="btn-login"
@click="loginUser"
>
Login
</button>
<!-- LINKS -->
<div class="links">
<router-link to="">
Forgot Password?
</router-link>
<router-link to="/students">
Student Registration
</router-link>
<router-link to="/staff">
Staff Registration
</router-link>
</div>
</div>
</div>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { admins } from "../../store/admin"

const router = useRouter()

const userType = ref("")
const username = ref("")
const password = ref("")

// LOGIN
function loginUser(){

  // VALIDATION
  if(
    !userType.value ||
    !username.value ||
    !password.value
  ){
    alert("Please fill all fields")
    return
  }

  // ADMIN LOGIN
  if(
    userType.value === "dos" ||
    userType.value === "ht"
  ){

    const admin = admins.find(
      a =>
        a.username === username.value &&
        a.password === password.value &&
        a.role === userType.value
    )

    if(!admin){
      alert("Invalid Admin Credentials")
      return
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(admin)
    )

    if(admin.role === "dos"){
      router.push("/dos-dashboard")
    }

    else if(admin.role === "ht"){
      router.push("/ht-dashboard")
    }

    return
  }

  // USERS
  const users = JSON.parse(
    localStorage.getItem("users")
  ) || []

  // FIND USER
  const foundUser = users.find(user => {
// STUDENT LOGIN WITH EMAIL
if(userType.value === "student"){

  return (
    user.email === username.value &&
    user.password === password.value
  )
}

    // STAFF LOGIN
    else{

      return (
        (
          user.email === username.value ||
          user.phone === username.value
        )
        &&
        user.password === password.value
      )
    }
  })

  // INVALID USER
  if(!foundUser){
    alert("Invalid Credentials")
    return
  }

  // SAVE LOGGED USER
  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({
      firstName:
        foundUser.firstName
        ? foundUser.firstName
        : foundUser.fname,

      lastName:
        foundUser.lastName
        ? foundUser.lastName
        : foundUser.lname,

      role: foundUser.role
    })
  )

  // ROLE
  const role = foundUser.role.toLowerCase()

  // REDIRECT
  if(role === "student"){
    router.push("/student-dashboard")
  }

  else if(role === "teacher"){
    router.push("/teacher-dashboard")
  }

  else if(role === "ht"){
    router.push("/ht-dashboard")
  }

  else if(role === "dos"){
    router.push("/dos-dashboard")
  }

  else if(role === "dod"){
    router.push("/dod-dashboard")
  }

  else if(role === "it"){
    router.push("/it-dashboard")
  }

  else if(role === "logistic"){
    router.push("/logistic-dashboard")
  }

  else{
    router.push("/teacher-dashboard")
  }
}
</script>
<style>
.login-page{
  height:100vh;
  width:100%;
  position:relative;

  background:
    linear-gradient(rgba(11,44,77,0.6), rgba(11,44,77,0.6)),
    url("src/assets/images/login.jpg") center/cover no-repeat;

  display:flex;
  justify-content:center;
  align-items:center;

  font-family:"Poppins", sans-serif;
}

/* OVERLAY (soft dark layer) */
.overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.4);
  z-index:1;
}

/* CONTAINER CENTER */
.container{
  position:relative;
  z-index:2;
}

/* LOGIN CARD (Glass effect) */
.login-card{
  width:360px;

  background:rgba(255,255,255,0.1);
  backdrop-filter:blur(15px);

  padding:40px 30px;
  border-radius:20px;

  text-align:center;

  box-shadow:0 10px 40px rgba(0,0,0,0.4);
  border:1px solid rgba(255,255,255,0.2);
}

/* TITLE */
.title{
  font-weight:600;
  font-size:22px;
  color:black;
  margin-bottom:25px;
}

/* INPUT */
.input{
  width:100%;
  padding:12px 15px;
  margin:10px 0;

  border-radius:10px;
  border:none;

  outline:none;
  font-size:14px;

  background:rgba(255,255,255,0.3);
  transition:0.3s;
}

.input:focus{
  box-shadow:0 0 0 2px #00b4d8;
}

/* BUTTON */
.btn-login{
  width:100%;
  padding:12px;

  background:linear-gradient(135deg,#00b4d8,#0077b6);
  color:purple;

  border:none;
  border-radius:10px;

  cursor:pointer;
  font-weight:600;
  margin-top:15px;

  transition:0.3s;
}

.btn-login:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 20px rgba(0,0,0,0.3);
}

/* LINKS */
.links{
  margin-top:18px;
  font-size:14px;
}

.links a{
  display:block;
  margin-top:8px;

  color:#ffffff;
  text-decoration:none;
  opacity:0.8;

  transition:0.3s;
}

.links a:hover{
  opacity:1;
  text-decoration:underline;
}
</style>