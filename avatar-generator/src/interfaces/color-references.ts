export interface IColorReferenceProps {
    name: string;
    color: string;
}

export interface IColorReference {
    getColor: () => string;
    getName: () => string;
    getSlug: () => string;
}
