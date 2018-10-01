import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import { shallow } from 'enzyme';

it('[smoke] renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddItem />, div);
});

it('[shallow] renders without crashing', () => {
  shallow(<AddItem />);
});
