import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './css/container-1.css';
import fotoVideo from './img/image-video.png'
import ContainerRight from '../ContainerRight';

export default function Container1() {
  return (
    <div>
      <CssBaseline />
      <Box className='box-main'>
        <Box className='box-1'>
          <h3 className='title-h3'>
            Análise sensorial de preparações funcionais desenvolvidas para escolares<br />entre 09 e 15 anos, do município de Campinas/SP
          </h3>
          <img src={fotoVideo} className="photo-video" alt='Foto do Vídeo' />
        </Box>
        <ContainerRight />
      </Box>
      {/* <ContainerRight/> */}
    </div>
  )
}