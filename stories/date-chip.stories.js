import { html } from 'lit';
import '../src/date-chip.js';

export default {
  title: 'DateChip',
  component: 'date-chip',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <date-chip
      style="--date-chip-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </date-chip>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
