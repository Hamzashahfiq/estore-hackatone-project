import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './HeadernavBar.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardModel from '../cardModal/CardModal'
import Button from '@mui/material/Button';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';



export default function HeadernavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className='appBarMain' >
                <Toolbar>
                    <Typography variant="h6" component="div" className='typodiv' sx={{ flexGrow: 1, fontSize: 25 }} >
                        E-Store
                    </Typography>

                    <Box sx={{ display: 'flex', mx: 5 }}>
                        
                        <Link to='/' style={{ textDecoration: 'none' }}> <Button sx={{ mx: 2 }} variant="outlined" startIcon={<HomeIcon />}>
                            Home
                        </Button></Link>
                        <Link to='/adminlogin' style={{ textDecoration: 'none' }}> <Button sx={{ mx: 2 }} variant="outlined" startIcon={<AdminPanelSettingsIcon />}>
                            Admin
                        </Button></Link>
                            <CardModel />
                    </Box>



                </Toolbar>
            </AppBar>
        </Box>
    );
}
