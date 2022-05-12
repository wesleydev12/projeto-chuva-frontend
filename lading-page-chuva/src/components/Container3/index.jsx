import './css/container-3.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import icones from './img/icones-body-discussao.png'
import { Divider, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import Container3Box from '../Container3Box';



export default function Container3() {
  return (
    <div>
      <CssBaseline />
      <Box className='box-main-discussao'>
        <Box className='box-discussao'>
          <h3 className='title-discussao'>
            <strong>Discussões</strong>
          </h3>
        </Box>
        <Box className='body-discussao'>
          <h3 className='body-title'>
            <strong>
              Compartilhe suas ideias ou dúvidas com os autores!
            </strong>
          </h3>
          <img className='icones' src={icones} alt='icones' />
          <p className='body-subtitle'>
            Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus <br /> questionamentos ou sugestões para o autor!
          </p>

          <Divider className='divider-hr'>
            <Button
              size='small'
              variant="contained"
              className='orange-btn'>
              <Add />criar tópico
            </Button>
          </Divider>
          <Container3Box />
          <Container3Box />
        </Box>
      </Box>
    </div>
  )
}