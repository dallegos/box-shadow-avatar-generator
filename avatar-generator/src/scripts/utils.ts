/**
 * Generate random color in hexadecimal format like:
 * ```
 * #A4F42C or #FFFFFF
 * ```
 * @returns a color in hexadecimal format
 */
export function getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let isDown = false;

/**
 * Checks if mouse is down
 */
export function isMouseDown(): boolean {
    document.addEventListener('mousedown', (): void => {
        isDown = true;
    });

    document.addEventListener('mouseup', (): void => {
        isDown = false;
    });

    return isDown;
}

/**
 * Generate slug from text
 */
export function slugify(text: string): string {
    return text
        .toString()
        .normalize('NFKD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/_/g, '-')
        .replace(/--+/g, '-')
        .replace(/-$/g, '');
}
