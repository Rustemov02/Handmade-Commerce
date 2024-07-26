import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DrawerList() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{width : '100%',display : 'flex' , justifyContent  :"center"}}>

            <FormControl sx={{
               width: '250px' 
            }}>
                <InputLabel id="demo-simple-select-helper-label" sx={{fontFamily: 'Chilanka, cursive', fontSize: '18px', color: 'black' }}>Shop by category</InputLabel>
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