<template>
  <div class="home">
    <div class="block-item lessons">
      <h2>Lessons exsamples</h2>
      <ul>
        <li v-for="item in lessons">
          <router-link :to="`lesson/${item.index}`">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="block-item teplates">
      <h2>Templates exsamples</h2>
      <ul>
        <li v-for="item in templates">
          <router-link :to="`template/${item.index}`">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TemplatesListComponents from '../components/templates/list';
  import LessonsListComponents from '../components/lessons/list';

  export default {
    computed: {
      lessons() {
        return this.toLink(LessonsListComponents);
      },
      templates() {
        return this.toLink(TemplatesListComponents);
      },
    },
    methods: {
      toLink(obj) {
        return Object.keys(obj).map((c, index) => ({
          name: c.replace(/([a-z](?=[A-Z]))/g, '$1 '),
          index: index + 1,
        }));
      },
    },
  };
</script>

<style>
  .home {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin: 0 auto;
    justify-items: center;
    grid-gap: 20px;
  }
  .block-item {
    padding: 30px;
    background: rgba(0, 0, 0, 0.1);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul > * {
    font-size: 16px;
    line-height: 1.8;
  }
  ul a {
    text-decoration: none;
  }
</style>
