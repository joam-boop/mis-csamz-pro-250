<template>
<!-- NEW: Dynamic dashboard loading -->
<component :is="currentDashboard" />
</template>
<script setup>
import { computed } from "vue"
import StudentDashboard from "./StudentDashboard.vue"
import TeacherDashboard from "./TeacherDashboard.vue"
import DOSDashboard from "./DOSDashboard.vue"
import HTDashboard from "./HTDashboard.vue"
import DoDDashboard from "./DoDDashboard.vue"
import ITDashboard from "./ITDashboard.vue"
import LogisticDashboard from "./LogisticDashboard.vue"
const user = JSON.parse(localStorage.getItem("user")) // NEW
// NEW: Role-based dashboard selection
const currentDashboard = computed(() => {
if (!user) return StudentDashboard
if (user.role === "student") return StudentDashboard
switch (user.jobTitle) {
case "Deputy Head Teacher (DOS)":
return DOSDashboard
case "Head Teacher":
return HTDashboard
case "Head Of Discipline (DOD)":
return DoDDashboard
case "IT Technician":
return ITDashboard
case "Logistician":
return LogisticDashboard
default:
return TeacherDashboard
}
})
</script>