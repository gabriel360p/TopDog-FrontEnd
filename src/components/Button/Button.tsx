import type { ButtonHTMLAttributes } from "react"
import type { TypesButton } from "./types"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    type?: TypesButton,
    stylesClass: string,
    fullWidth?: boolean,
}


export const Button = ({ type, stylesClass, title, fullWidth, ...rest }: ButtonProps) => {


    return (
        <button {...rest} className={`
            object-cover 
            ${fullWidth ? 'w-full' : ''}

            ${stylesClass}
            `} {...rest}>{title}</button>
    )
}

