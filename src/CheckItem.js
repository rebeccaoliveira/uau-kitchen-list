import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const styles = theme => ({

  listText: {
    margin: theme.spacing.unit,
    fontFamily: 'indie flower',
    fontSize: 25,
    textAlign: 'center',

    '&:after': {
     textDecoration: 'line-through',
   }
  },

  removeButton: {
    margin: theme.spacing.unit,
    color: 'grey',
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

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction='column'>
        {this.props.products.map((product) => (
          <div key={product.name}>
            <Grid container direction='row'>
              <Grid item xs={10} >
                <Checkbox className={classes.checkLabel}
                 onChange={() => this.props.confirm(product.name)}
                 checked={product.done} type="checkbox" color="secondary"
                 classes={{
                  root: classes.root,
                  checked: classes.checked,
                  }} />
                <label className={classes.listText}>{product.name} </label>
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
        ))}
      </Grid>
    );
  }
}

CheckItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckItem);


// checkbox onde passa a informação que checked é true
// a função do input não está alterando o state
