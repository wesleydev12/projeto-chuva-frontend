/*
  FIZ ESSE COMPONENTE PARA USAR COMO UM LEFT-SIDEBAR QUANDO A TELA FICAR MENOR

*/
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {
  Drawer, List, ListItem, ListItemText, ImageListItem, Divider
} from '@mui/material';
import './css/sidebar.css';
import foto from './img/13slaca.png';
// import './css/slaca.css';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import './css/menu-btn.css'



export default function Sidebar() {
  const [menuSidebar, setMenuSidebar] = React.useState(false);
  const handleOpenCloseSidebar = () => {
    setMenuSidebar(!menuSidebar);
  }
  
  // const [menuUser, setMenuUser] = React.useState(false);
  // const handleOpenClose = () => {
  //   setMenuUser(!menuUser);
  // };

  return (
    <div>
      <Toolbar>
        <IconButton
          size="large"
          onClick={handleOpenCloseSidebar}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor={"left"}
        open={menuSidebar}
        onClose={handleOpenCloseSidebar}
      >
        <List>
          <ListItem className='slaca'>
            <ListItemText><h1>SLACA 2019</h1></ListItemText>
          </ListItem>
          <ImageListItem className='image' ><img src={foto} alt="Imagem" /></ImageListItem>
          <ListItem button>
            <ListItemText>Apresentação</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText>Comitês</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText>Autores</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText>Eixos temáticos</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText>Trabalhos</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText>Contato</ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </div>
  );
}
