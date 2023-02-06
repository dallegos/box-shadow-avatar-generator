import './style.scss';
import { generateGrid, initColorReferences } from './scripts';
import { generateControls } from './scripts/controls';

/** App initializer */
function init(): void {
    generateGrid();
    initColorReferences();
}

export const controls = generateControls();

init();
