import { LitElement, html } from 'lit';
import { Styles } from "./my-first-app-styles.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyFirstApp extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = [Styles];

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/MyFirstApp.js</code> and save to reload.</p>
        <a href="/src/pages/location-page/index.html">CHARACTERS</a>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('my-first-app', MyFirstApp);
