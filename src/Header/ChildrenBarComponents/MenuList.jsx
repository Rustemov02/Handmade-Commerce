import { useState } from "react";
import { Box, Button } from '@mui/material'


function MenuList() {

    const pages = ['Home', 'Pages', 'Shop', "Contact", 'Others'];
    const activeColor = '#e7c59a'
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <Box sx={{//don't work with "width"
            border : 'solid red 1px',
            maxWidth: 400, flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center',
            '@media (max-width : 990px)': {
                display: "none"
            }
        }}>
            {pages.map((page, index) => (
                <Button
                    key={page}
                    onClick={() => handleClick(index)}
                    sx={{
                        my: 1,
                        display: 'block',
                        fontFamily: "Chilanka, cursive",
                        fontSize: 16,
                        '&:hover': {
                            color: '#e7c59a',
                            background: 'none'
                        }
                    }}
                >
                    <p style={{
                        fontWeight: 500,
                        color: activeIndex === index ? activeColor : 'black'
                    }}>{page}</p>
                </Button>
            ))}
        </Box>
    )
}

export default MenuList