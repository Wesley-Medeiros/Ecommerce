import { CartIcon } from "./cart-icon";
import Link from 'next/link'; 

export function CartControl() {
    return (
        <Link href="/form">
            <button className="relative cursor-pointer">
                <CartIcon />
                <span className="w-4 h-4 rounded-full bg-orange-400 text-white px-1 py-0 text-xs mt-[-10px] absolute cursor-pointer">1</span>
            </button>
        </Link>
    );
}
