import { CartIcon } from "./cart-icon";

export function CartControl() {
    return(
        <div className="relative cursor-pointer">
            <CartIcon />
            <span className="w-4 h-4 rounded-full bg-orange-400 text-white px-1 py-0 text-xs ml-3 mt-[-10px] absolute cursor-pointer">1</span>
        </div>
    )
}