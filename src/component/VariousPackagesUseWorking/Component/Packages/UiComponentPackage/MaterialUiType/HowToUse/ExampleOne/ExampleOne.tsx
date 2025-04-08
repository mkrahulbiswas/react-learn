import { Box, Fab, FormControl, InputLabel, MenuItem, Select, Slider, Stack, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button';
import { useState } from 'react';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Grid from '@mui/material/Grid2';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <ButtonsMU />
      <LayoutMU />
    </div>
  )
}

export const ButtonsMU = () => {
  const [age, setAge] = useState('');
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [value, setValue] = useState<number>(30);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Input Elements</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="outlined" color="error">Error</Button>
      </div>
      <div className="vpu_ocoplmimotceici_middle mt-4">
        <Fab color="primary" aria-label="add"><AddIcon /></Fab>
        <Fab color="secondary" aria-label="edit"><EditIcon /></Fab>
        <Fab variant="extended"><NavigationIcon sx={{ mr: 1 }} />Navigate</Fab>
        <Fab disabled aria-label="like"><FavoriteIcon /></Fab>
      </div>
      <div className="vpu_ocoplmimotceici_middle mt-4">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={(e: any) => setAge(e.target.value)} >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="vpu_ocoplmimotceici_middle mt-4">
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
      <div className="vpu_ocoplmimotceici_middle mt-4">
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={(e: any) => setValue(e.target.value)} />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </div>
    </div>
  )
}

export const LayoutMU = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Layout Elements</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Grid container spacing={2}>
          <Grid size={8}>
            <div className='bg-light'>size=8</div>
          </Grid>
          <Grid size={4}>
            <div className='bg-light'>size=4</div>
          </Grid>
          <Grid size={4}>
            <div className='bg-light'>size=4</div>
          </Grid>
          <Grid size={8}>
            <div className='bg-light'>size=8</div>
          </Grid>
        </Grid>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>This Box renders as an HTML section element.</Box>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Stack spacing={2}>
          <div className='bg-light'>Item 1</div>
          <div className='bg-light'>Item 2</div>
          <div className='bg-light'>Item 3</div>
        </Stack>
      </div>
    </div>
  )
}