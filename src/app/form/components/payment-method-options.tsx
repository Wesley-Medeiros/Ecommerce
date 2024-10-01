import { FaPix } from "react-icons/fa6";
import { PiCreditCardLight } from "react-icons/pi";

export function PaymentMethodOptions() {
    return(
        <div className="grid grid-cols-3 gap-3 mt-4">
            <button className="flex items-center justify-start gap-3 border border-gray-300 p-4 rounded-lg bg-gray-200 hover:bg-gray-300 hover:border-gray-400 transition-colors">
                <PiCreditCardLight size={16} className="text-purple-500" /> Crédito
            </button>
            <button className="flex items-center justify-start gap-3 border border-gray-300 p-4 rounded-lg bg-gray-200 hover:bg-gray-300 hover:border-gray-400 transition-colors">
                <PiCreditCardLight size={16} className="text-purple-500" /> Débito
            </button>
            <button className="flex items-center justify-start gap-3 border border-gray-300 p-4 rounded-lg bg-gray-200 hover:bg-gray-300 hover:border-gray-400 transition-colors">
                <FaPix size={16} className="text-purple-500" /> PIX
            </button>
        </div>
    );
}
