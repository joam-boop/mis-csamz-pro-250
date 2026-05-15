<template>
    <div>
        <h3>MIS Dashboard</h3>
        <div>
            <router-link to="">students</router-link>
            <router-link to="">Teachers</router-link>
            <router-link to="">Head Teacher</router-link>
            <router-link to="">DOS</router-link>
            <router-link to="">IT</router-link>
            <router-link to="">Logistics</router-link>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
const role = ref ("")
onMounted (() => {
    const user = JSON.parse(localStorage.getItem("user"))
if(user) role.value = user.role
})
const logout = () =>{
    localStorage.removeItem("loggedInUser")
    window.location.href = "/login"
}
</script>