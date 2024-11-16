
import { Typography } from '@mui/material'
import dog from './images/dog.svg'
import './reset.css'

const data = [{
    id: 0,
    name: 'Heyvanlar',
    icon: dog,
}, {
    id: 1,
    name: 'Örtüklər',
    icon: dog,
}, {
    id: 2,  
    name: 'Miniatür',
    icon: dog,
}, {
    id: 3,
    name: 'Çizgi film qəhrəmanları',
    icon: dog,
}]

function Categories() {

    return ( 
        <div className='flex flex-row justify-center gap-1 flex-wrap items-center mx-[70px] my-[12px]' >
            {data.map(item => (
                <div className='flex flex-col justify-center items-center cursor-pointer h-[180px] w-1/5 min-w-[100px]' key={item.id} >
                    <img src={item.icon} className='w-[80px]' />
                    <Typography className='text-center px-2 py-4 h-[60px]' sx={{ fontWeight: "500", fontFamily: "Chilanka", fontSize: '15px'}}>{item.name}</Typography>
                </div>
            ))}
        </div>
    )
}


export default Categories