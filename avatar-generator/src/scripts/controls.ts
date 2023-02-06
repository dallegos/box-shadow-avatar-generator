import { ELEMENTS } from './elements';

interface ICallback {
    [key: string]: (properties: IControlProperties) => void;
}

interface IControlProperties {
    color: string;
    name: string;
}

const defaultControlState = {
    color: '',
    name: '',
};

/**
 *
 * @returns
 */
export function generateControls() {
    const callbacks: ICallback = {};
    let properties: IControlProperties = defaultControlState;

    function resetControls(): void {
        ELEMENTS.referenceColor.value = null;
        ELEMENTS.referenceName.value = null;

        properties = defaultControlState;
    }

    function addCallback(
        callbackName: string,
        callbackFunction: (properties: IControlProperties) => void
    ) {
        callbacks[callbackName] = callbackFunction;
    }

    function executeCallbacks(): void {
        console.log('callbacks', callbacks);

        Object.keys(callbacks).forEach((a: string): void => {
            callbacks[a](properties);
        });
    }

    ELEMENTS.referenceButton.addEventListener('click', (): void => {
        properties.color = ELEMENTS.referenceColor.value;
        properties.name = ELEMENTS.referenceName.value;

        if (!properties.color || !properties.name) return;

        executeCallbacks();
    });

    addCallback('reset', resetControls);

    return {
        addCallback,
        executeCallbacks,
    };
}
