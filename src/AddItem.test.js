import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './AddItem';
import { shallow } from 'enzyme';


it('[shallow] renders without crashing', () => {
  shallow(<AddItem />);
});
