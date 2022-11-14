<template>
  <div class="wrapper">
    <div class="top">
      <header class="hero">
        <h1>Terry's Taco Joint</h1>
        <p>Pretty Good Tacos!</p>
      </header>
      <div class="cta cta1">
        <p class="price">$1.99</p>
        <p>Tacos</p>
      </div>
      <div class="cta cta2">
        <p class="price">$3.99</p>
        <p>Kombucha</p>
      </div>
    </div>
    <nav class="menu">
      <button
        :aria-expanded="menuAriaExpanded"
        @click="menuAriaExpanded = !menuAriaExpanded"
        aria-controls="menu-list"
      >
        <span class="open">☰</span>
        <span class="close">×</span>
        Menu
      </button>
      <ul id="menu-list">
        <li>
          <a href="">Tacos</a>
        </li>
        <li>
          <a href="">Beers</a>
        </li>
        <li>
          <a href="">Wines</a>
        </li>
        <li>
          <a href="">Desserts</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
      </ul>
    </nav>

    <section class="features">
      <div class="feature">
        <span class="icon">🌮</span>
        <h3>Tacos</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          assumenda.
        </p>
      </div>
      <div class="feature">
        <span class="icon">🍺</span>
        <h3>Beer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          assumenda.
        </p>
      </div>
      <div class="feature">
        <span class="icon">🍷</span>
        <h3>Wine</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          assumenda.
        </p>
      </div>
      <div class="feature">
        <span class="icon">🎵</span>
        <h3>Music</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          assumenda.
        </p>
      </div>
    </section>

    <section class="about">
      <img
        src="../../assets/images/queso-taco.png"
        alt="Yummy Taco"
        class="about__mockup"
      />
      <div class="about__details">
        <h2>Featured Taco</h2>
        <p>Slim Profile, easy to hold and loaded with cheese.</p>
        <p>This is the one you have been waiting for</p>
        <button>Learn More →</button>
      </div>
    </section>

    <section class="gallery">
      <h2>Instant Grams</h2>
      <img src="https://source.unsplash.com/random/201x201" alt="" />
      <img src="https://source.unsplash.com/random/202x202" alt="" />
      <img src="https://source.unsplash.com/random/203x203" alt="" />
      <img src="https://source.unsplash.com/random/204x204" alt="" />
      <img src="https://source.unsplash.com/random/205x205" alt="" />
      <img src="https://source.unsplash.com/random/206x206" alt="" />
      <img src="https://source.unsplash.com/random/207x207" alt="" />
      <img src="https://source.unsplash.com/random/207x208" alt="" />
      <img src="https://source.unsplash.com/random/207x209" alt="" />
      <img src="https://source.unsplash.com/random/207x210" alt="" />
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      menuAriaExpanded: false,
    }),
    beforeCreate() {
      document.body.className = 'site';
    },
    unmounted() {
      document.body.classList.remove('site');
    },
  };
</script>

<style scoped>
  button {
    background: #ffc600;
    border: 0;
    padding: 10px 20px;
  }

  img {
    max-width: 100%;
  }

  .wrapper {
    display: grid;
    grid-gap: 20px;
  }

  /*  */
  .top {
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
      'hero hero cta1'
      'hero hero cta2';
  }

  .hero {
    grid-area: hero;
    min-height: 400px;
    background: white url(../../assets/images/taco.jpg);
    background-size: cover;
    background-position: bottom right;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .hero > * {
    background: var(--yellow);
    padding: 5px;
  }
  .cta {
    background: var(--yellow);
    display: grid;
    align-content: center;
    justify-items: center;
  }
  .cta p {
    margin: 0;
  }
  .price {
    font-size: 60px;
  }
  .cta1 {
    grid-area: cta1;
  }
  .cta2 {
    grid-area: cta2;
  }

  /* Navigation */
  .menu ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 20px;
    padding: 0;
    list-style: none;
  }

  .menu a {
    background: var(--yellow);
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 10px;
    color: var(--black);
    text-transform: uppercase;
    font-size: 18px;
  }

  [aria-controls='menu-list'] {
    display: none;
  }

  /* features */
  .features {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .feature {
    background: white;
    padding: 10px;
    border: 1px solid white;
    text-align: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  .feature .icon {
    font-size: 50px;
  }

  .feature p {
    color: rgba(0, 0, 0, 0.5);
  }

  /* about */
  .about {
    background: white;
    padding: 50px;
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: center;
  }
  /* gallery */
  .gallery {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .gallery img {
    width: 100%;
  }

  .gallery h2 {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
  }
  .gallery h2:before,
  .gallery h2:after {
    display: block;
    content: '';
    height: 10px;
    border-radius: 10px;
    background: linear-gradient(
      to var(--direction, left),
      var(--yellow),
      transparent
    );
  }
  .gallery h2:after {
    --direction: right;
  }

  /* responsive */
  @media (max-width: 1000px) {
    .menu {
      order: -1;
    }
    [aria-controls='menu-list'] {
      display: block;
    }
    .menu ul {
      max-height: 0;
      transform: rotateX(90deg);
      transition: all 0.3s;
    }

    [aria-expanded='true'] ~ ul {
      display: grid;
      max-height: 500px;
      transform: rotateX(0deg);
    }

    [aria-expanded='false'] .close {
      display: none;
    }
    [aria-expanded='true'] .close {
      display: inline-block;
    }
    [aria-expanded='true'] .open {
      display: none;
    }
  }

  @media (max-width: 700px) {
    .top {
      grid-template-areas:
        'hero hero'
        'cta1 cta2';
    }
    .about {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 500px) {
    .top {
      grid-template-areas:
        'hero'
        'cta1'
        'cta2';
    }
  }
</style>
