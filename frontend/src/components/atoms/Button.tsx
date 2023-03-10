import React, { FC } from "react";
type defaultButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type ButtonProps = {
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
    children: React.ReactNode;
} & defaultButtonProps;
const Button: FC<ButtonProps> = ({
    children,
    variant = "primary",
    fullWidth = false,
    className,
}) => {
    const getVariant = () => {
        switch (variant) {
            case "primary": {
                return "text-2xl uppercase  border border-purple font-righteous hover:bg-purple hover:text-dark";
            }
            case "secondary": {
                return "text-2xl uppercase  border border-purple font-righteous hover:bg-purple hover:text-dark";
            }
        }
    };
    const fullStyleWidth = fullWidth ? "w-full" : "";
    return (
        <button
            className={`p-4 transition-all duration-500 ease-in-out ${getVariant()} ${fullStyleWidth} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
