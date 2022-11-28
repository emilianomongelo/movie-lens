import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DensityMediumIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/favourites'>
          <MenuItem onClick={handleClose}>
            <FavoriteIcon />
            <Typography variant='subtitle1' align='center' color='text.primary' ml={1}>
              Favourites
            </Typography>
          </MenuItem>
        </Link>
        <Link to='/watch-later'>
          <MenuItem onClick={handleClose}>
            <WatchLaterIcon />
            <Typography variant='subtitle1' align='center' color='text.primary' ml={1}>
              Watch later
            </Typography>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};
