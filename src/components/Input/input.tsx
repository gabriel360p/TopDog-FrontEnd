import { type InputHTMLAttributes, type ReactNode } from "react";
import type { TypeInput } from "./types";
import type { RefCallBack } from "react-hook-form";

interface InputComponent extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    personalize?: string;
    type?: TypeInput;
    ref?: React.RefObject<T> | RefCallBack;
    error?: string;
}

export const Input = ({ error, ref, placeholder, personalize, label, icon, fullWidth, ...rest }: InputComponent) => {
    return (
        <div
            className={`flex ${label ? 'flex-col gap-2' : ''} justify-center ${fullWidth ? 'w-full' : ''}`}>

            <label htmlFor={`${label}-id`} >{label}</label>

            <div className="flex flex-col relative w-full items-center max-w-[768px] justify-center ">
                <input id={`${label}-id`} placeholder={placeholder}

                    {...rest}
                    ref={ref}

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
                {error && (
                    <span className="self-start text-red-600 font-bold text-[14px] py-1">{error}</span>
                )}
            </div>
        </div>
    )
}
