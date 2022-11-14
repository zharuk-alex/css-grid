<template>
  <div class="overlay" :class="overlay && 'open'">
    <div class="overlay-inner">
      <button class="close" @click="closeOverlay">× Close</button>
      <img :src="overlayImage" />
    </div>
  </div>

  <section class="gallery">
    <div
      v-once
      v-for="(item, index) in digits"
      :ref="`gallery__item_${index}`"
      class="gallery__item"
      :key="index"
      :class="`h${item[0]} v${item[1]}`"
      @click="showOverlay(index)"
    >
      <img :src="`../../src/assets/gallery/${RandomNumber(12)}.jpg`" />
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      overlayImage: null,
      overlay: false,
    }),
    computed: {
      digits() {
        return Array.from({ length: 50 }, () => [
          this.RandomNumber(4),
          this.RandomNumber(4),
        ]).concat(Array.from({ length: 15 }, () => [1, 1]));
      },
    },
    methods: {
      RandomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
      },
      showOverlay(index) {
        const item = this.$refs[`gallery__item_${index}`][0];
        const itemImage = item.querySelector('img');
        this.overlayImage = itemImage.src;
        this.overlay = true;
      },
      closeOverlay() {
        this.overlay = false;
        this.overlayImage = null;
      },
    },
  };
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  body {
    padding: 50px;
    font-family: sans-serif;
    background: linear-gradient(to right, #f93d66, #6d47d9);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 0 0 20px 0;
  }

  .close {
    background: none;
    color: black;
    border: 0;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
  }

  .gallery__item {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .gallery__item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .item__overlay {
    background: #ffc60032;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    transition: 0.2s;
    transform: translateY(100%);
  }

  .item__overlay button {
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.7);
    padding: 5px;
  }

  .gallery__item:hover .item__overlay {
    transform: translateY(0);
  }

  .gallery__item.v2 {
    grid-row: span 2;
  }

  .gallery__item.v3 {
    grid-row: span 3;
  }

  .gallery__item.v4 {
    grid-row: span 4;
  }

  .gallery__item.h2 {
    grid-column: span 2;
  }

  .gallery__item.h3 {
    grid-column: span 3;
  }

  .gallery__item.h4 {
    grid-column: span 4;
  }

  .overlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    z-index: 2;
  }

  .overlay.open {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .overlay .overlay-inner {
    background: white;
    width: 700px;
    padding: 20px;
    height: calc(100vh - 20px);
  }

  .overlay img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
  }
</style>
