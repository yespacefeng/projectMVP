import React from 'react';
import c3 from 'c3';

class Spendings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: props.transactions
    };
  }

  renderChart() {
    let withdraw = ['withdraw'];
    let deposit = ['deposit'];
    for (let i = 0; i < this.state.transactions.length; i++) {
      let currentTransaction = this.state.transactions[i];
      if (currentTransaction.account_type === 'checking') {
        if (currentTransaction.withdraw) {
          withdraw.push(-currentTransaction.amount);
        } else {
          deposit.push(currentTransaction.amount);
        }
      }
    }
    console.log(withdraw);
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [withdraw, deposit]
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