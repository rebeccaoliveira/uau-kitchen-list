
import React, { Component } from 'react';
import './App.css';
import List from './List';
import TestApp from './TestApp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: '1 kg banana',
          done: true,
        },
        {
          name: '1 kg maça',
          done: false,
        },
      ],
      input: '',
    }
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    this.updateInput = this.updateInput.bind(this)
  };


handleAddProduct() {
  this.setState((currentState) => {
    return {
      products: currentState.products.concat({
        name: this.state.input,
        done: false
      }),
      input: ''
    }
  })
}

handleRemoveProduct(name) {
  console.log('removendoooo o', name);
  this.setState((currentState) => {
    return {
      products: currentState.products.filter((product) => product.name !== name)
    }
  })
}

updateInput(e) {
  const value = e.target.value
  this.setState({
    input: value
  })
}


  render() {
    return (
      <div>
        <div>
          <h1> My list </h1>
          <input type="text" placeholder="add item" value={this.state.input}
          onChange={this.updateInput} />
          <button onClick={this.handleAddProduct}> Add </button>
        </div>
        <div>
          <h2> Itens </h2>
            <div>
              {this.state.products.map((product) => (
                <div key={product.name}>
                  <input onChange={() => console.log('disparou')} type="checkbox" checked={product.done} />
                  <label>{product.name}</label>
                  <button onClick={() => this.handleRemoveProduct(product.name)}>Remove</button>
                </div>
              ))}
            </div>
        </div>
      </div>
    );
  }
}
