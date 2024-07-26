import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer } from '@mui/material'


import {Box} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
// import MultipleSelect from './MultipleSelect'
import DrawerList from '../../Drawer/DrawerList';
import DrawerMenu from '../../Drawer/DrawerMenu'

export default function TogglerIcon() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => { 
        setOpen(newOpen);
    };

    return (    
        <>
            <MenuIcon
                onClick={() => {
                    toggleDrawer(!open);
                }}
                sx={{
                    display: 'none',
                    fontSize: '40px',
                    border: 'olid gray 1px',
                    borderRadius: '10px',
                    padding: "2px 6px",
                    '@media (max-width : 990px)': {
                        display: "flex"
                    }
                }}
            />
            <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)} >
                <Box sx={{padding : "10px" , width : '300px' , height : '100%',display : 'flex' , flexDirection : "column" , alignItems : "center"}}>
                <CloseIcon onClick={()=>{
                    toggleDrawer(false)
                }} sx={{fontSize : "40px" , color : "gray"}}/>

                <DrawerList/>

                <DrawerMenu />
                </Box>
            </Drawer>
        </>
    );
}