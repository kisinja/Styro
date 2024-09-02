import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Log cartItems state whenever it changes
    useEffect(() => {
        console.log('Cart Items:', cartItems);
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(item => item._id === product._id);
            if (itemExists) {
                // Increase quantity if the item already exists in the cart
                return prevItems.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Add new product with quantity 1
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item._id !== productId)
        );
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Calculate the total quantity of items in the cart
    const cartQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, calculateTotal, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};