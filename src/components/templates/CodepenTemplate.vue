<template>
  <div class="codepen">
    <header class="pen">
      <div class="pen__details">
        <h1>Some Amazing Pen Name</h1>
        <p class="pen__author">A Pen by Wes Bos</p>
      </div>
      <button class="button button--dirty">☁️ Save</button>
      <button class="button">️️☁️ Save As Private</button>
      <button class="button">⚙ Settings</button>
      <button class="button">👀 Change View</button>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28831/profile/profile-80.jpg?1"
        alt="Wes Bos"
        height="44"
      />
    </header>
    <section class="code">
      <div class="editor">
        <header class="editor__header">
          <button class="button button--small editor__settings">⚙</button>
          <h3 class="editor__heading">HTML</h3>
          <button class="button button--small editor__settings">⌄</button>
        </header>
        <div class="editor__code">
          <div class="editor__gutter">
            <span class="editor__number">1</span>
          </div>

          <textarea class="editor__input"><p>Oh Hey There!</p></textarea>
        </div>
      </div>
      <div class="editor">
        <header class="editor__header">
          <button class="button button--small editor__settings">⚙</button>
          <h3 class="editor__heading">CSS</h3>
          <button class="button button--small editor__settings">⌄</button>
        </header>
        <div class="editor__code">
          <div class="editor__gutter">
            <span class="editor__number">1</span>
            <span class="editor__number">2</span>
            <span class="editor__number">3</span>
          </div>

          <textarea class="editor__input">
            .codepen {
              is: cool;
            }
          </textarea>
        </div>
      </div>
      <div class="editor">
        <header class="editor__header">
          <button class="button button--small editor__settings">⚙</button>
          <h3 class="editor__heading">JS</h3>
          <button class="button button--small editor__settings">⌄</button>
        </header>
        <div class="editor__code">
          <div class="editor__gutter">
            <span class="editor__number">1</span>
          </div>
          <textarea class="editor__input">const wes = 'coolest';</textarea>
        </div>
      </div>
    </section>
    <section class="preview">
      <!-- <iframe src="https://css-tricks.com" frameborder="0"></iframe> -->
    </section>
    <footer class="settings">
      <button class="button button--small button--black">Console</button>
      <button class="button button--small button--black">Assets</button>
      <button class="button button--small button--black">⌘</button>
    </footer>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  :root {
    --grey: #343436;
  }

  html {
    box-sizing: border-box;
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma,
      Sans-Serif;
    font-weight: normal;
    color: #272727;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: none !important;
    background-image: none !important;
    margin: 0px !important;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
    font-size: 1.5em;
  }

  /*  */
  .codepen {
    display: grid;
    grid-template-rows: auto 1fr 1fr auto;
    height: 100vh;
    color: white;
  }

  .codepen > * {
    border: 1px solid black;
  }

  .pen {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 10px;
    background: black;
    border-bottom: 5px solid var(--grey);
    color: white;
    padding: 10px;
  }

  .preview {
    display: grid;
  }

  /* Buttons */
  .button {
    background: var(--grey);
    border: 0;
    color: white;
    font-weight: thin;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    position: relative;
  }

  .button--small {
    font-size: 12px;
    padding: 4px;
  }
  .button--dirty:before {
    background: yellow;
    display: block;
    content: '';
    height: 2px;
    width: calc(100% - 6px);
    position: absolute;
    top: 1px;
    left: 3px;
  }

  /* Editor */
  .code {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #1b2b34;
  }
  .editor {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .editor__header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 5px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .editor__code {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .editor__number {
    display: block;
    padding: 0px 10px;
  }
  .editor__input {
    resize: none;
    background: none;
    border: none;
    color: grey;
    font-size: 16px;
    line-height: 18px;
  }

  /* settings */
  .settings {
    padding: 5px;
    background: black;
  }
  .settings .button {
    margin-right: 12px;
  }
</style>
