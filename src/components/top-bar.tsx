'use client';

import { useState, useEffect, useRef } from "react";
import { Vector } from "./vector";

interface TopBarProps {
    onSortChange: (sortType: string) => void; 
}

export function TopBar({ onSortChange }: TopBarProps) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleSortSelection = (sortType: string) => {
        onSortChange(sortType);
        setDropdownOpen(false);
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <div className="px-40 py-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl">Blusas</h1>

                <div className="relative inline-block text-left" ref={dropdownRef}>
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center justify-center w-36 h-10 border gap-2 border-black text-[16px] hover:bg-gray-200 transition-colors duration-300"
                        aria-expanded={isDropdownOpen}
                        aria-controls="dropdown-menu"
                    >
                        Ordenar por: <Vector className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div
                        id="dropdown-menu"
                        className={`absolute right-0 w-36 overflow-hidden transition-all duration-500 ease-in-out ${isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} shadow-lg border-[1px] border-black border-t-0 bg-white ring-1 ring-black ring-opacity-5`}
                    >
                        <button
                            className="flex items-center justify-center w-full py-2 text-[15px] hover:bg-orange-400 hover:text-white transition-colors duration-300"
                            onClick={() => handleSortSelection("recentes")}
                        >
                            Mais Recentes
                        </button>
                        <button
                            className="flex items-center justify-center w-full py-2 text-[15px] hover:bg-orange-400 hover:text-white transition-colors duration-300"
                            onClick={() => handleSortSelection("menorPreco")}
                        >
                            Menor Preço
                        </button>
                        <button
                            className="flex items-center justify-center w-full py-2 text-[15px] hover:bg-orange-400 hover:text-white transition-colors duration-300"
                            onClick={() => handleSortSelection("maiorPreco")}
                        >
                            Maior Preço
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
