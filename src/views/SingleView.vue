<template>
  <router-link class="router-link" to="/">home</router-link>
  <component :is="component" />
</template>

<script>
  import TemplatesListComponents from '../components/templates/list';
  import LessonsListComponents from '../components/lessons/list';

  export default {
    components: { ...TemplatesListComponents, ...LessonsListComponents },
    computed: {
      itemId() {
        return this.$route.params.id;
      },
      component() {
        if (this.$route.name == 'template:single') {
          return Object.keys(TemplatesListComponents)[this.itemId - 1];
        } else if (this.$route.name == 'lesson:single') {
          return Object.keys(LessonsListComponents)[this.itemId - 1];
        }
      },
    },
  };
</script>
<style>
  body.lessons-content {
    background-color: rgba(0, 0, 0, 0.12);
  }
  body.site {
    background-image: url('./assets/images/topography.svg'),
      linear-gradient(110deg, #f93d66, #6d47d9);
    background-size: 340px, auto;
    background-attachment: fixed;
    margin: 15px !important;
  }
</style>
