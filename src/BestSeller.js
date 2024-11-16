import { Typography, Button, Rating } from "@mui/material"
import { itemsData } from "./ItemsData"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/amiguSlice";
import { useState } from "react";
import { Snackbar, Alert } from '@mui/material'

function BestSeller() {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    return (
        <div style={{ display: 'flex', margin: "40px 0", flexDirection: "row", alignItems: "center", justifyContent: 'center', flexWrap: 'wrap' }}>

            <div className="defaultDisplayStyle" style={{
                minWidth: "30px",
                width: '90%',
                flexDirection: 'column',
                alignContent: "center",
                justifyContent: 'space-between',
                flexWrap: "wrap",
            }}>

                <p style={{ width: 'fit-content', fontFamily: 'Chilanka', fontSize: "50px", height: '50px' }}>Ən çox Satılanlar</p>


                {/* BUTTON */}
                <div style={{ width: 'fit-content', minWidth: '100px', padding: '12px 0' }}>
                    <Button color='inherit' size='large' variant="outlined" sx={{
                        minWidth: '170px',
                        padding: "10px 35px",
                        // margin: "0 20px",
                        fontSize: "18px",
                        fontFamily: 'Chilanka',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                    }}>Sifariş et</Button>
                </div>

            </div>



            <div className="defaultDisplayStyle" style={{ margin: 'auto', justifyContent: "center", flexWrap: "wrap" }}>
                {itemsData.filter(stuf => stuf.bestSeller === true).map(item => (
                    <div key={item.id} style={{ margin: "25px" }}>
                        <img src={item.img} style={{ width: '100%', minWidth: '250px', height: '300px', borderRadius: '20px' }} />
                        <Typography fontFamily={'Chilanka'} fontSize={32}>{item.name}</Typography >
                        <Rating
                            sx={{ color: "#DEAD6F" }}
                            name="simple-controlled"
                            value={item.rating}
                        // onChange={(event, newValue) => {
                        //     setValue(newValue);
                        // }}
                        />
                        <Typography fontSize={32} fontFamily={'Montserrat'} color='#DEAD6F'>${item.amount} </Typography>
                        <div className='defaultDisplayStyle' style={{ justifyContent: 'flex-start', gap: 10 }}>
                            <Button onClick={() => {
                                dispatch(addToCart(item))
                                setOpen(false)
                                setOpen(true)
                                setTimeout(() => {
                                    setOpen(false)
                                }, 2000);
                            }} color='inherit' size='large' variant="outlined" sx={{
                                minWidth: '170px',
                                padding: "12px 22px",
                                fontSize: '20px',
                                fontFamily: 'Chilanka',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}> Səbətə əlavə et </Button>


                            <Snackbar open={open} autoHideDuration={3000}>
                                <Alert
                                    severity="success"
                                    variant="filled"
                                    sx={{ width: '100%' }}
                                >
                                    Səbətə əlavə edildi !
                                </Alert>
                            </Snackbar>

                            <FavoriteIcon sx={{ cursor: 'pointer', fontSize: '20px', color: "black", border: 'solid gray 1px', borderRadius: '10px', padding: '18px 17px' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default BestSeller