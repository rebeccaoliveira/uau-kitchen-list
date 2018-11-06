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
      loading: false,
      products: [ ]
    }

    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
    this.updateDone = this.updateDone.bind(this)
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
    axios.post(`http://localhost:3000/products.json`, {
        product: {
          name: name,
          done: false,
          shopping_list_id: 1
        }
      })
      .then(res => {
        console.log('axios post result', res)
        this.setState((currentState) => {
          return {
            products: currentState.products.concat(res.data)
          }
        })
      })
  }


  updateDone(id, current_done) {
    axios.put(`http://localhost:3000/products/${id}.json`, {
      product: {
        done: !current_done
      }
    })
    .then(res => {
      console.log('checked', id)
      console.log('axios post result', res)
      this.setState((currentState) => {
        return {
          products: currentState.products.map((product) =>{
            if (product.id === id) {
              product.done = res.data.done
            }
            return product;
          })
        }
      })
    })
  }


  handleRemoveProduct(id) {
    axios.delete(`http://localhost:3000/products/${id}.json`)
    .then(res=>{
      console.log('remove', id);
      this.setState((currentState) => {
        return {
          products: currentState.products.filter((product) => product.id !== id)
        }
      })
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
          <CheckItem products={this.state.products} confirm={this.updateDone} remove={this.handleRemoveProduct} />
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
