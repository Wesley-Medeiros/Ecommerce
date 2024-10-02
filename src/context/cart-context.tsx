"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextProps {
    cartCount: number;
    addToCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartCount, setCartCount] = useState<number>(0);

    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
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
