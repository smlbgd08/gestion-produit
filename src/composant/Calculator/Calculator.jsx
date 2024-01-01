import React, { Component } from 'react';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
          displayValue: '0',
          firstValue: null,
          operator: null,
          waitingForSecondValue: false,
        };
      }

      inputDigit = (digit) => {
    const { displayValue, waitingForSecondValue } = this.state;

    if (waitingForSecondValue) {
      this.setState({
        displayValue: String(digit),
        waitingForSecondValue: false,
      });
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  };
      render() {
        const { displayValue } = this.state;
    
        return (<div className="App">
        <div className="calculator">
          <input type="text" className="input" value={this.state.input} />
          
          <div className="buttons">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>=</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>0</button>
            <button>.</button>
            <button>+</button>
            <button className='red'>/</button>
          </div>
        </div>
      </div>
        );
      }

}