'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/cart-context';

interface Product {
    id: string;
    name: string;
    price: number;
    parcelamento: [number, number];
    color: string;
    image: string;
    size: string[];
    date: string;
}

interface Filters {
    colors: string[];
    sizes: string[];
    priceRange: { min: number; max: number } | null;
}

interface ProductsProps {
    filters: Filters;
    sortType: string;
}

export function Products({ filters, sortType }: ProductsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(9);
    const [initialVisibleCount] = useState<number>(9);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3003/products');
            const data: Product[] = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortType === 'recentes') {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else if (sortType === 'menorPreco') {
            return a.price - b.price;
        } else if (sortType === 'maiorPreco') {
            return b.price - a.price;
        }
        return 0;
    });

    const filteredProducts = sortedProducts.filter(product => {
        const matchesColor = filters.colors.length === 0 || filters.colors.includes(product.color);
        const matchesSize = filters.sizes.length === 0 || product.size.some(size => filters.sizes.includes(size));
        const matchesPrice = !filters.priceRange || (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max);
        return matchesColor && matchesSize && matchesPrice;
    });

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 9);
    };

    const handleShowLess = () => {
        setVisibleCount(initialVisibleCount);
    };

    return (
        <div className="w-[976px]">
            <div
                className="grid grid-cols-3 gap-16 mb-[70px] transition-all duration-500 ease-in-out"
                style={{ maxHeight: `${visibleCount * 280}px`, overflow: 'hidden' }}
            >
                {filteredProducts.slice(0, visibleCount).map((product) => (
                    <div key={product.id} className='max-w-48 flex flex-col items-center'>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={195}
                            height={195}
                            className='w-[195px] mb-[10px]'
                            priority
                        />
                        <h3 className='leading-[19px] text-[14px] mb-[10px]'>{product.name}</h3>
                        <strong className='text-[16px] leading-[21px] mb-[1px]'>R$ {product.price.toFixed(2)}</strong>
                        <p className='mb-[14px]'>até {product.parcelamento[0]}x de R$ {product.parcelamento[1].toFixed(2)}</p>
                        <button
                            className='w-full h-[33px] bg-black font-bold text-white transition duration-300 ease-in-out hover:bg-gray-800'
                            onClick={addToCart}  
                        >
                            COMPRAR
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center'>
                {visibleCount < filteredProducts.length ? (
                    <button
                        className='w-[175px] h-[35px] bg-orange-400 text-white text-[14px] leading-5 font-bold transition duration-300 ease-in-out hover:bg-orange-500'
                        onClick={handleLoadMore}
                    >
                        CARREGAR MAIS
                    </button>
                ) : (
                    visibleCount > initialVisibleCount && (
                        <button
                            className='w-[175px] h-[35px] bg-orange-400 text-white text-[14px] leading-5 font-bold transition duration-300 ease-in-out hover:bg-orange-500'
                            onClick={handleShowLess}
                        >
                            MOSTRAR MENOS
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
