<template>
  <h2>Grid VS flow</h2>
  <section id="section-flipper">
    <h1>Axis Flipping</h1>
    <button @click="isFlip = !isFlip">Flip It</button>
    <div class="flipper" :class="isFlip && 'flip'">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
      <div class="item">10</div>
    </div>
  </section>
  <section id="section-controls-on-right">
    <h1>Controls On Right</h1>
    <div class="tracks">
      <div class="track">
        <h2>The Future (Ft. The R.O.C.)</h2>
        <button>⭐</button>
        <button>❤️</button>
        <button>❌</button>
      </div>
      <div class="track">
        <h2>Bounce With Me (Ft. Jermaine Dupri & Xscape)</h2>
        <button>⭐</button>
        <button>❤️</button>
        <button>❌</button>
      </div>
      <div class="track">
        <h2>Puppy Love (Ft. Jagged Edge & Jermaine Dupri)</h2>
        <button>⭐</button>
        <button>❤️</button>
        <button>❌</button>
      </div>
      <div class="track">
        <h2>You Know Me (Ft. Da Brat & Jermaine Dupri)</h2>
        <button>⭐</button>
        <button>❤️</button>
        <button>❌</button>
      </div>
      <div class="track">
        <h2>The Dog in Me</h2>
        <button>⭐</button>
        <button>❤️</button>
        <button>❌</button>
      </div>
      <div class="track">
        <h2>Bow Wow (That's My Name) (Ft. Snoop Dogg)</h2>
        <button>⭐</button>
        <button>❤️</button>
        <button>❌</button>
      </div>
    </div>
  </section>
  <section id="section-flex-on-item">
    <h1>flex on item</h1>
    <div class="controls">
      <button>⏯️</button>
      <button>🐢</button>
      <button>🐰</button>
      <div class="scrubber"></div>
      <button>💬</button>
      <button>🔽</button>
    </div>
  </section>
  <section id="perfectly-centered">
    <h1>perfectly centered</h1>
    <div class="hero">
      <h2>Something Big Is Coming</h2>
      <p>Get Ready...</p>
    </div>
  </section>
  <section id="self-control">
    <h1>self control</h1>
    <div class="corners">
      <div class="corner item">1</div>
      <div class="corner item">TWO</div>
      <div class="corner item">3</div>
      <div class="corner item">4</div>
    </div>
  </section>
  <section id="stacked-layout">
    <h1>stacked layout</h1>
    <div class="stacked">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </section>
  <section id="unknown-content-size">
    <h1>unknown content size</h1>
    <div class="container known">
      <div class="item">Short</div>
      <div class="item">Longerrrrrr</div>
      <div class="item">
        <img src="https://source.unsplash.com/300x200" alt="" />
      </div>
      <div class="item">💩</div>
    </div>
  </section>
  <section id="unknown-number-of-items">
    <h1>unknown number of items</h1>
    <button @click="addItem">+ Add</button>
    <div class="unknown">
      <div v-for="item in items" class="item">{{ item }}</div>
    </div>
  </section>
  <section id="variable-widths-each-row">
    <h1>variable widths each row</h1>
    <div class="flex-container">
      <div class="item">Short</div>
      <div class="item">Longerrrrrrrrrrrrrr</div>
      <div class="item">💩</div>
      <div class="item">This is Many Words</div>
      <div class="item">Lorem, ipsum.</div>
      <div class="item">10</div>
      <div class="item">Snickers</div>
      <div class="item">Wes Is Cool</div>
      <div class="item">Short</div>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      isFlip: false,
      items: [1, 2, 3],
    }),
    methods: {
      flip() {
        const flipper = document.querySelector('.flipper');
        flipper.classList.toggle('flip');
      },
      addItem() {
        this.items.push(this.items.length + 1);
      },
    },
  };
</script>

<style scoped>
  section {
    margin: 40px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.7);
    padding: 40px 0;
  }
  /* section-flipper */
  .flipper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
  .flipper.flip {
    grid-template-columns: 1fr 1fr;
  }
  /* section-controls-on-right */
  .track {
    background: white;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
  /* flex-on-item */
  .controls {
    margin: 200px 0;
    /* display: grid; */
    /* grid-template-columns: auto auto auto 1fr auto auto; */
    display: flex;
    align-items: center;
  }

  .scrubber {
    background: #bada55;
    height: 10px;
    min-width: 100px;
    border-radius: 10px;
    /* flex-grow: 1; */
    flex: 1;
  }
  /*  */
  /* perfectly-centered */
  .hero {
    height: 200px;
    background: rgba(255, 255, 255, 0.2);
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    display: grid;
    align-content: center;
    justify-items: center;
  }
  /*  */
  /* self-control */
  .corners {
    display: grid;
    height: 200px;
    width: 200px;
    border: 10px solid var(--yellow);
    grid-template: 1fr 1fr / 1fr 1fr;
    align-items: end;
    justify-items: end;
  }

  .corner:nth-child(1),
  .corner:nth-child(2) {
    align-self: start;
  }

  .corner:nth-child(1),
  .corner:nth-child(3) {
    justify-self: start;
  }
  /*  */
  /* stacked-layout */
  .stacked {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .stacked > * {
    width: 30%;
    margin-bottom: 20px;
  }
  /*  */
  /* unknown-content-size */
  .known {
    margin: 100px 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, auto);
    justify-content: center;
  }
  /*  */
  /* unknown-number-of-items */
  .unknown {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
  /*  */
  /* variable-widths-each-row */
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    border: solid black;
  }

  .flex-container > * {
    margin: 10px;
    flex: 1;
  }
</style>
