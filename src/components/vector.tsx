import React from 'react';

interface VectorProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const Vector: React.FC<VectorProps> = ({ className, ...props }) => {
    return (
        <svg
            className={className}
            {...props}
            width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            {/* O conteúdo do SVG */}
            <path d="M1 1L7 10L13 1.00935" stroke="#666666" strokeLinecap="round"/>
        </svg>
    );
};
