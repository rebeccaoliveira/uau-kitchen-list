
import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem';
import CheckItem from './CheckItem';

class App extends Component {
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
      ]
    }

    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    this.updateDone = this.updateDone.bind(this)
  };

  handleAddProduct(name) {
    this.setState((currentState) => {
      return {
        products: currentState.products.concat({
          name: name,
          done: false
        })
      }
    })
  }


  updateDone(name) {
    console.log('checked', name);
    this.setState((currentState) => {
      return {
        products: currentState.products.map((product) =>{
          if (product.name === name){
            product.done = !product.done
          }
          return product;
        })
      }
    })
  };

  handleRemoveProduct(name) {
    console.log('remove', name);
    this.setState((currentState) => {
      return {
        products: currentState.products.filter((product) => product.name !== name)
      }
    })
  };

  render() {
    return (
      <div>
          <h1> My list </h1>
          <AddItem add={this.handleAddProduct} />
        <div>
          <h2> Itens </h2>
          <CheckItem products={this.state.products} confirm={this.updateDone} remove={this.handleRemoveProduct} />
        </div>
      </div>
    );
  }
}

export default App;
