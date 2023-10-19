import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class DateChip extends LitElement {
  static properties = {
    date: { type: String },
  }

  static styles = css`
    /* :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--date-chip-background-color);
    } */

    .date-container{
  margin-right: 10px;
 text-align: center;
 float: left;
}

.date-month{
    display: block;
    background: #1E407C;
    border-radius: 0 0 2px 2px;
    color: #FFF;
    font-size: 0.8em;
    font-weight: bold;
    line-height: 1.8;
    padding: 1px 10px;
    text-transform: uppercase;
}

.date-container .date-day {
    background: #f7f7f7;
    border-radius: 2px 2px 0 0;
    color: #444;
    display: block;
    font-size: 18px;
    font-weight: 900;
    padding: 10px 20px;
}
  `;

  constructor() {
    super();
    this.date = '';
    this.day = '';
  }

  firstUpdated() {
    
    const date = new Date(this.date); // Date class accepts string as a parameter
    const day = date.getDate(); // get the day of the month
    const month = date.toLocaleString('default', { month: 'short' });
    this.day = day;
    this.date = month;




  }

  render() {
    return html`
  

  <div class="date-container">
		  <span class="date-month">${this.date}</span>
			<span class="date-day">${this.day}</span>
</div>
    `;
  }
}

customElements.define('date-chip', DateChip);