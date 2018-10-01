import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import { shallow } from 'enzyme';


it('[smoke] renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoList />, div);
});

it('[shallow] renders without crashing', () => {
  shallow(<ToDoList />);
});
