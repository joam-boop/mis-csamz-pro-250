<template>
  <div class="about-page">

    <!-- HERO -->
    <div class="hero">
      <h1>About CSAMZ</h1>
      <p>Collegio Santo Antonio Maria Zaccaria</p>
    </div>

    <!-- DESCRIPTION -->
    <div class="section">
      <h4>Who We Are</h4>
      <p>
        CSAMZ is a leading technical school dedicated to providing quality education 
        and practical skills to students. We prepare learners for real-world careers 
        through hands-on training and professional guidance.
      </p>
    </div>

    <!-- MISSION & VISION -->
    <div class="section">
      <div class="grid-2">
        <div class="card">
          <h4>Our Mission</h4>
          <p>
            To provide high-quality technical education that empowers students 
            with skills, discipline, and innovation.
          </p>
        </div>

        <div class="card">
          <h4>Our Vision</h4>
          <p>
            To become a center of excellence in technical and vocational education 
            in Rwanda and beyond.
          </p>
        </div>
      </div>
    </div>

    <!-- TRADES -->
    <div class="section">
      <h4>Our Trades</h4>

      <div class="grid-3">
        <div class="card">Software Development (SWD)</div>
        <div class="card">Computer System & Architecture (CSA)</div>
        <div class="card">Plumbing Technology (PLT)</div>
        <div class="card">Wood Technology (WOT)</div>
        <div class="card">Building Construction (BDC)</div>
      </div>
    </div>

    <!-- WHY CHOOSE US -->
    <div class="section">
      <h4>Why Choose CSAMZ?</h4>

      <ul class="list">
        <li>✔ Qualified and experienced teachers</li>
        <li>✔ Practical training and workshops</li>
        <li>✔ Modern learning environment</li>
        <li>✔ High student success rate</li>
      </ul>
    </div>
     <!-- HERO -->
    <div class="hero">
      <h1>About CSAMZ</h1>
      <p>Collegio Santo Antonio Maria Zaccaria</p>
    </div>

    <!-- COURSES -->
    <div class="courses">

      <!-- Software Development -->
      <div class="course-card">
        <img src="/src/assets/images/software.jpg" alt="Software Development"/>
        <h3>Software Development</h3>
        <p>Learn programming, web development, and system design.</p>
      </div>

      <!-- Plumbing -->
      <div class="course-card">
        <img src="/src/assets/images/plumbing.jpg" alt="Plumbing"/>
        <h3>Plumbing Technology</h3>
        <p>Gain skills in water systems installation and maintenance.</p>
      </div>

      <!-- Wood Technology -->
      <div class="course-card">
        <img src="/src/assets/images/wood.jpg" alt="Wood Technology"/>
        <h3>Wood Technology</h3>
        <p>Learn carpentry, furniture design, and wood processing.</p>
      </div>

      <!-- Computer Systems -->
      <div class="course-card">
        <img src="/src/assets/images/computer.jpg" alt="Computer Systems"/>
        <h3>Computer Systems & Architecture</h3>
        <p>Understand hardware, networking, and system operations.</p>
      </div>

      <!-- Building Construction -->
      <div class="course-card">
        <img src="/src/assets/images/building.jpg" alt="Building Construction"/>
        <h3>Building Construction</h3>
        <p>Develop skills in construction, design, and site management.</p>
      </div>

    </div>


  </div>
</template>

<script setup>

</script>

<style scoped>
.about-page {
  font-family: Arial, sans-serif;
}

/* HERO */
.hero {
  background: #0b2c4d;
  color: white;
  text-align: center;
  padding: 60px 20px;
}

/* SECTIONS */
.section {
  padding: 40px 20px;
  text-align: center;
}

/* GRID SYSTEM */
.grid-2 {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.grid-3 {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* CARD */
.card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  min-width: 220px;
  max-width: 300px;
}

/* LIST */
.list {
  list-style: none;
  padding: 0;
}

.list li {
  margin: 10px 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid-2,
  .grid-3 {
    flex-direction: column;
    align-items: center;
  }
}
.hero{
  height: 300px;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url("@/assets/images/login.jpg") center/cover no-repeat;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  color:white;
}

/* COURSES GRID */
.courses{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap:25px;

  padding:40px;
}

/* CARD */
.course-card{
  background:white;
  border-radius:15px;
  overflow:hidden;

  box-shadow:0 5px 20px rgba(0,0,0,0.2);
  text-align:center;

  transition:0.3s;
}

.course-card:hover{
  transform:translateY(-5px);
}

/* IMAGE */
.course-card img{
  width:100%;
  height:180px;
  object-fit:cover;
}

/* TEXT */
.course-card h3{
  margin:15px 0;
  color:#0b2c4d;
}

.course-card p{
  padding:0 15px 20px;
  font-size:14px;
}
</style>