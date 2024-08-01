import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { incrementQuantity, decrementQuantity, removeFromCart } from './Redux/amiguSlice'
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
    const cart = useSelector(state => state.amigurumi.cart)
    const dispatch = useDispatch()

    return (

        <div>
            <div>
                <p>Alış-veriş Səbəti</p>
            </div>


            <div>

                {(cart.map((item, index) => (
                    <div key={index} className="border-2 flex flex-row items-center justify-evenly">

                        <img src={item.img} className="w-[170px] h-[220px]" />
                        <p>{item.name}</p>
                        <p>{item.amount} AZN</p>

                        {/* counter */}

                        <div className='flex flex-row '>
                            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                        </div>


                        <DeleteIcon onClick={() => dispatch(removeFromCart(item.id))} />

                        <button onClick={()=>console.log()}>Check</button>
                        <p>Totaly : {item.quantity * item.amount}</p>



                    </div>
                )))}
            </div>



        </div>
    )
}


export default Cart