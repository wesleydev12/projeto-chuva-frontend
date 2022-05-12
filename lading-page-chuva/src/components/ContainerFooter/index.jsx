import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import footer from './img/image-footer.png';
import './css/footer.css';

export default function ContainerFooter() {
  return (
    <Box className="footer-box">
      <Divider className="footer-divider" />
      <img className="image-footer" src={footer} alt="Imagem do footer"/>
    </Box>
  )
}