import { IElements } from '../interfaces';

export const ELEMENTS: IElements = {
    avatarBox: document.getElementById('avatarBox') as HTMLDivElement,
    controlsBox: document.getElementById('controlsBox') as HTMLDivElement,
    controlsContainer: document.getElementById(
        'controlsContainer'
    ) as HTMLDivElement,
    referenceName: document.getElementById(
        'new-color-reference-name'
    ) as HTMLInputElement,
    referenceColor: document.getElementById(
        'new-color-reference-color'
    ) as HTMLInputElement,
    referenceButton: document.getElementById(
        'add-color-reference'
    ) as HTMLButtonElement,
};
