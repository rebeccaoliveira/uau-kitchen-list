import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

checkLabelBox: {
  display: 'flex',
  alignSelf: 'center',
  position: 'relative',
  height: 20,
  width: 20,
  margin: '0 20',
  border: '2 solid #3498db',
  bordeRadius: 2,
  cursor: 'pointer',
},

checkLabelText: {
  display: 'flex',
  alignSelf: 'center',
  position: 'relative',
  cursor: 'pointer',
  borderLeft: '1 solid #ecf0f1',

  '&:after': {
    content: '',
    display: 'block',
    width: '0%',
    height: 2,
    backgroundColor: '#000',
    position: 'absolute',
    top: '50%',
    left: '7.5%',
    transform: 'translateY(-50%)',
    transition: 'width 100 ease-in-out',
  }
},

// hiddenBox:checked + checkLabel: {
//   backgroundColor: '#F9F9F9',
//   check--label-box: {
//     backgroundColor: '#3498db',
//      '&:after': {
//       content: '',
//       display: 'block',
//       position: 'absolute';
//       top: -1;
//       left: 4;
//       width: 6;
//       height: 12;
//       border: 'solid #000',
//       borderWidth: '0 2 2 0',
//       transform: 'rotate(45deg)',
//     }
//   }
//   check--label-text: {
//     '&:after': {
//       width: 85%;
//     }
//   }
// },

})

class CheckItem extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.products.map((product) => (
          <div key={product.name}>
            <input className={classes.hiddenBox}
             onChange={() => this.props.confirm(product.name)}
             checked={product.done} type="checkbox" />
            <label className={classes.checkLabel}> {product.name}
            <span className={classes.checkLabelBox} />
            <span className={classes.checkLabelText} />
            </label>

            <button
            onClick={() => this.props.remove(product.name)}>
            Remove
            </button>
          </div>
        ))}
      </div>
    );
  }
}

CheckItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckItem);


// checkbox onde passa a informação que checked é true
// a função do input não está alterando o state
//
