import React, { Component } from 'react';
import './App.css';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.updateInput = this.updateInput.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.setInput = this.setInput.bind(this)
  };

  updateInput(e) {
    const value = e.target.value
    this.setInput(value)
  };

  handleButtonClick() {
    this.props.add(this.state.input)
    this.setInput('')
  }

  setInput(value) {
    this.setState({
      input: value
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="add item" value={this.state.input}
        onChange={this.updateInput} />

        <button onClick={this.handleButtonClick}> Add </button>
      </div>
    );
  }
}
