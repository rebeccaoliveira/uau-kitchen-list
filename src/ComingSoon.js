
import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  title: {
    color: '#5a5656',
    fontSize: 50,
    textAlign: 'center',
  },
});

class ComingSoon extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.title}> Coming Soon... </h1>
      </div>
    );
  }
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComingSoon);
