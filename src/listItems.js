import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

const mainListItems = (
  <div>
    <NavLink to="/dashboard" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
    </NavLink>
    <NavLink to="/todolist" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Todo List" />
      </ListItem>
    </NavLink>
    <NavLink to="/recipes" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Recipes" />
      </ListItem>
    </NavLink>
    <NavLink to="/mealplan" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Meal Plan" />
      </ListItem>
    </NavLink>
  </div>
);

export default mainListItems;
