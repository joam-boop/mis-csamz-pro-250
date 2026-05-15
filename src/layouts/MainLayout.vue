<template>
<div>
<!-- WEBSITE NAVBAR -->
<Navbar v-if="!isDashboardPage" />
<!-- PAGE -->
<router-view />
<!-- FOOTER -->
<Footer />
</div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/common/Navbar.vue'
import Footer from '../components/common/Footer.vue'
const route = useRoute()
const isDashboardPage = computed(() => {
return route.path.includes('dashboard')
})
</script>