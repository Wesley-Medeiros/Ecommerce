'use client';

import { Filters } from "@/@types/types";
import { FilterContent } from "@/components/filter-content";
import { Products } from "@/components/products";
import { TopBar } from "@/components/top-bar";
import { useState } from "react";



export default function Home() {
    const [filters, setFilters] = useState<Filters>({
        colors: [],
        sizes: [],
        priceRange: null,
    });

    return (
        <main className="flex flex-col">
            <TopBar />
            <div className="flex px-40 py-8 gap-[200px]">
              <FilterContent onFilterChange={setFilters} />
              <Products filters={filters} />
            </div>
        </main>
    );
}
