export interface IColorReferenceProps {
    name: string;
    color: string;
}

export interface IColorReference {
    color: string;
    name: string;
    slug: string;
}

export interface IGlobalReferencesPayload {
    setReference: (reference: IColorReference) => void;
    getReference: () => IColorReference;
}
