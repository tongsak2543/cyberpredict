// Navbar1.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Button } from '@mui/material';


const pages = ["2021", "2022", "2023", "2024", "2025", "Go Day Page"];

function Navbar1({ onSelectTopic }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuItemClick = (page) => {
    if (page === "Go Day Page") {
      navigate('/day'); // Redirect to the "day" page
    } else {
      onSelectTopic(page); // Keep the same logic for other pages
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#050056' }}>
      <Toolbar disableGutters>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Cyber Predict
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleMenuItemClick(page)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {pages.map((page) => (
            <ListItem button key={page} onClick={() => handleMenuItemClick(page)}>
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar1;
