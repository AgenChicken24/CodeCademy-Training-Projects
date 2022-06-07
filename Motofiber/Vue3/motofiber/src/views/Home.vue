<template>
<div id="home">
    <img class="LineAboveMainPhoto" src="../assets/Logos/banner.logo.png" alt="" />
   <div class="photos">
        <div  class="brands"><img src="../assets/Mark_Photos/BRANDS1.png" alt="Brands"></div>
        <div class="photosOne">
            <a href=""><img src="../assets/Mark_Photos/Suzuki.png" alt="Suzuki" /></a>
            <a href=""><img src="../assets/Mark_Photos/Kawasaki.png" alt="Kawasaki" /></a>
            <a href=""><img src="../assets/Mark_Photos/Honda.png" alt="Honda" /></a>
            <a href=""><img src="../assets/Mark_Photos/Yamaha.png" alt="Yamaha" /></a>
        </div>
        <div class="photosTwo">
            <a href=""><img src="../assets/Mark_Photos/BMW.png" alt="BMW" /></a>
            <a href=""><img src="../assets/Mark_Photos/Aprilia.png" alt="Aprilia" /></a>
            <a href=""><img src="../assets/Mark_Photos/Ducati.png" alt="Ducati" /></a>
            <a href=""><img src="../assets/Mark_Photos/carbon.png" alt="Carbon Parts" /></a>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Home"
};
</script>

<style scoped>
nav .HomeLogo {
    height: 100px;
    width: auto;
    float: left;
    margin: auto 50px;
}

nav {
    margin: 10px;
}

nav ul {
    float: right;
}

nav ul li {
    float: left;
    list-style: none;
    position: relative;
}

nav ul li a {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
    font-size: 24px;
    padding: 18px 14px;
    text-decoration: none;
}

nav ul li ul {
    display: none;
    position: absolute;
    background-color: white;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
}

nav ul li:hover ul {
    display: block;
}

nav ul li ul li {
    width: 180px;
    border-radius: 4px;
}

nav ul li ul li a {
    padding: 12px 8px;
}

nav ul li ul li a:hover {
    background-color: gray;
}

.LineAboveMainPhoto {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    position: unset;
    border-top: 5px solid #292929;
    border-bottom: 5px solid #292929;
}

h1.brands {
    text-transform: uppercase;
    text-align: center;
    font-size: 60px;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

h1:after {
    content: "";
    display: block;
    width: 260px;
    max-width: 40%;
    border-bottom: 6px solid #222;
    margin: 0px auto 0;
}

.photos {
    position: relative;
    padding: 15px;
    margin: 10px;
    top: 50px;
    left: 10px;
}

.brands {
    display: flex;
    justify-content: center;
    align-items: center;
}

.photosOne {
    display: flex;
    justify-content: center;
    align-items: center;
}

.photosOne img,
.photosTwo img {
    margin-right: 32px;
    margin-left: 32px;
}

.photosOne img:hover,
.photosTwo img:hover {
    transform: scale(1.2);
    -webkit-transition: transform 0.2s ease-in-out;
}

.photosTwo {
    display: flex;
    justify-content: center;
    align-items: center;
}

footer {
    background-color: #222;
    color: white;
    height: 300px;
}
</style>
