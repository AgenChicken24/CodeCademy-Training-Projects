<template>
  <div class="aprilia">
    <div class="main">
        <img src="@/assets/Spoilers/Suzuki/Suzuki_GSX-R600-750_04-05.png" alt="Error loading">
        <img src="@/assets/Spoilers/Suzuki/Suzuki_GSX-R600-750_04-05.png" alt="Error loading">
        <img src="@/assets/Spoilers/Suzuki/Suzuki_GSX-R600-750_04-05.png" alt="Error loading">
        <img src="@/assets/Spoilers/Suzuki/Suzuki_GSX-R600-750_04-05.png" alt="Error loading">
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "aprilia"
};
</script>

<style scoped>
.aprilia {
  position: relative;
  top: 100px;
  padding: 15px;
  border-top: 5px solid rgb(41, 41 ,41);
  border-bottom: 5px solid rgb(41, 41 ,41);
}
.main {
    display: flex;
    justify-content: center;
    align-items: center;
  /* grid-gap: 10px; */
  /* grid-template-columns: 1fr 1fr 1fr; */
}
.main div img {
  float: center;
  border: 3px solid black;
}
</style>
