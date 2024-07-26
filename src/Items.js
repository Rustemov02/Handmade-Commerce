import { Button, Typography, Rating } from '@mui/material'
import { itemsData } from './ItemsData.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  useDispatch } from 'react-redux';
import { addToCart } from './Redux/amiguSlice.js';
import { useState } from 'react';

function Items(activeİndex) {

    const dispatch = useDispatch() 
 

    return (
        <div style={{ width: '90%', margin: "auto", padding: '20px 0', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

            {itemsData.filter(item => item.type == activeİndex.index).map((stuf, index) => (

                <div key={stuf.id} style={{ margin: "25px" }}>
                    <img src={stuf.img} style={{ width: '100%', minWidth: '250px', height: '300px', borderRadius: '20px' }} />
                    <Typography fontFamily={'Chilanka'} fontSize={32}>{stuf.name}</Typography >
                    <Rating
                        sx={{ color: "#DEAD6F" }}
                        name="simple-controlled"
                        value={stuf.rating}
                    />
                    <Typography fontSize={32} fontFamily={'Montserrat'} color='#DEAD6F'>${stuf.amount} </Typography>
                    <div className='defaultDisplayStyle' style={{ justifyContent: 'flex-start', gap: 10 }}>
                        <Button onClick={() => { 
                            dispatch(addToCart(stuf)) 
                        }} color='inherit' size='large' variant="outlined" sx={{
                            minWidth: '170px',
                            padding: "12px 22px",
                            fontSize: '20px',
                            fontFamily: 'Chilanka',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "center"
                        }}> Səbətə əlavə et </Button>
                        {/* {data.cartStatus ? 'Əlavə edildi' : 'Səbətə əlavə et'} */}
                        {/* {buttonStates[index]} */}
                        <FavoriteIcon sx={{ cursor: 'pointer', fontSize: '20px', color: "black", border: 'solid gray 1px', borderRadius: '10px', padding: '18px 17px' }} />
                    </div>
                </div>
            ))}



        </div>
    )
}

export default Items