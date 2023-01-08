import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AutoMode, Cloud, Delete, DeleteForever, Tv } from '@mui/icons-material';

const pages = [
  { "name": 'AWS', "icon": Cloud },
  { "name": 'Local', "icon": Tv }
];


export default function ActionComponent() {

  return (


    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.name}
          startIcon={<page.icon />}
          // onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'black' }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  )
}