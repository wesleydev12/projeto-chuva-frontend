import './css/headers.css';
import { Box } from '@mui/system';
// import { FileDownload } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import { ArrowDropDown, Language } from '@mui/icons-material';



export default function Header() {
  return(
      <Box className="header-main">
            <p className='header-1'>
            Anais do Simpósio Latino Americano de Ciências de Alimentos
            </p>
            <p className='header-2'>
            Anais do Simpósio Latino Americano de Ciências de Alimentos 
            </p>
            <p className='header-3'>
            ISSN: 1234-5678
            </p>
          </Box>
  )
}