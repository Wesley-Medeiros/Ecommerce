import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
};

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(
    ({ id, icon, label, ...props }, ref) => {
        return (
            <div>
                <input
                    className="hidden"
                    id={id}
                    type="radio"
                    {...props}
                    name="paymentMethods" 
                    ref={ref} 
                />
                <label htmlFor={id} className="cursor-pointer">
                    <div className="flex items-center justify-start gap-3 border border-gray-300 p-4 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors text-sm">
                        {icon}
                        {label}
                    </div>
                </label>
                <style jsx>{`
                    input:checked + label div {
                        border-color: #ff8c00; /* ou use a classe Tailwind 'text-orange-400' aqui */
                        background-color: #e5e5e5; /* Cor desejada ao marcar */
                    }
                `}</style>
            </div>
        );
    }
);
