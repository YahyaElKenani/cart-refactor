import { useEffect, useState } from "react"
import useCartOperations from "../hooks/useCartOperations"
import useAccount from "../hooks/useAccount";
import Header from '../components/Header'
import Button from "../components/Button";
export default function Cart() { 
    const [cart, setCart] = useState([]);
    const user = useAccount();
    const {addToCart, increaseQuantity, decreaseQuantity, removeFromCart} = useCartOperations(cart, setCart, user);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, [])

    useEffect(() => {
        console.log(cart);
    }, [cart])

    return ( 
        <div> 
            <Header showWelcome={true} cartLength={cart?.length} cart={cart}/>     
                <div className="flex flex-wrap justify-center gap-7 p-10">
                    {
                        cart &&
                        cart?.map((product) => (
                            <div className="flex justify-evenly p-4 border w-1/3 min-w-[350px] border-blue-500 rounded-lg gap-3 hover:scale-105 transition-all duration-200 ease-in">
                                <img src={product.imageURL} alt="thumbnail" className="2xl:w-80 xl:w-40 lg:w-36 md:w-30 w-20 object-contain"/>
                                <div className="flex flex-col justify-evenly">
                                    <p className="text-sm md:text-lg">Product: {product.title}</p>
                                    <p className="text-sm md:text-lg">Category: {product.category}</p>
                                    <p className="text-sm md:text-lg">Color: {product.color}</p>
                                    <div className="flex gap-2 text-sm md:text-lg"> 
                                        <p className="line-through">{product.price} EGP</p>
                                        <p>{product.salePrice} EGP</p>
                                    </div>
                                    <div className="flex items-center gap-3"> 
                                        { 
                                            cart.find((item) => item.id === product.id) ? 
                                            <Button label={'Remove From Cart'} click={() => removeFromCart(product)}/>
                                            :
                                            <Button label={'Add To Cart'} click={() => addToCart(product)}/>
                                        }
                                        <div className="text-red-500 text-3xl cursor-pointer" onClick={() => decreaseQuantity(product)}>-</div>
                                        <div className="text-green-500 text-xl cursor-pointer" onClick={() => increaseQuantity(product)}>+</div>
                                        <div className="text-xl"> {product.quantity} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-xl">Total</div>
                    <div className="text-xl p-1">
                        {cart?.reduce((acc, product) => acc + (product.salePrice * product.quantity), 0)} EGP
                    </div>
                </div>
        </div>
    )
}