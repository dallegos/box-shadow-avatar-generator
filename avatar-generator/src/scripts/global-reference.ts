import { IColorReference, IGlobalReferencesPayload } from '../interfaces';

function globalReference(): IGlobalReferencesPayload {
    let properties: IColorReference = {} as IColorReference;

    function setReference(reference: IColorReference): void {
        properties = reference;
    }

    function getReference(): IColorReference {
        return { ...properties };
    }

    return {
        setReference,
        getReference,
    };
}

export const globalColorReference = globalReference();
