import type { Categorie } from "../../types/CategoriesType";

interface TypeCategorie {
    categorie: Categorie;
    onClick: React.MouseEventHandler<HTMLSpanElement>
}

export const BadgeCategories = ({ onClick, categorie, ...rest }: TypeCategorie) => {
    return (
        <span
            {...rest}
            onClick={onClick}
            className={`
        w-fit h-fit p-1 
        border rounded-2xl
        border-secundary text-white 
        cursor-pointer
        transition-all
        hover:bg-secundary/10
        active:bg-secundary/10
        `}>
            {categorie.name}
        </span>
    )
}

