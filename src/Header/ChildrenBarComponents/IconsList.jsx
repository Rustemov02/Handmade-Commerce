import { useState } from 'react'
import { Box, Drawer, Divider, Typography, Badge, Paper, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Media from 'react-media';
import { InputBase } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/amiguSlice';


export default function IconsList() {
    const [openList, setOpenList] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.amigurumi.cart)
    const countClickedItems = cart.length
    const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0)

    const toggleDrawerList = (newOpen) => {
        setOpenList(newOpen);
    };

    const toggleDrawerSearch = (newOpen) => {
        setOpenSearch(newOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: "row" }}>
            <IconButton size="large" color='inherit'>
                <PersonIcon sx={{ fontSize: '30px' }} />
            </IconButton>

            <IconButton size="large" color="inherit">
                <FavoriteIcon sx={{ fontSize: '30px' }} />
            </IconButton>

            <IconButton color='inherit' onClick={() => {
                toggleDrawerList(!openList);
            }} >
                <Badge badgeContent={countClickedItems} color="primary">
                    <ShoppingCartIcon sx={{ fontSize: '30px' }} />
                </Badge>
            </IconButton>

            <Media query='(max-width : 990px)'>
                <IconButton color='inherit' onClick={() => {
                    toggleDrawerSearch(!openSearch);
                }}>
                    <SearchIcon sx={{ fontSize: '30px' }} />
                </IconButton>
            </Media>


            {/* Drawer for menu lists */}
            <Drawer sx={{ height: "auto" }} anchor='right' open={openList} onClose={() => toggleDrawerList(false)} >
                <Box sx={{ padding: "10px", width: '320px', minWidth: '300px', height: 'auto', scrollbarWidth: 'auto', display: 'flex', flexDirection: "column", alignItems: "center" }}>

                    {/* <CloseIcon onClick={() => {
                        toggleDrawerList(false)
                    }} sx={{ fontSize: "40px", color: "gray", cursor: 'pointer', '&:hover': { color: '#DEAD6F', transition: ".5s" } }} /> */}
                    {/* <Divider sx={{ height: 5, width: '90%', m: 1, color: 'red' }} orientation="horizontal" /> */}
                    {countClickedItems == 0 && <p className='text-3xl text-[#DEAD6F] py-4' >Your Cart is Empty</p>}

                    {/* <div style={{ padding: "8px 0px", marginTop: "10px", display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: '100%' }}>
                        <Typography sx={{ fontFamily: 'Chilanka', fontSize: '24px' }}>{countClickedItems == 0 ? '' : countClickedItems}</Typography>
                    </div> */}







                    <div className='w-full '>
                        {cart.map((item, index) => (
                            <div className='flex flex-col'>
                                <div key={index} className="w-full h-auto flex flex-row  items-center justify-between h-fit my-2">

                                    <img src={item.img} className='w-1/4 h-24 my-2 rounded-lg' />
                                    <p className='font-chilanka text-xl text-300 my-2 h-fit text-[#DEAD6F]'>{item.name}</p>
                                    <p className='h-fit font-chilanka text-xl'> {item.amount} AZN</p>
                                    <DeleteIcon onClick={() => dispatch(removeFromCart(item.id))} sx={{ color: '#DEAD6F', cursor: 'pointer', fontSize: '30px', '&:hover': { color: "black", transition: '.5s' } }} />

                                </div>
                                < Divider sx={{ height: 5, width: '90%', m: 1, color: 'red' }} orientation="horizontal" />
                            </div>
                        ))}
                    </div>
                    {countClickedItems > 0 && (
                        <>
                            {/* < Divider sx={{ height: 5, width: '90%', m: 1, color: 'red' }} orientation="horizontal" /> */}

                            <div className='text-2xl text-[#DEAD6F] flex flex-row justify-around w-full py-4'> <p className='text-sans'> Toplam Qiymət  </p><p>{totalAmount} AZN</p></div>
                            <Button color='inherit' size='large' variant="contained" sx={{
                                padding: "10px 35px",
                                margin: "0 20px",
                                fontSize: "18px",
                                fontFamily: 'Chilanka',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "center",
                                backgroundColor : '#DEAD6F',  
                            }}>Sifariş Et</Button>
                        </>
                    )

                    }



                </Box>
            </Drawer >



            {/* Drawer for search items */}
            < Drawer anchor='right' open={openSearch} onClose={() => toggleDrawerSearch(false)
            } >
                <Box sx={{ padding: "10px", width: '300px', height: '100%', display: 'flex', flexDirection: "column", justifyContent: 'flex-start', alignItems: "center" }}>

                    <CloseIcon onClick={() => { toggleDrawerSearch(false) }} sx={{ fontSize: "40px", color: "gray" }} />

                    <Typography sx={{ fontFamily: 'Chilanka', fontSize: '28px' }}>Search</Typography>


                    <div style={{ width: "100%", margin: '15px 0' }}>
                        <Paper
                            component="form"
                            sx={{ p: '8px 10px', display: 'flex', alignItems: 'center', maxWidth: 500, }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Here"
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                </Box>
            </ Drawer>

        </Box >
    )
}