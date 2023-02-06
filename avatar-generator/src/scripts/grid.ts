import { GridItem, IGridItemPayload } from '../interfaces';
import { isMouseDown } from './utils';
import { ELEMENTS } from './elements';
import { globalColorReference } from './global-reference';

export const GridItems: IGridItemPayload[] = [];

/**
 * Closure for each item
 */
function gridItem(props: GridItem): IGridItemPayload {
    const properties = props;

    function getElement(): HTMLDivElement {
        return properties.element;
    }

    function setColor(color: string): void {
        properties.element.style.backgroundColor = color;
        properties.color = color;
    }

    function setName(name: string): void {
        properties.name = name;
    }

    properties.element.addEventListener('click', (): void => {
        props.onClick({ setColor, setName });
    });

    properties.element.addEventListener('mouseenter', (): void => {
        if (isMouseDown()) {
            props.onClick({ setColor, setName });
        }
    });

    function getProperties(): GridItem {
        return properties;
    }

    return {
        getElement,
        setColor,
        getProperties,
    };
}

/**
 * Generates the avatar grid
 */
export function generateGrid(): void {
    new Array(8 * 8).fill(0).forEach((_, index: number) => {
        const root = document.createElement('div');
        GridItems.push(
            gridItem({
                color: 'transparent',
                name: 'plain-color',
                element: root,
                index,
                onClick: ({ setColor, setName }) => {
                    setColor(globalColorReference.getReference().color);
                    setName(globalColorReference.getReference().name);
                },
            })
        );

        ELEMENTS.avatarBox.append(root);
    });
}
