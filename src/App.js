
import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './Dashboard';
// import ToDoList from './ToDoList';




class App extends Component {
  render() {
    return (
      <Dashboard />
    );
  }
}

export default App;


// <BrowserRouter>
//   <div>
//     <Route path="/todolist" component={ToDoList} />
//   </div>
// </BrowserRouter>
