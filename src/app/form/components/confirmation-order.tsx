'use client'

import Link from 'next/link';
import { useCart } from '../../../context/cart-context';  

export function ConfirmationOrder() {
    const { cartItems } = useCart();  
    const deliveryFee = 3.50;  

    const itemsTotal = cartItems.reduce((total, product) => total + product.price, 0);

    const finalTotal = itemsTotal + deliveryFee;

    return (
        <div className="flex flex-col gap-3 space-y-6">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <p>Total de itens</p>
                    <p>R$ {itemsTotal.toFixed(2)}</p>  
                </div>
                <div className="flex items-center justify-between">
                    <p>Entrega</p>
                    <p>R$ {deliveryFee.toFixed(2)}</p>  
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl">Total</p>
                    <p className="font-bold text-xl">R$ {finalTotal.toFixed(2)}</p>  
                </div>
            </div>
        </div>
    );
}
