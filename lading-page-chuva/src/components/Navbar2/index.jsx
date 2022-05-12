import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import {
  Avatar, Badge
} from '@mui/material';
import avatar from './img/avatar.png';
import './css/navbar2.css'
import { Box } from '@mui/material';
import { Language } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Sidebar from '../Sidebar';


export default function Navbar2() {
  return (
    <Box className="header-nav1">
      <div className="meu-btn">
        <Sidebar />
      </div>
      <div>
        <p className='header-1'>
          Anais do Simpósio Latino Americano de Ciências de Alimentos
        </p>
        <p className='header-2'>
          Anais do Simpósio Latino Americano de Ciências de Alimentos
        </p>
        <p className='header-3'>
          ISSN: 1234-5678
        </p>
      </div>
      <div className='lang-btn'><Language /> PT,BR <ArrowDropDownIcon /></div>
      <div className='header-info'>
        <p className='header-4'>
          Bem Vindo!<br />
          <span className='welcome-email'>
            alguem12@galoascience.com
          </span>
        </p>
        <IconButton
          size="large"
          aria-label="show 2 new mails"
          color="inherit">
          <Badge
            className='avatar'
            badgeContent={2}
            color="error">
            <Avatar
              src={avatar}
              alt="avatar" />
          </Badge>
        </IconButton>
      </div>
    </Box>
  )
}
