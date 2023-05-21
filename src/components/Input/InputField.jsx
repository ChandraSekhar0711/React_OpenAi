import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import s from './style.module.css';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
export function InputField({onQueryClick}) {
  const onQuery = () =>{
    const Query = document.getElementById("query").value;
    onQueryClick(Query);
  }
  return (
    <Box className={s.entry} >
      <div >
    <FormControl sx={{ m: 1, width: '30ch'  }} variant="standard">
          <InputLabel className={s.inputLabel} htmlFor="standard-adornment-search">Enter Your Query...</InputLabel>
          <Input 
            id="query"
            multiline
            maxRows={5}
            className={`text-white ${s.input}`}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="serach" 
                  onClick={onQuery}
                >
                  <SearchIcon color="primary" fontSize="large"/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        </Box>
  );
}
