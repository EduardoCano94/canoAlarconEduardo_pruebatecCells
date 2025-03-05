import { LitElement, html } from "lit";
import { Styles } from "./location-page-styles.js";
import "../../components/location-component-dm/index.js";
import "../../components/location-card-list-component/index.js";

export class LocationPage extends LitElement {
  static styles = [Styles];

  static properties = {
    _data: { type: Object },
  };

  constructor() {
    super();
    this._data = {
      Planet: [],
      Dimension: [],
      "Space station": [],
    };
  }

    async firstUpdated() {
      await this.updateComplete;
      const dm = this.shadowRoot.querySelector("location-component-dm");
      dm.addEventListener('locations-loaded', (e) => {
        this._data = e.detail;
        this.requestUpdate(); 
      });
      dm.getLocationsByType();
    }

    render() {
      const locationTypes = Object.keys(this._data);
      return html`
        <div>
          <h1>The <span>Rick & Morty</span> API</h1>
          <h1>Location Types</h1>
          <location-component-dm></location-component-dm>
          
          ${locationTypes.map(
          (locationType) => html`
            <div class="content">
              ${this._data[locationType] && this._data[locationType].length
                ? html`<location-card-list-component
                    locationType="${locationType}"
                    .data=${this._data[locationType]}
                  />`
                : html`<h1>No locations found for type: ${locationType}</h1>`}
            </div>
          `
        )}
      </div>
    `;
    }
}
customElements.define("location-page", LocationPage);
