import { FaPix } from "react-icons/fa6";
import { PiCreditCardLight } from "react-icons/pi";
import { PaymentMethodInput } from "./payment-methods-input";
import { useFormContext } from "react-hook-form";

const paymentMethods = {
    credit: {
        label: "Cartão de crédito",
        icon: <PiCreditCardLight size={16} className="text-orange-400" />
    },
    debit: {
        label: "Cartão de débito",
        icon: <PiCreditCardLight size={16} className="text-orange-400" />
    },
    PIX: {
        label: "PIX",
        icon: <FaPix size={16} className="text-orange-400" />
    },
}

export function PaymentMethodOptions() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="flex-1">
            <div className="grid grid-cols-3 gap-3 mt-4">
                {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                    <PaymentMethodInput
                        key={label}
                        id={key}
                        icon={icon}
                        label={label}
                        value={key}
                        {...register("paymentMethods")}
                    />
                ))}
            </div>
            {errors.paymentMethods?.message && (
                <span className="text-red-500 text-sm mt-2 block">
                    {String(errors.paymentMethods.message)}
                </span>
            )}
        </div>
    );
}
