import { LitElement, html } from 'lit';
import '../location-component-dp/index.js';

export class LocationComponentDm extends LitElement {
    async getLocationsByType() {
        const dp = this.shadowRoot.querySelector('location-component-dp');
        const locations = await dp.getLocations();
        const groupByType = Object.groupBy(locations, location => location.type)

        this.dispatchEvent(new CustomEvent('locations-loaded', {
            detail: groupByType,
            bubbles: true,
            composed: true
        }));
        
        return groupByType;
    }

    render() {
        return html`<location-component-dp></location-component-dp>`;
    }
}