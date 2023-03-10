import React, { FC } from "react";

type defaultInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
type InputProps = {
    isIcon?: boolean;
    FullWidth?: boolean;
    isLabel?: boolean;
    labeltext?: string;
} & defaultInputProps;
const Input: FC<InputProps> = ({
    isIcon = false,
    FullWidth = false,
    isLabel = false,
    labeltext,
    className,

    ...inputProps
}) => {
    const getWidth = FullWidth ? "w-full" : "";
    return (
        <div className="relative w-full ">
            <input
                className={`peer ${getWidth} ${
                    isIcon ? " px-10" : "p-4"
                } h-12 pt-8 pb-7 transition-all duration-300 ease-in-out  outline-none bg-gray  font-gothic rounded-lg text-white focus:ring-2 focus:ring-purple text-base placeholder-transparent focus:bg-purple/10 ${
                    isLabel === false && "placeholder-stone-400"
                } ${className}`}
                {...inputProps}
            />
            {isLabel && (
                <label
                    htmlFor={inputProps.id}
                    className="absolute text-sm transition-all text-stone-600 left-4 0 peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-gray-600 peer-focus:text-sm placeholder:text-stone-600"
                >
                    {inputProps.placeholder}
                </label>
            )}
        </div>
    );
};

export default Input;
