
import { useSelector } from "react-redux"



function Cart() {

    const cart = useSelector(item => item.amigurumi.cart)

    return (
        <div>
            <div>
                <p>Alış-veriş Səbəti</p>
            </div>


            <div>
                {cart.map((item, index) => {
                    <div key={index}>
                        <img src={item.img} />
                    </div>
                })}
            </div>



        </div>
    )
}


export default Cart