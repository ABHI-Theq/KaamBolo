// DropdownMenu.js
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropdownMenu({ buttonText, menuItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
      sx={{
        color: 'rgb(102, 102, 102)',
        fontSize: '1.5rem',
        marginTop: '0.8rem',
      }}
        id="menu-button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
      <Menu
        sx={{
          minWidth: 250, // Increases the minimum width of the menu
          fontSize: '1.2rem', // Increases the font size of the menu items
          '& .MuiMenuItem-root': {
            padding: '12px 24px', // Increases padding for individual menu items
            fontSize: '1.2rem', // Increases the font size of individual menu items
          },
        }}
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
