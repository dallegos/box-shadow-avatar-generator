import { GridItem, IGridItemPayload } from '../interfaces';
import { getRandomColor, isMouseDown } from './utils';
import { ELEMENTS } from './elements';

export const GridItems: IGridItemPayload[] = [];

const selectedColor: string = getRandomColor();

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

    properties.element.addEventListener('click', () => {
        props.onClick({ setColor, setName });
        console.log(getProperties());
    });

    properties.element.addEventListener('mouseenter', () => {
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
                color: 'transparent', //getRandomColor()
                element: root,
                index,
                name: 'plain-color',
                onClick: ({ setColor, setName }) => {
                    setColor(selectedColor);
                    setName('nuevo');
                },
            })
        );

        ELEMENTS.avatarBox.append(root);
    });
}
