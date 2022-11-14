<template>
  <div class="container">
    <aside class="item sidebar-left">
      <p>I'm Sidebar #1</p>
    </aside>
    <main class="item content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed.
      </p>
      <p>Lorem ipsum d</p>
    </main>
    <aside class="item sidebar-right">
      <p>I'm Sidebar #2</p>
    </aside>
    <div class="item footer">
      <p>I'm the footer</p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 150px 150px 100px;
    grid-template-areas:
      'sidebar-1 content sidebar-2'
      'sidebar-1 content sidebar-2'
      'footer footer footer';
  }

  .content {
    grid-area: content;
  }

  .sidebar-left {
    grid-area: sidebar-1;
  }

  .sidebar-right {
    grid-area: sidebar-2;
  }

  .footer {
    grid-area: footer;
  }

  @media (max-width: 700px) {
    .container {
      grid-template-areas:
        'content content content'
        'sidebar-1 sidebar-1 sidebar-2'
        'footer footer footer';
    }
  }
</style>
