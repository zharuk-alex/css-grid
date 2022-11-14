<template>
  <router-view></router-view>
</template>
<script>
  export default {
    watch: {
      $route: {
        handler: (newRoute) => {
          if (newRoute.name == 'template:single') {
            document.body.className = 'templates-content';
          } else if (newRoute.name == 'lesson:single') {
            document.body.className = 'lessons-content';
          } else {
            document.body.classList.remove(
              'lessons-content',
              'templates-content'
            );
          }
        },
        immediate: true,
      },
    },
  };
</script>
<style>
  .router-link {
    display: block;
    text-decoration: none;
    margin: 20px 0;
    font-size: 15px;
  }
</style>
