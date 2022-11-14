<template>
  <h2>Reordering Items</h2>
  <div class="container">
    <div class="item logo">Logo</div>
    <div class="item nav">Nav</div>
    <div class="item content">
      <p>Content</p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .container {
    display: grid;
    grid-gap: 18px;
    /* border: 10px solid var(--yellow); */
    grid-template-columns: repeat(10, 1fr);
  }

  .content {
    grid-column: 1 / -1;
    order: 3;
  }
  .logo {
    grid-column: span 2;
    order: 2;
  }
  .nav {
    grid-column: span 8;
    order: 1;
  }
</style>
