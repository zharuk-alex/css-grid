<template>
  <h2>Cols & Rows</h2>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .container {
    display: grid;
    /* grid-template-columns: 33% 33% 33%; */
    /* grid-template-columns: 20% auto 20%; */
    /* grid-template-columns: repeat(3, 33%); */
    grid-template-columns: 200px 300px;
    grid-template-rows: 50px 200px 50px;
    grid-auto-rows: 120px;
    grid-gap: 20px;
  }
</style>
