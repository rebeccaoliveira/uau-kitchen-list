import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

import AddItem from './AddItem';
import CheckItem from './CheckItem';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  align: {
    iself: 'center',
    items: 'center',
    content: 'center',
  },

  title: {
    color: '#5a5656',
    fontSize: 50,
    textAlign: 'left',
  },

  title2: {
    color: '#5a5656',
    fontSize: 30,
    textAlign: 'left',
  }
});


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [
        // {
        //   name: '1 kg banana',
        //   done: true,
        // },
        // {
        //   name: '1 kg apple',
        //   done: false,
        // },
      ]
    }

    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    this.updateDone = this.updateDone.bind(this)
    this.handleDone = this.handleDone.bind(this)
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/shopping_lists/1.json`)
      .then(res => {
        console.log('axios result', res)
        const products = res.data.products;
        this.setState({ products, shoppingListId: 1, loading: false });
      })
  }

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

  handleDone(name) {
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
    const { classes } = this.props;
    if (this.state.loading) {
      return (<h1>Loading</h1>)
    }
    return (
      <div className={classes.align}>
      <Grid container spacing={24} justify="space-around">
        <Grid item xs={12} md={4} lg={4}>
          <h1 className={classes.title}> My list </h1>
          <AddItem add={this.handleAddProduct} />
          <h2 className={classes.title2}> Items </h2>
          <CheckItem products={this.state.products} confirm={this.updateDone} remove={this.handleRemoveProduct} change={this.handleDone} />
        </Grid>
      </Grid>
      </div>
    );
  }
}

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDoList);
