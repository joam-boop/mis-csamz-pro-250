<template>
    <div class="container my-5 text-center">

        <!--TITLE-->
        <h2 class="section-title">NESA EXAMINATION RESULTS BEST PERFORMERS {{ year }}</h2>

        <p class="section-subtitle">
            Top 10 Students Performance Ranking
        </p>

        <!--GRID-->
        <div class="row g-4 mt-4">
            <div 
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="(p,index) in sortedPerformers" :key="index"
            >
                <div class="card performer-card shadow-sm">
                    <!--IMAGE-->
                    <div class="image-container">
                        <img :src="getImage(p.image)" />
                    </div>

                    <!--RANKING-->
                    <span class="rank-badge"> #{{ index + 1 }} </span>
                </div>

                <!--CONTENT-->
                <div>
                    <h6 class="name">{{ p.name }}</h6>

                    <!--TRADE-->
                    <p 
                    class="trade"
                    :style="{color:tradeColors[p.trade]}">
                    {{ trades[p.trade] }}({{ p.trade }})
                    </p>

                    <!--SCORE-->
                    <p class="score">{{p.score}}%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//YEAR
const year = "2025-2026"

//ALL TRADES
const trades = {
    PLT: "Plumbing Technology",
    CSA: "Computer System and Architecture",
    SWD: "Software Development",
    WOT: "Wood Technology",
    BDC: "Building Construction"
}
//TRADE COLORS
const tradeColors = {
    CSA:"#0d6efd",
    SWD: "#198754",
    PLT: "#fd7e14",
    BDC: "#6f42c1",
    WOT: "#dc3545"
}
// DYNAMIC DAT(CAN COME FROM BACKEND LATER)
const performers = [
    {name:"JENNIFER LOPEZ",trade:"CSA", score:88, image:"0.jpg"},
    {name:"MIKE TEHYIO",trade:"SWD", score:92, image:"2.jpg"},
    {name:"FANSIJ GAMBIE",trade:"PLT", score:85, image:"3.jpg"},
    {name:"KERNDY DE NAVIE",trade:"BDC", score:95, image:"4.jpg"},
    {name:"HOSTESS LINCA",trade:"WOT", score:90, image:"5.jpg"},
    {name:"MONICCA MIJA",trade:"CSA", score:97, image:"6.jpg"},
    {name:"SARAH PRETTY",trade:"SWD", score:91, image:"7.jpg"},
    {name: "HOSTIN KETTY",trade:"BDC", score:94, image:"9.jpg"},
    {name:"SHUA DE MARRICCO",trade:"WOT", score:93, image:"10.jpg"},
    {name:"JOHN DOE",trade:"CSA:", score:87, image:"11.jpg"},
    {name:"JOHNSON HIGGINS",trade:"SWD", score:91, image:"12.jpg"},
      {name:"QUEEN DE CRUSE",trade:"PLT", score:89, image:"13.jpg"},
]

//SORT BY SCORE(HIGHEST FIRST)
const sortedPerformers = [...performers].sort((a,b)=> b.score - a.score)

//IMAGE LOADER (VITE SAFE)
const getImage = (img) =>{
    return new URL(`../../assets/images/${img}`, import.meta.url).href
}

</script>

<style>
/* CARD*/
.performer-card{
    height:100%;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.3s;
    color:beige,#6c757d;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: chartreuse;
}
.performer-card:hover{
    transform: translateY(-6px) ;
    color:deeppink;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: darkolivegreen;

}

/*IMAGE*/
.image-container{
    position: relative;
    color: chartreuse;
    background-color: greenyellow;

}
.image-container img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    color: chocolate;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: rebeccapurple;
}

/* RANK BADGE*/
.rank-badge{
    position: absolute;
    top:10px;
    left: 10px;
    background: #b08d57;
color: darkolivegreen;
    padding: 6px 10px;
    font-size: 12px;
    font-weight: bold;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: aquamarine;
}

/*  TEXT*/
.name{
    font-weight: bold;
    color:aquamarine;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: darksalmon;
}
.trade{
    font-size: 14px;
    margin: 5px 0;
    color: #b08d57;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: darkgoldenrod;
}
.score{
    color:blueviolet;
    font-weight: bold;
    font-size: 18px;
    background:linear-gradient(dark green,dark blue,dark yellow,dark red);
    background-color: cadetblue;
}

/* TITLES*/
.section-title{
    font-weight: bold;
    color:darkturquoise;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: darkolivegreen;
}
.section-subtitle{
    color: darkorange;
     background:linear-gradient(dark green,dark blue,dark yellow,dark red);
     background-color: #6c757d;
}
</style>
