"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

interface CartContextProps {
    cartCount: number;
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (id: string) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
