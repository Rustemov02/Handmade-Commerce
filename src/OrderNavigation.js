import { useState } from 'react'
import Items from './Items'

const list = ['Heyvanlar', 'Çizgi Film', 'Miniatür', 'Örtüklər']




function OrderNavigation() {
 
    const [activeIndex, setActiveIndex] = useState(0)

    

    return (
        <div id='categories-section' className="flex flex-col justify-center py-10 bg-[#faf3eb]">

            <div className="defaultDisplayStyle" style={{
                justifyContent: "space-around",
                flexDirection: "row",
                flexWrap: 'wrap', 
            }}>
                <p className="text-5xl h-[50px] text-center font-sans">Məhsullar</p> 
            </div>

            <Items />
        </div>
    )



}


export default OrderNavigation