import React from 'react';
import ReactDOM from 'react-dom';
import CheckItem from './CheckItem';
import { shallow } from 'enzyme';

const products = [
  {
    id: 1,
    name: '1 kg banana',
    done: true,
  },
  {
    id: 2,
    name: '1 kg apple',
    done: false,
  },
];

it('[smoke] renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckItem products={products} />, div);
});

it('[shallow] renders without crashing', () => {
  shallow(<CheckItem products={products} />);
});
