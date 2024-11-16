import { Typography, Button } from "@mui/material"
import { useState } from 'react'
import Items from './Items'

const list = ['Heyvanlar', 'Çizgi Film', 'Miniatür', 'Örtüklər']




function OrderNavigation() {

    const activeColor = '#e7c59a'
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div id='categories-section' className="flex flex-col justify-center py-10 bg-[#faf3eb]">

            <div className="defaultDisplayStyle" style={{
                justifyContent: "space-around",
                flexDirection: "row",
                flexWrap: 'wrap', 
            }}>
                <p className="text-5xl h-[50px] text-center">Məhsullar</p>

                {/* <div className="flex flex-row flex-wrap justify-center mx-[10px]">
                    {list.map((item, index) => (
                        <Button key={index} onClick={() => handleClick(index)} sx={{
                            fontSize: "18px",
                            fontFamily: 'Chilanka',
                            color: "black",
                            borderBottom: 'solid #DEAD6F 1px',
                            margin: "0 4px"
                        }}><p style={{
                            fontWeight: 500,
                            color: activeIndex === index ? activeColor : 'black'
                        }}>{item}</p></Button>
                    ))}
                </div> */}


                {/* <div style={{ width: 'fit-content', minWidth: '100px', padding: '12px 0' , border : "solid red 1px"}}>
                    <Button color='inherit' size='large' variant="outlined" sx={{
                        minWidth: '170px',
                        padding: "10px 35px",
                        margin: "0 20px",
                        fontSize: "18px",
                        fontFamily: 'Chilanka',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                    }}>Sifariş et</Button>
                </div> */}

            </div>

            <Items index={list[activeIndex]} />
        </div>
    )



}


export default OrderNavigation