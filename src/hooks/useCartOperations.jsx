import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function useCartOperations(cart, setCart, user) {
    const navigate = useNavigate();

    const increaseQuantity = useCallback((product) => {
        const currentTarget = cart.findIndex((item) => item.id === product.id);
        const currentCart = [...cart]; 
        currentCart[currentTarget].quantity += 1; 
        setCart(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    }, [cart, setCart]);

    const decreaseQuantity = useCallback((product) => {
        const currentTarget = cart.findIndex((item) => item.id === product.id);
        const currentCart = [...cart]; 
        if (currentCart[currentTarget].quantity === 1) { 
            currentCart.splice(currentTarget, 1);
        } else { 
            currentCart[currentTarget].quantity -= 1; 
        }
        setCart(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    }, [cart, setCart]);

    const removeFromCart = useCallback((product) => { 
        if (!user) { 
            navigate('/login');
            return; 
        }
        const filteredCart = cart.filter((item) => item.id !== product.id);
        setCart(filteredCart);
        localStorage.setItem('cart', JSON.stringify(filteredCart));
    }, [cart, setCart, user, navigate]);

    const addToCart = useCallback((product) => { 
        if (user) { 
            const existingProduct = cart.find((item) => item.id === product.id);
            if (existingProduct) { 
                const newItem = {...existingProduct, quantity: existingProduct.quantity + 1};
                const filteredCart = cart.filter((item) => item.id !== newItem.id);
                const updatedCart = [...filteredCart, newItem];
                setCart(updatedCart);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            } else { 
                const updatedCart = [...cart, {...product, quantity: 1}];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                setCart(updatedCart);
            }
        } else { 
            navigate('/login');
        }
    }, [cart, setCart, user, navigate]);

    return {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToCart
    };
}