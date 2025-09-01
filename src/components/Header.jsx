import useAccount from "../hooks/useAccount"
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import Button from "./Button";
export default function Header({showWelcome, cartLength, cart, increaseQuantity, decreaseQuantity}) { 
    const [user, setUser] = useState();
    const [showCart, setShowCart] = useState(false);
    const account = useAccount()
    const navigate = useNavigate();
    useEffect(() => {
        setUser(account);
    }, [account])
    const logOut = () => { 
        localStorage.removeItem('user'); 
        setUser(null);
    }
    const navigateToCartPage = () => { 
        navigate('/cart', { state: { cart: cart }})
    }
    return ( 
        <div className="lg:px-96 md:px-52 px-10 w-full bg-blue-500 h-[70px] flex items-center justify-between text-gray-50">
            <img src={logo} alt="logo" className="h-full cursor-pointer" onClick={() => navigate('/')}/>
            <div className={`${user && showWelcome ? 'visible' : 'hidden'} md:text-3xl text-xl text-center`}>Welcome {user?.name}</div>
            <div className="flex gap-5 items-center">
                { 
                    user ? 
                    <> 
                        <div className="hover:underline decoration-1 cursor-pointer text-center text-3xl" 
                        onClick={() => setShowCart((prevState) => !prevState)}>
                            <Badge badgeContent={cartLength ?? null} color="primary"> 
                                <FaCartShopping />
                            </Badge>
                        </div>
                        { 
                            showCart && 
                        <div className="w-100 bg-blue-500 rounded-lg fixed right-[200px] top-[70px] p-5 z-50">
                            { 
                                cart && 
                                <div className="flex flex-col gap-2">
                                    {
                                        cart?.map((item) => (
                                            <div className="flex items-center justify-between bg-amber-50 text-blue-500 p-2 rounded-lg">
                                                <div className="w-1/3">{item.title}</div>
                                                <div className="flex items-center justify-evenly w-1/3"> 
                                                    <div>{item.quantity}</div>
                                                    <div className="text-red-500 text-2xl cursor-pointer" onClick={() => decreaseQuantity(item)}>-</div>
                                                    <div className="text-green-500 text-lg cursor-pointer" onClick={() => increaseQuantity(item)}>+</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <hr />
                                    <div className="flex justify-evenly items-center">
                                        <div className="text-xl">Total</div>
                                        <div className="bg-amber-50 text-blue-500 p-1">
                                            {cart?.reduce((acc, product) => acc + (product.salePrice * product.quantity), 0)} EGP
                                        </div>
                                    </div>
                                    <button className="bg-amber-50 text-blue-500 p-2 rounded-lg cursor-pointer
                                    hover:opacity-90 transition-all duration-200
                                    " onClick={() => navigateToCartPage()}
                                    >View All Products</button>
                                </div>
                            }
                        </div>
                        }
                        <div className="hover:underline decoration-1 cursor-pointer text-center" 
                        onClick={() => logOut()}>
                            Log Out
                        </div>
                    </>
                    : 
                    <> 
                        <div className="hover:underline decoration-1 cursor-pointer text-center" 
                        onClick={() => navigate('/login')}>
                            Sign in
                        </div>
                        <div className="hover:underline decoration-1 cursor-pointer text-center" 
                        onClick={() => navigate('/register')}>
                            Sign up
                        </div>
                    </>
                }
            </div>
        </div>
    )
}