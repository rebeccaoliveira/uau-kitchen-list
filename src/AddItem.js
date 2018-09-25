import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

  input: {
    margin: theme.spacing.unit,
    fontFamily: 'indie flower',
    textAlign: 'center',
  },
})


class AddItem extends Component {
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
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Input value={this.state.input}
        onChange={this.updateInput}
        placeholder="Add Item"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        >
        </Input>

        <Button aria-label="Add"
        className={classes.button} onClick={this.handleButtonClick}> <AddIcon /> </Button>
      </Grid>
    );
  }
}

AddItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddItem);
