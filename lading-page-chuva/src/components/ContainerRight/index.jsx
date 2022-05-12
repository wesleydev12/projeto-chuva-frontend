import { FileDownload, Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import './css/containerRight.css'
import { Stack } from "@mui/material";



export default function ContainerRight() {
  return (
    <div className="right-box">
      <Stack direction="row" spacing={1}>
        <Button
          size="small"
          variant="contained"
          className="btn-download">
          <FileDownload />Download
          </Button>
        <Button
          size="small"
          variant="contained"
          className="btn-star"><Star></Star>
          </Button>
        <Button
          size="small"
          variant="contained"
          className="btn-dio"
          href="#">DIO</Button>
      </Stack>
      <Box>
        <h5 className="right-h5">
          <strong className="right-h5-color">COMO CITAR ESSE TRABALHO?</strong>
        </h5>
      </Box>
      <Box className='box-detalhes'>
        <h3 className='title-detalhes'><strong>Detalhes</strong></h3>
      </Box>
      <Box className='text-detalhes'>
        <small className="small-1">
          Tipo de Apresentação: <strong>Pôster</strong><br />
          Eixo temático: <strong>Alimentação e saúde (AS)</strong><br />
          Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong>
        </small>
        <p>
          <strong>Autores:</strong>
          Galileo Galilei¹<br />
          Berta Lange de Morretes²<br />
          Isaac Newton³<br />
          Cesar Lattes¹<br />
          Stephen Hawking⁴
          <strong className="hidden-strong">ver mais</strong>
        </p>
        <small className="small-2">
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo<br />
          ³Instituto Nacional de Pesquisas Espaciais
          ⁴Universidade Federal do Rio de Janeiro
        </small>
      </Box>

    </div>
  )
}