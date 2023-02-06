import { IColorReference, IColorReferenceProps } from '../interfaces';
import { ELEMENTS } from './elements';
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

    /*

    <div class="control">
        <div class="inputContainer">
            <input
                type="color"
                name="skin-control"
                id="skin-control"
            />
        </div>

        <div>
            <p>Skin asdas das dasd as</p>

            <div>
                <button class="button tertiary">
                    <img src="./assets/images/pencil.svg" />
                </button>
                <button class="button tertiary">
                    <img src="./assets/images/trash.svg" />
                </button>
            </div>
        </div>
    </div>

    */

    function createElement(): void {
        const root = document.createElement('div');
        root.classList.add('control');

        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputContainer');

        const input = document.createElement('input');
        input.type = 'color';
        input.value = properties.color;
        input.name = `${slugify(properties.name)}-control`;
        input.id = `${slugify(properties.name)}-control`;

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
        getColor,
        getName,
        getSlug,
    };
}

export function initColorReferences() {
    ELEMENTS.referenceButton.addEventListener('click', (): void => {
        const color = ELEMENTS.referenceColor.value;
        const name = ELEMENTS.referenceName.value;

        if (!color || !name) return;

        ColorReferences.push(
            colorReference({
                color,
                name,
            })
        );
    });
}
