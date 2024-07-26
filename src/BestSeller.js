import { Typography, Button, Rating } from "@mui/material"
import { bestSeller } from "./ItemsData" 
import FavoriteIcon from '@mui/icons-material/Favorite';

function BestSeller() { 


    return (
        <div style={{ display: 'flex',margin : "40px 0", flexDirection: "row", alignItems: "center", justifyContent: 'center', flexWrap: 'wrap' }}>

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
                {bestSeller.map(item => (
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
                            <Button color='inherit' size='large' variant="outlined" sx={{
                                minWidth: '170px',
                                padding: "12px 22px",
                                // margin: "0 20px",
                                fontSize: "18px",
                                fontFamily: 'Chilanka',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}>Səbətə əlavə et</Button>

                            <FavoriteIcon sx={{ cursor: 'pointer', fontSize: '20px', color: "black", border: 'solid gray 1px', borderRadius: '10px', padding: '18px 17px' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default BestSeller