import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      operator: null,
      previousValue: null,
    };
  }

  handleDigitClick = (digit) => {
    this.setState((prevState) => {
      if (prevState.displayValue === '0') {
        return { displayValue: digit };
      } else {
        return { displayValue: prevState.displayValue + digit };
      }
    });
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      operator,
      previousValue: prevState.displayValue,
      displayValue: '0',
    }));
  };

  handleClear = () => {
    this.setState({
      displayValue: '0',
      operator: null,
      previousValue: null,
    });
  };

  handleBack = () => {
    this.setState((prevState) => ({
      displayValue: prevState.displayValue.slice(0, -1) || '0',
    }));
  };

  redirectToGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

  handleCalculate = () => {
    const { displayValue, operator, previousValue } = this.state;
    const currentValue = parseFloat(displayValue);
    const previous = parseFloat(previousValue);

    if (operator === '+') {
      this.setState({ displayValue: previous + currentValue });
    } else if (operator === '-') {
      this.setState({ displayValue: previous - currentValue });
    } else if (operator === '*') {
      this.setState({ displayValue: previous * currentValue });
    } else if (operator === '/') {
      this.setState({ displayValue: previous / currentValue });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>
        <div className="buttons">
          <button onClick={this.handleClear} className="button clear">C</button>
          <button onClick={this.handleBack} className="button clear">⌫</button>
          <button onClick={this.handleCalculate} className="button equals">=</button>
          <button onClick={() => this.handleOperatorClick('/')} className="operator">/</button>
          <button onClick={() => this.handleDigitClick('7')}>7</button>
          <button onClick={() => this.handleDigitClick('8')}>8</button>
          <button onClick={() => this.handleDigitClick('9')}>9</button>
          <button onClick={() => this.handleOperatorClick('+')} className="operator">+</button>
          <button onClick={() => this.handleDigitClick('4')}>4</button>
          <button onClick={() => this.handleDigitClick('5')}>5</button>
          <button onClick={() => this.handleDigitClick('6')}>6</button>
          <button onClick={() => this.handleOperatorClick('-')} className="operator">-</button>
          <button onClick={() => this.handleDigitClick('1')}>1</button>
          <button onClick={() => this.handleDigitClick('2')}>2</button>
          <button onClick={() => this.handleDigitClick('3')}>3</button>
          <button onClick={() => this.handleOperatorClick('*')} className="operator">*</button>
          <button onClick={() => this.handleDigitClick('0')}>0</button>
          <button onClick={this.redirectToGoogle} className="button back">Back to Google</button>
        </div>
      </div>
    );
  }

}

export default App;
