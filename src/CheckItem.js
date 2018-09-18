import React, { Component } from 'react';
import './App.css';

export default class CheckItem extends Component {

  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <div key={product.name}>
            <input onChange={() => this.props.confirm(product.name)} checked={product.done} type="checkbox"  />
            <label>{product.name}</label>
            <button onClick={() => this.props.remove(product.name)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
}


// checkbox onde passa a informação que checked é true
// a função do input não está alterando o state
//
