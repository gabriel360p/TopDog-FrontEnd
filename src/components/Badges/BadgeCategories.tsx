import type { Categorie } from "../../types/CategoriesType";
interface TypeCategorie {
    categorie: Categorie;
}
export const BadgeCategories = ({ categorie, ...rest }: TypeCategorie) => {
    return (
        <span
            {...rest}
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

