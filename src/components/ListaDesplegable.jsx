import React from 'react';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function ListaDesplegable() {
    const [Moneda, setMoneda] = React.useState('');
  
    const handleChange = (event) => {
      setMoneda(event.target.value);
      }
    
    return ( 
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="monedas">Moneda</InputLabel>
        <Select
          labelId="monedas"
          id="monedas"
          value={Moneda}
          label="Moneda"
          onChange={handleChange}>
          <MenuItem value={10}>$</MenuItem>
          <MenuItem value={20}>€</MenuItem>
          <MenuItem value={30}>¥</MenuItem>
        </Select>
      </FormControl>
    </Box>);
  };
