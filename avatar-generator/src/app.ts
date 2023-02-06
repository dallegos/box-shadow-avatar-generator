import './style.scss';
import { generateGrid, initColorReferences } from './scripts';

/** App initializer */
function init(): void {
    generateGrid();
    initColorReferences();
}

init();
