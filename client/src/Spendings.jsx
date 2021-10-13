import React from 'react';
import c3 from 'c3';

class Spendings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: ['spendings', ...props.transactions]
    };
    console.log(props);
  }

  renderChart() {
    console.log(this.state.transactions);
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [this.state.transactions]
      }
    });
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render () {
    return (
      <div id='spending-chart-container'>
        <h2>Spendings</h2>
        <div id='chart'>

        </div>
      </div>
    )
  }
}

export default Spendings;