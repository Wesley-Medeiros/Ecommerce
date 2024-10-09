'use client';

import { Filters } from "@/@types/types";
import { FilterContent } from "@/components/filter-content";
import { Products } from "@/components/products";
import { TopBar } from "../components/top-bar";
import { useState } from "react";

export default function Home() {
    const [filters, setFilters] = useState<Filters>({
        colors: [],
        sizes: [],
        priceRange: null,
    });

    const [sortType, setSortType] = useState<string>(''); 

    return (
            <main className="flex flex-col">
                <TopBar onSortChange={setSortType} />
                <div className="md:flex md:px-40 md:py-8 md:gap-[200px]">
                    <FilterContent onFilterChange={setFilters} />
                    <Products filters={filters} sortType={sortType} />
                </div>
            </main>
    );
}
