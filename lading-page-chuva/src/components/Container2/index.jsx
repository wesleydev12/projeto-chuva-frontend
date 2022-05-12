import './css/container-2.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


export default function Container2() {
  return (
    <div>
      <CssBaseline />
      <Box className='box-main-resumo'>
        <Box className='box-resumo'>
          <h3 className='title-resumo'><strong>Resumo</strong></h3>
        </Box>
        <Box className='text-lorem'>
          <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant...    <b>ver mais</b>
          </p>
          <p className='text-center-hidden'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet.  <b>ver mais</b>
          </p>

        </Box>
      </Box>
    </div>
  )
}