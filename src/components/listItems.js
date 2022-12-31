import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import RsvpIcon from '@mui/icons-material/Rsvp';
import CottageIcon from '@mui/icons-material/Cottage';
import CommentIcon from '@mui/icons-material/Comment';
import NoFoodIcon from '@mui/icons-material/NoFood';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component="a" href="/guests">
      <ListItemIcon>
        <RsvpIcon />
      </ListItemIcon>
      <ListItemText primary="Guests" />
    </ListItemButton>
    <ListItemButton component="a" href="/comments">
      <ListItemIcon>
        <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Comments" />
    </ListItemButton>
    <ListItemButton component="a" href="/allergies">
      <ListItemIcon>
        <NoFoodIcon />
      </ListItemIcon>
      <ListItemText primary="Allergies" />
    </ListItemButton>
    <ListItemButton component="a" href="/lodgings">
      <ListItemIcon>
        <CottageIcon />
      </ListItemIcon>
      <ListItemText primary="Lodgings" />
    </ListItemButton>
    <ListItemButton component="a" href="/teams">
      <ListItemIcon>
        <SportsHandballIcon />
      </ListItemIcon>
      <ListItemText primary="Teams" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
