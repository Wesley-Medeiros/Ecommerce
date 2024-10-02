import { CompleteOrderForm } from "./components/completeOrderForm";
import { SelectedProducts } from "./components/selected-products";

export default function FormPage() {
    return (
        <form className="flex items-center justify-between px-40 py-5 mt-10 gap-8">
            <CompleteOrderForm />
            <SelectedProducts />
        </form>
    );
}
