
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
        <div className='defaultDisplayStyle' style={{ flexDirection: 'row', justifyContent: "space-evenly", flexWrap: "wrap", margin: "70px 12px" }}>
            {data.map(item => (
                <div className='defaultDisplayStyle' key={item.id} style={{cursor : 'pointer', height: '180px', width: '15%', minWidth: '150px', flexDirection: "column", justifyContent: 'space-between'}}>
                    <img src={item.icon} className='colorStyle' style={{ width: "120px"}} />
                    <Typography sx={{ textAlign: 'center', padding: "2px 4px", fontWeight: "500", fontFamily: "Chilanka", fontSize: '20px' }}>{item.name}</Typography>
                </div>
            ))}
        </div>
    )
}


export default Categories