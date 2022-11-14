<template>
  <h2>Aligment & Centering</h2>
  <div class="container">
    <div class="itm itm1">1</div>
    <div class="itm itm2">2</div>
    <div class="itm itm3">3</div>
    <div class="itm itm4">4</div>
    <div class="itm itm5">center</div>
    <div class="itm itm6">6</div>
    <div class="itm itm7">7</div>
    <div class="itm itm8">8</div>
    <div class="itm itm9">9</div>
    <div class="itm itm10">10</div>
  </div>
</template>

<script>
  export default {
    name: 'AligmentCentering',
  };
</script>

<style scoped>
  .container {
    display: grid;
    grid-gap: 18px;
    border: 10px solid var(--yellow);
    height: 500px;
    grid-template-columns: repeat(5, 100px);
    /* grid-template-rows: repeat(5, 100px); */
    /* justify-items: center; */
    /* align-items: end; */
    /* place-items: center center; */
    place-items: stretch stretch;
    /* justify-content: space-around; */
    justify-content: space-between;
    align-content: space-around;
  }

  .itm {
    border: thin dashed rgba(0, 0, 0, 0.12);
    font-size: 16px;
    background-color: #fff;
  }

  .itm5 {
    justify-self: center;
  }
</style>
