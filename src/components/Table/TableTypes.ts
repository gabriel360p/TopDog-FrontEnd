interface tableRows {
    id: string | number;
    name: string;

    price?: number;
    description?: number;
    category?: number;
    categoryId?: string;
    status?: boolean;
}

export interface TableProps {
    headers: string[];
    rows: tableRows[];
}
