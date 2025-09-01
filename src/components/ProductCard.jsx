import { useState } from "react";
import Button from "./Button";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
export default function ProductCard({product, addToCart, removeFromCart, cart}) { 
    const [isFavorite, setIsFavorite] = useState(false);
    return ( 
        <div className="flex flex-col p-4 border border-blue-500 w-100 rounded-lg gap-3 hover:scale-105 transition-all duration-200 ease-in"> 
            <img src={product.imageURL} alt="thumbnail" className="h-80 object-contain"/>
            <p>Product: {product.title}</p>
            <p>Category: {product.category}</p>
            <p>Color: {product.color}</p>
            <div className="flex gap-2"> 
                <p className="line-through">{product.price} EGP</p>
                <p>{product.salePrice} EGP</p>
            </div>
            <div className="flex w-full justify-between items-center"> 
                { 
                    cart.find((item) => item.id === product.id) ? 
                    <Button label={'Remove From Cart'} click={() => removeFromCart(product)}/>
                    :
                    <Button label={'Add To Cart'} click={() => addToCart(product)}/>
                }
                { 
                    isFavorite ? 
                    <FaHeart size={'32px'} className="text-cyan-500 cursor-pointer" onClick={() => setIsFavorite((prevState) => !prevState)} />
                    : 
                    <FaRegHeart size={'32px'} className="text-cyan-500 cursor-pointer" onClick={() => setIsFavorite((prevState) => !prevState)}/>
                }
            </div>
        </div>
    )
}