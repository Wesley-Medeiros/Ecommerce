'use client'

import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { useCart } from '../../../context/cart-context';
import { Product } from '../../../context/cart-context';  

export function ProductCardCart() {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                cartItems.map((product: Product) => ( 
                    <div key={product.id} className='w-full flex items-center justify-between gap-8 py-6 border-b border-gray-300'>
                        <div className='flex items-center justify-center gap-5'>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={60}
                                height={60}
                                className='mb-[10px] object-contain' 
                                priority
                            />
                            <div className='space-y-2'>
                                <p>{product.name}</p>
                                <button
                                    className='flex items-center justify-start gap-1 border border-gray-300 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 hover:border-gray-400 transition-colors'
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <BiTrash className="text-orange-400" size={16} />
                                    REMOVER
                                </button>
                            </div>
                        </div>

                        <p>R$ {product.price.toFixed(2)}</p>
                    </div>
                ))
            )}
        </div>
    );
}
