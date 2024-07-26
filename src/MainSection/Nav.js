import { Typography, Button } from '@mui/material'
import banner from '../images/banner-img.png'
import '../mediaQuery.css'
import Media from 'react-media'

function Nav() {

    return (
        <Media query="(min-width: 750px)">
            {matches => (
                <div style={{
                    height: 'auto',
                    width: '100%',
                    backgroundColor: "#F9F3EC",
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent : 'center',
                    flexDirection: matches ? 'row' : 'column',
                }}>

                        <img style={{ width: '40%', minWidth: '250px' ,height : "50%"  }} src={banner} />

                    <div style={{ width: 'fit-content' ,minWidth : '100px', padding : '12px 0'  }}>
                        <Typography fontSize={60} fontFamily='Chilanka' sx={{padding : '0 20px' }}>Best Destina For <span style={{ color: '#DEAD6F' }}>Your Pets</span></Typography>
                        <Button color='inherit' size='large' variant="outlined" sx={{
                            padding: "10px 35px",
                            margin : "0 20px",
                            fontSize: "18px",
                            fontFamily: 'Chilanka',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "center",
                        }}>Shop Now</Button>
                    </div>

                </div >
            )}

        </Media>
    )
}



export default Nav