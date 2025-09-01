import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import Header from "../components/Header";
import { productsContext } from "../context/productsContext";
import ProductCard from "../components/ProductCard";
import useAccount from "../hooks/useAccount";
import useCartOperations from "../hooks/useCartOperations";
export default function Homepage() { 
    const products = useContext(productsContext);
    const [searchProduct, setSearchProduct] = useState();
    const [filteredProducts, setFilteredProducts] = useState(); 
    const [filterType, setFilterType] = useState('title');
    const [cart, setCart] = useState([]);
    const user = useAccount();
    const {decreaseQuantity, removeFromCart, addToCart, increaseQuantity} = useCartOperations(cart, setCart, user);
        
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, [])

    const filterProducts = (filteredItems) => { 
        setSearchProduct(filteredItems);    
    }

    const changeFilterType = (filter) => { 
        setFilterType(filter);
    }

    useEffect(() => {
        if (filterType === 'title') { 
            setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(searchProduct?.toLowerCase())))
        } else if (filterType === 'category') { 
            setFilteredProducts(products.filter((product) => product.category.toLowerCase().includes(searchProduct?.toLowerCase())))
        }
    }, [searchProduct])
    

    return ( 
        <> 
            <Header showWelcome={true} cartLength={cart?.length} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/> 
            <FilterBar filterProducts={filterProducts} changeFilterType={changeFilterType}/>
            <div className="flex flex-wrap lg:px-96 md:px-52 px-10 justify-center gap-8 mt-8">
                {
                    filteredProducts?.length > 0 ? 
                    filteredProducts?.map((product) => 
                    <ProductCard 
                    product={product} 
                    key={product.id} 
                    addToCart={addToCart} 
                    removeFromCart={removeFromCart} 
                    cart={cart}
                    />)
                    : 
                    products.map((product) =>
                    <ProductCard 
                    product={product} 
                    key={product.id} 
                    addToCart={addToCart} 
                    removeFromCart={removeFromCart} 
                    cart={cart} 
                    />)
                }
            </div>
        </>
    )
}