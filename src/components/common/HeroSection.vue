<template>
  <div class="slider">
    <img v-for="(img, i) in images" 
         :key="i" 
         :src="img" 
         :class="{ active: i === index }" />

    <div class="overlay">
      <h1>Fostering Excellence Through Academic Studies</h1>
      <p>Join us in upcoming next academic year 2026-2027</p>
      <button>EXPLORE PROGRAMS</button>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const images = [
  '/16.jpg',
  '/17.jpg',
  '/18.jpg',
  '/19.jpg',
  '/21.jpg',
  '/22.jpg',
]

const index = ref(0)

onMounted(() => {
  setInterval(() => {
    index.value = (index.value + 1) % images.length
  }, 3000)
})
</script>

<style>
.slider {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  
}

.slider img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  
}

.slider img.active {
  opacity: 1;
}

.overlay{
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 20;
  background: rgba(0,0,0,0.5); 
  color: yellowgreen;
  padding: 10px;
}
</style>