<template>
<v-app-bar flat color="white" class="px-5 navbar">
<!--LOGO-->
<router-link to="/" class="logo">
MIS-COLLEGIO SANTO ANTONIO MARIA ZACCARIA
</router-link>
<v-spacer></v-spacer>
<!--MENU-->
<div class="menu d-flex align-items-center">
<router-link to="/" class="nav-item">Home</router-link>
<router-link to="students" class="nav-item">Students</router-link>
<router-link to="staff" class="nav-item">StaffMembers</router-link>
<router-link to="activities" class="nav-item">Activities</router-link>
<router-link to="about" class="nav-item">About csamz</router-link>
</div>
<v-spacer></v-spacer>
<!--LOGIN BUTTON-->
<router-link to="/login">
<v-btn class="login-btn">
Login
</v-btn>
</router-link>
</v-app-bar>
</template>
<style>
.logo {
font-weight: bold;
font-size: 25px;
text-decoration: none;
color:aqua;
font-style:inherit; /* Dark blue */
}
.nav-item {
margin: 0 15px;
text-decoration: none;
color:rgb(255, 105, 105); /* Grayish tone */
font-weight: 700;
font-style: oblique;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 24px;
}
.nav-item:hover {
color:green; /* Slightly lighter hover color */
}
/*ACTIVE LINK*/
.router-link-active {
color:#435;
border-bottom: 2px solid #b08d;
}
/*LOGIN BUTTON*/
.login-btn {
background: #0b2c;
color: white;
font-size: 18px;
}
</style>