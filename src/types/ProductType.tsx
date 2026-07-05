export interface Product {
    id: string | number;
    title: string;
    price: number;
    photo: string;
    quantity?: number;
    description?: string;
    offer?: boolean;
    categorieId: number;
    storage: number;
    categorieName: string;
}