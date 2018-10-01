import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

const styles = theme => ({

  listText: {
    margin: theme.spacing.unit,
    fontFamily: 'indie flower',
    fontSize: 25,
    textAlign: 'center',
  },

  removeButton: {
    margin: theme.spacing.unit,
    color: 'grey',
  },

  changeText: {
    textDecoration: 'line-through',
  },

  root: {
    color: '#5C6BC0',
    '&$checked': {
      color: 'secondary',
    },
  },
  checked: {},
})

class CheckItem extends Component {

  classNameLabel(done, classes) {
    if (done === true) {
      return classNames(classes.listText, classes.changeText)
    } else {
      return classes.listText;
    }
  }

  renderProducts(products, classes) {
    if (products === undefined || products.length === 0) {
      return <h1>No Items</h1>
    }
    return products.map((product) => (
      <div key={product.name}>
        <Grid container direction='row'>
          <Grid item xs={10} >
            <Checkbox
             onChange={() => this.props.confirm(product.name)}
             checked={product.done} id="check1" type="checkbox" color="secondary"
            />
            <label className={this.classNameLabel(product.done, classes)}> {product.name} </label>
          </Grid>
          <Grid item xs={2} >
            <Button size="small"
            className={classes.removeButton}
            onClick={() => this.props.remove(product.name)}>
            <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    ))
  }

  render() {
    const { classes, products } = this.props;
    return (
      <Grid container direction='column'>
        {this.renderProducts(products, classes)}
      </Grid>
    );
  }
}

CheckItem.propTypes = {
  products: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckItem);


// checkbox onde passa a informação que checked é true
// a função do input não está alterando o state
