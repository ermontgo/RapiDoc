import setTheme from '~/utils/theme';
import { LitElement, html } from 'lit';

export default class ThemeProvider extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.theme) { this.theme = 'light'; }
  }

  render() {
    const newTheme = {
      bg1: '',
      fg1: '',
      headerColor: '',
      primaryColor: '',
      navBgColor: '',
      navTextColor: '',
      navHoverBgColor: '',
      navHoverTextColor: '',
      navAccentColor: '',
    };

    console.info('Writing theme variables');
    return html`
    ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)} 
    `;
  }
}

customElements.define('theme-provider', ThemeProvider);
