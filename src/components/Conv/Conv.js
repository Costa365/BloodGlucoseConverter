import React, { Component } from 'react';
import './Conv.css';

class Conv extends Component {

  constructor(props) {
    super(props);
    this.state = {valueMg: '', valueMm: ''};

    this.conversionFactor = 18;

    this.handleChangeMg = this.handleChangeMg.bind(this);
    this.handleChangeMm = this.handleChangeMm.bind(this);
  }

  convertMgToMm(value) {
    if(value===''){
      return '';
    } 
    else {
      return value/this.conversionFactor;
    }
  }

  convertMmToMg(value) {
    if(value===''){
      return '';
    } 
    else {
      return value*this.conversionFactor;
    }
  }

  formatNumber(value) {
    if(value==='' || isNaN(value)){
      return '';
    } 
    else {
      return Math.round(value * 1000) / 1000;
    }
  }

  handleChangeMg(event) {
    this.setState({valueMg: event.target.value});
    this.setState({valueMm: this.formatNumber(this.convertMgToMm(event.target.value))});
  }

  handleChangeMm(event) {
    this.setState({valueMm: event.target.value});
    this.setState({valueMg: this.formatNumber(this.convertMmToMg(event.target.value))});
  }

  render() {
    return (
      <div className="Conv">
        <p><label>mg/dL:</label><input type="text" value={this.state.valueMg} onChange={this.handleChangeMg} /></p>
        <p><label>mmol/L:</label><input type="text" value={this.state.valueMm} onChange={this.handleChangeMm} /></p>
      </div>
    );
  }
}

export default Conv;
