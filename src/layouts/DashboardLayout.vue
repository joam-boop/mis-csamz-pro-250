<template>
<div class="d-flex">
<DashboardSidebar />
<div class="w-100 p-3">
<router-view />
</div>
</div>
</template>
<script setup>
import DashboardSidebar from
"../components/common/DashboardSidebar.vue"
</script>
