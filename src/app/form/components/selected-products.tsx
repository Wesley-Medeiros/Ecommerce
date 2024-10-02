import { ConfirmationOrder } from "./confirmation-order";
import { ProductCardCart } from "./product-card-cart";

export function SelectedProducts() {
    return(
        <div className="flex flex-col gap-3 flex-1 mb-auto">
            <p className="font-bold text-xs">Produtos selecionados</p>
            <div className="w-full bg-gray-100 rounded-md p-10 flex flex-col gap-2 border custom-border-radius space-y-4">
                <ProductCardCart />

                <ConfirmationOrder />
            </div>
        </div>
    )
}
