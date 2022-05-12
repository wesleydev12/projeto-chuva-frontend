import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { Avatar, Badge
} from '@mui/material';
import avatar from './img/avatar.png';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './css/navbar.css';
import { ArrowDropDown, Language } from '@mui/icons-material';

export default function Navbar() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FDF1EB" }}>
      <Header/>
      <Sidebar/>
      <div className='language-btn'>
            <Language className='world-btn'/>
            <p className='header-ptBr'>PT,BR</p>
            <ArrowDropDown className='arrow-down' />
      </div>
          <p className='header-4'>
            Bem Vindo!
            </p>
            <p className='welcome-email'>
            alguem12@galoascience.com
            </p>
          <div className='avatar'>
            <IconButton
              size="large"
              aria-label="show 2 new mails"
              color="inherit">
              <Badge
              badgeContent={2}
               color="error">
              <Avatar 
              src={avatar}
              alt="avatar"/>
              </Badge>
            </IconButton>
          </div>
      </AppBar>
    </Box>
  );
}
