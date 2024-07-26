import React from 'react'
import { Divider } from '@mui/material'
import Logo from './Logo'
import Bar from '../Header/Bar'
import '../mediaQuery.css'
import Search from './Search';
import Media from 'react-media'

const contactItems = {
    fontWeight: '300',
    fontSize: '20px',
    width: "100%",
    minWidth: "140px",
}

export function Header() {

    return (
        <div>
            {/* FIrst Header */}
            <div style={{ paddingTop: 15, width: '100%', display: 'flex', justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>

                <Logo style={{ border: "solid red 1px", width: '30%' }} />

                {/* Search Area */}
                <Media query='(max-width : 990px)'>
                    {() => {
                        return <Search/>
                    }}
                {/* <Search/> */}
                </Media>
                  
                {/* Contact area */}
                <div className='none1200 contactArea' >

                    <div>
                        <p style={{ ...contactItems, fontFamily: 'Montserrat ,  cursive' }}>Phone</p>
                        <p style={{ ...contactItems, fontFamily: "Chilanka, cursive" }}>+994 55 778 3324</p>
                    </div>

                    <div>
                        <p style={{ ...contactItems, fontFamily: 'Montserrat ,  cursive' }}>Email</p>
                        <p style={{ ...contactItems, fontFamily: "Chilanka, cursive" }}>bunyamin2002@mail.ru</p>
                    </div>
                </div>

            </div>

            <Divider sx={{ height: 5, m: 1 }} orientation="horizontal" />

            {/* Second Header */}

            <div>
                <Bar />
            </div>
        </div>
    )
}
