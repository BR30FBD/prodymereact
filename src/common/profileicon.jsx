import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Logout from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';

const Profileicon = () => {
    const nav=useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handlelogout=()=>{
        localStorage.removeItem('prodymeApiToken')
nav('/')
      }
  return (
    <div sx={{backgroundColor:"none"}}>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',backgroundColor:"none" }}>
      <Tooltip title="Account settings" sx={{backgroundColor:"none"}}  >
        <Box
          onClick={handleClick}
          size="small"
          id="abcd"
          sx={{ ml: 2,backgroundColor:"none" }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32,background:"#86cdea" }} />
        </Box>
      </Tooltip>
    </Box>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
           <NavLink to='/myaccount' style={{textDecoration:"none"}}>
      <MenuItem onClick={handleClose} className='btn-clor'  sx={{color:"#86cdea"}}>
        <Avatar sx={{background:"#86cdea"}} /> My Profile
      </MenuItem>
      </NavLink>
      <Divider />
      <NavLink to='/myorder' style={{textDecoration:"none"}}>
      <MenuItem onClick={handleClose} sx={{color:"#86cdea"}}>
        <AssignmentIcon  /> My Order
      </MenuItem>
      </NavLink>
      <Divider />
      <MenuItem onClick={handlelogout} sx={{color:"#86cdea"}}>
        <ListItemIcon>
          <Logout fontSize="small"  sx={{color:"#86cdea"}}   />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  </div>
  )
}

export default Profileicon