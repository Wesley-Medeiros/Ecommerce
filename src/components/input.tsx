import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, ...props }, ref) => {
        return (
            <div className={`flex flex-col gap-1 relative ${className}`}>
                <input
                    className="h-10 rounded-md bg-gray-100 border-gray-300 border transition-colors duration-400 text-xs px-3 focus:border-orange-400 outline-none"
                    autoComplete="off"
                    {...props}
                    ref={ref}
                />
                {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
        );
    }
);
