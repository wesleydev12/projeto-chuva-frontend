/*
  ESSE CONTAINER É UM COMPONENTE QUE CRIERI PARA SUBSTITUIR O './Navbar' ONDE O MESMO TINHA UM EVENTO DE DRAW.
*/
import foto from './img/13slaca.png';
import {
  List, ListItem, ListItemText, ImageListItem, Divider, Box
} from '@mui/material';


import './css/containerLeft.css'

export default function ContainerLeft() {
  return (

    <div className='container-left'>
      <Box className='slaca'>
        <h1>SLACA</h1>
      </Box>
      <List className='left-list'>
        <ListItem>
          <ImageListItem className='image' ><img src={foto} alt="Imagem" /></ImageListItem>
        </ListItem>
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
    </div>
  )
}