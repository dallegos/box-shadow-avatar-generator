import { IColorReference, IColorReferenceProps } from '../interfaces';
import { ELEMENTS } from './elements';
import { globalColorReference } from './global-reference';
import { controls } from '../app';
import { slugify } from './utils';

export const ColorReferences: IColorReference[] = [];

/**
 *
 */
export function colorReference(props: IColorReferenceProps): IColorReference {
    const properties = props;

    function getColor(): string {
        return properties.color;
    }

    function getSlug(): string {
        return slugify(properties.name);
    }

    function getName(): string {
        return properties.name;
    }

    function createElement(): void {
        const root = document.createElement('div');
        root.classList.add('control');

        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputContainer');

        const input = document.createElement('input');
        input.type = 'color';
        input.value = properties.color;
        input.name = `${getSlug()}-control`;
        input.id = `${getSlug()}-control`;

        inputContainer.append(input);

        const infoContainer = document.createElement('div');

        const name = document.createElement('p');
        name.innerHTML = properties.name;

        const buttonsContainer = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.classList.add('button', 'tertiary');

        const editImage = document.createElement('img');
        editImage.src = './assets/images/pencil.svg';

        editButton.append(editImage);

        const removeButton = document.createElement('button');
        removeButton.classList.add('button', 'tertiary');

        editButton.addEventListener('click', () => {
            globalColorReference.setReference({
                ...properties,
                slug: getSlug(),
            });
        });

        const removeImage = document.createElement('img');
        removeImage.src = './assets/images/trash.svg';

        removeButton.append(removeImage);

        buttonsContainer.append(editButton, removeButton);

        infoContainer.append(name, buttonsContainer);

        root.append(inputContainer, infoContainer);

        ELEMENTS.controlsContainer.append(root);
    }

    createElement();

    return {
        color: getColor(),
        name: getName(),
        slug: getSlug(),
    };
}

export function initColorReferences() {
    controls.addCallback('addColorReference', (properties): void => {
        ColorReferences.push(
            colorReference({
                color: properties.color,
                name: properties.name,
            })
        );
    });
}
