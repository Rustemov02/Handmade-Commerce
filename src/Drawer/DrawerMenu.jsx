import { useState } from "react";
import { Box, Button, Divider, Typography } from '@mui/material'


function DrawerMenu() {

    const pages = ['Home', 'Pages', 'Shop', "Contact", 'Others'];
    const activeColor = '#e7c59a'
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <Box sx={{//didn't work with "width"
            flexGrow: 1,marginTop : "20px" ,width : "100%",display: 'flex' , flexDirection : 'column'
        }}>
            <Divider oritentation='vertical'></Divider>
            {pages.map((page, index) => (
                <Button
                    key={page}
                    onClick={() => handleClick(index)}
                    sx={{
                        padding: 0,
                        my: 1,
                        display: 'block',
                        fontFamily: "Chilanka, cursive", 
                        '&:hover': {
                            color: '#e7c59a',
                            background: 'none'
                        }
                    }}
                >
                    <Typography style={{
                        fontFamily: "Chilanka",
                        fontSize : "22px",
                        fontWeight: 500,
                        color: activeIndex === index ? activeColor : 'black'
                    }}>{page}</Typography>
                </Button>
            ))}
        </Box>
    )
}

export default DrawerMenu