<template>
  <h2>Auto-fill & Auto-fit</h2>
  <div class="container">
    <div class="item item1">Item 1</div>
    <div class="item item2">Item 2</div>
    <div class="item item3">Item 3</div>
    <div class="item item4">AwesomeText</div>
    <div class="item item5">Item 5</div>
    <div class="item item6">Item 6</div>
    <div class="item item7">Item 7</div>
    <div class="item item8">Item 8</div>
    <div class="item item9">Item 9</div>
    <div class="item item10">Item 10</div>
    <div class="item item11">Item 11</div>
    <div class="item item12">Item 12</div>
    <div class="item item13">Item 13</div>
    <div class="item item14">Item 14</div>
    <div class="item item15">Item 15</div>
    <div class="item item16">Item 16</div>
    <div class="item item17">Item 17</div>
    <div class="item item18">Item 18</div>
    <div class="item item19">Item 19</div>
    <div class="item item20">Item 20</div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .container {
    display: grid;
    grid-gap: 18px;
    border: 10px solid yellow;
    /* grid-template-columns: repeat(auto-fill, calc(100% / 3 - 12px)); */
    /* grid-template-columns: repeat(auto-fill, 150px); */
    /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
    /* grid-template-columns: auto 150px 150px 240px; */
    /* grid-template-columns: auto 150px 150px fit-content(240px); */
    grid-template-columns: fit-content(100px) 150px 150px 240px;
  }
  .item4 {
    grid-column-end: -1;
  }
</style>
