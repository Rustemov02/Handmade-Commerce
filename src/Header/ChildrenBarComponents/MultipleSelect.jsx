import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='none990'>

      <FormControl sx={{
        m: 1, minWidth: 120, width: '200px'
      }}>
        <InputLabel id="demo-simple-select-helper-label" sx={{ fontFamily: 'Chilanka, cursive', fontSize: '18px', color: 'black' }}>Shop by category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label=" Shop by category --"
          onChange={handleChange}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}