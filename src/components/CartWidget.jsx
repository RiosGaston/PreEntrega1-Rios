import imgCart from '../assets/cart.png'

export const CartWidget = () => {
    return (
    <>
        <img src= {imgCart} alt="Carrito de compras" className="cart"/>
        <span className="contador">50</span>
    </>
    )
}