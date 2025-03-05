import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { Styles } from "./location-card-component-styles.js";

export class LocationCardComponent extends LitElement {
  static properties = {
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    dimension: { type: String },
    residents: { type: Array },
    created: { type: String },
    url: { type: String }
  };

  static styles = [Styles];

  constructor() {
    super();
    this.id = 0;
    this.name = "";
    this.type = "";
    this.dimension = "";
    this.residents = [];
    this.created = "";
    this.url = "";
  }

  render() {
    const cardClasses = {
      'card': true,
      'card--has-type': !!this.type,
      'card--has-dimension': !!this.dimension,
      'card--populated': this.residents?.length > 0
    };

    const titleClasses = {
      'card__title': true,
      'card__title--named': this.name.length > 0
    };

    return html`
      <div class=${classMap(cardClasses)}>
        <h1 class=${classMap(titleClasses)}>${this.name}</h1>
        <span class="location-info">
        <h2 class="location-type">Type: ${this.type || "Unknown"}</h2>
        <h2 class="location-dimension">Dimension: ${this.dimension || "Unknown"}</h2> 
        <h3 class="resident-count">Residents: ${this.residents ? this.residents.length : 0}</h3>
      </span>
      </div>
    `;
  }
}