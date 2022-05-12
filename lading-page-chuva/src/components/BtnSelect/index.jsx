import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BtnSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 15, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">PT,BR</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          size='small'
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>PT,BR</em>
          </MenuItem>
          <MenuItem value={10}>Portugês</MenuItem>
          <MenuItem value={21}>Inglês</MenuItem>
          <MenuItem value={22}>Espanhol</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}