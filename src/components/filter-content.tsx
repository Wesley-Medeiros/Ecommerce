'use client';

import { useEffect, useState } from "react";
import { Vector } from "./vector";

const COLORS = ["Amarelo", "Azul", "Branco", "Cinza", "Laranja", "Verde", "Vermelho", "Preto", "Rosa", "Vinho"];
const SIZES = ["P", "M", "G", "GG", "U", "36", "38", "40"];
const PRICE_RANGES = [
    { label: "de R$0 até R$50", min: 0, max: 50 },
    { label: "de R$51 até R$150", min: 51, max: 150 },
    { label: "de R$151 até R$300", min: 151, max: 300 },
    { label: "de R$301 até R$500", min: 301, max: 500 },
    { label: "a partir de R$500", min: 501, max: Infinity },
];

interface FilterContentProps {
    onFilterChange: (filters: {
        colors: string[];
        sizes: string[];
        priceRange: { min: number; max: number } | null; 
    }) => void;
}

export function FilterContent({ onFilterChange }: FilterContentProps) {
    const [visibleColorCount, setVisibleColorCount] = useState(5); 
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null);

    const toggleVisibility = () => {
        setVisibleColorCount(prevCount => (prevCount === 5 ? COLORS.length : 5));
    };

    const handleColorChange = (color: string) => {
        setSelectedColors(prev => {
            const newColors = prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color];
            return newColors;
        });
    };

    const handleSizeChange = (size: string) => {
        setSelectedSizes(prev => {
            const newSizes = prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size];
            return newSizes;
        });
    };

    const handlePriceChange = (priceRange: { min: number; max: number }) => {
        const isSameRange = selectedPriceRange && selectedPriceRange.min === priceRange.min && selectedPriceRange.max === priceRange.max;
        const newPriceRange = isSameRange ? null : priceRange; 
        setSelectedPriceRange(newPriceRange);
    };

    useEffect(() => {
        onFilterChange({ colors: selectedColors, sizes: selectedSizes, priceRange: selectedPriceRange });
    }, [selectedColors, selectedSizes, selectedPriceRange, onFilterChange]);

    return (
        <aside className="w-[164px]">
            <div className="mb-6">
                <h2 className="text-lg tracking-widest leading-5 mb-[14px]">CORES</h2>
                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${visibleColorCount === 5 ? 'max-h-40' : 'max-h-[400px]'}`}>
                    {COLORS.slice(0, visibleColorCount).map(color => (
                        <label key={color} className="flex items-center w-24 gap-2 mb-[10px] relative">
                            <input
                                type="checkbox"
                                value={color}
                                onChange={() => handleColorChange(color)}
                                className="peer appearance-none border border-black w-4 h-4 focus:outline-none cursor-pointer"
                            />
                            <span className="w-[10px] h-[10px] ml-[3px] cursor-pointer absolute bg-orange-400 peer-checked:inline-block hidden"></span>
                            <span className="cursor-pointer">{color}</span>
                        </label>
                    ))}
                </div>
                <button onClick={toggleVisibility} className="text-gray-500 text-[12px] leading-[12px] hover:text-gray-900 flex items-center gap-1 underline mt-2">
                    {visibleColorCount === 5 ? "ver todas as cores:" : "ver menos:"} <Vector className={`transition-transform duration-300 ${visibleColorCount === 5 ? '' : 'rotate-180'}`} />
                </button>
            </div>

            <div>
                <h2 className="text-lg tracking-widest leading-5 mb-[24px]">TAMANHOS</h2>
                <ul className="grid grid-cols-4 gap-1 mb-[24px]">
                    {SIZES.map(size => (
                        <li key={size} className="relative inline-block">
                            <input
                                type="checkbox"
                                id={`size-${size}`}
                                onChange={() => handleSizeChange(size)}
                                className="peer appearance-none border border-black w-8 h-8 focus:outline-none cursor-pointer checked:border-yellow-500 focus:checked:border-yellow-500 transition duration-300 ease-in-out hover:bg-gray-200"
                            />
                            <label
                                htmlFor={`size-${size}`}
                                className="absolute inset-0 flex items-center justify-center mt-[-7px] mr-[5px] pointer-events-none text-[16px] leading-[21px] text-gray-400 peer-checked:text-black peer-focus:peer-checked:text-black peer-focus:peer-not-checked:text-gray-400"
                            >
                                {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-[172px]">
                <h2 className="text-lg tracking-widest leading-5 mb-[24px]">FAIXA DE PREÇO</h2>
                {PRICE_RANGES.map((priceRange, index) => (
                    <label key={`${priceRange.label}-${index}`} className="w-full flex items-center gap-2 mb-[10px] relative">
                        <input
                            type="checkbox"
                            onChange={() => handlePriceChange(priceRange)}
                            className="peer appearance-none border border-black w-4 h-4 focus:outline-none cursor-pointer"
                        />
                        <span className="w-[10px] h-[10px] ml-[3px] absolute bg-orange-400 peer-checked:inline-block hidden cursor-pointer"></span>
                        <span className="cursor-pointer text-[14px] leading-[14px]">{priceRange.label}</span>
                    </label>
                ))}
            </div>
        </aside>
    );
}
