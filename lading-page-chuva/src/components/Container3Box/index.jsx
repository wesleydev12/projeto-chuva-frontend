import { Box } from "@mui/system";
import { Favorite, MoreVert } from "@mui/icons-material";
import { Button } from "@mui/material";
import './css/containerBox.css'


export default function Container3Box() {
  return (
    <Box className='topic-one'>
      <div className='topic-title'>
        <h5 className='topic-assunto'>
          Assunto da pergunta aparece aqui
        </h5>
        <small className='topic-create'>
          Carlos Henrique Santos
        </small>
        <p className='topic-phrase'>
          Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
        </p>
        <span
          className='morevert-btn'>
          <MoreVert />
        </span>
        <Button
          variant="contained"
          className='favorite-btn'>
          <Favorite />
        </Button>
        <small className='topic-like'>
          1 likes
        </small>
        <small className="topic-response">
          1 resposta
        </small>
      </div>
    </Box>
  )
}