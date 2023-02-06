export interface GridItemOnClickProps {
    color: string;
    name: string;
}

export interface GridItem {
    index: number;
    color: string;
    name?: string;
    element: HTMLDivElement;
    onClick?: (methods: {
        setColor: (color: string) => void;
        setName: (name: string) => void;
    }) => void;
}

export interface IGridItemPayload {
    getElement: () => HTMLDivElement;
    setColor: (color: string) => void;
    getProperties: () => GridItem;
}
