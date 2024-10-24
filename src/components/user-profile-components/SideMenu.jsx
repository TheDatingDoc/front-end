import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Avatar } from '@mui/material';

const SideMenu = () => {
  return (
    <Box
      sx={{
        width: '200px',
        backgroundColor: '#222',
        color: 'white',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <Avatar
        alt="Profile Picture"
        src="/path/to/user/avatar"
        sx={{ width: 60, height: 60, mb: 3 }}
      />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/messages">
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/dating">
          <ListItemText primary="Dating" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideMenu;
