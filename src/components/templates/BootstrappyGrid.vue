<template>
  <div class="grid" style="--cols: 10">
    <div class="item">1</div>
    <div class="item" style="--span: 7">
      <div class="grid" style="--cols: 2">
        <div class="item">2/1</div>
        <div class="item">2/2</div>
      </div>
    </div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .grid {
    --cols: 12;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
  }

  .item {
    min-width: 0;
    width: 100%;
    --span: 1;
    grid-column: span var(--span);
  }
</style>
