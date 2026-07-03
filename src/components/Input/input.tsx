import type { InputHTMLAttributes, ReactNode } from "react";
import type { TypeInput } from "./types";

interface InputComponent extends InputHTMLAttributes<InputHTMLAttributes> {
    placeholder?: string;
    label?: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    personalize?: string;
    type?: TypeInput
}

export const Input = ({ placeholder, personalize, label, icon, fullWidth, ...rest }: InputComponent) => {
    return (
        <div
            className={`flex ${label ? 'flex-col gap-2' : ''} justify-center ${fullWidth ? 'w-full' : ''}`}>

            <label htmlFor={`${label}-id`} >{label}</label>

            <div className="flex relative w-full items-center max-w-[768px] justify-center ">
                <input id={`${label}-id`} {...rest} placeholder={placeholder}
                    className={`
                    w-full h-full
                    border relative border-secundary rounded-2xl ${icon ? 'ps-10' : 'ps-5'} py-2  w-full
                    ${personalize}
                    outline-0
                    `}
                />
                {icon && (
                    <div className="absolute inset-0 top-2.5 left-2.5">{icon}</div>
                )}
            </div>
        </div>
    )
}
