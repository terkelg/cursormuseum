import image from './precursor-small.webp';

const width = 1600;
const height = 1600;
const img = document.createElement('img');
const classname = `precursor-${Date.now()}`;
const root = document.documentElement;

// Setup arrow element
img.width = width;
img.height = height;
img.src = image;
img.classList.add(classname);

// Append to DOM
document.body.appendChild(img);

// Hide all cursors
const style = document.createElement('style');
style.innerHTML = /*css*/`
    * {
        cursor: none!important;
    }
    .${img.className} {
        --size: 200px;
        --anchor-x: 35%;
        --anchor-y: 20%;
        --x: calc(var(--mouse-x) * 1px);
        --y: calc(var(--mouse-y) * 1px);

        position: fixed;
        inset-block-end: auto;
        inset-inline-end: auto;
        inset-block-start: 0;
        inset-inline-start: 0;
        pointer-events: none;
        z-index: 9999;

        contain: strict;
        content-visibility: auto; 
        will-change: transform;

        inline-size: var(--size);
        block-size: var(--size);
        transform: translate(calc(var(--x) - var(--anchor-x)), calc(var(--y) - var(--anchor-y)));
    } 
`;
document.head.appendChild(style);

document.addEventListener('mousemove', onMouseMove, { passive: true });
function onMouseMove(event: MouseEvent) {
    root.style.setProperty('--mouse-x', `${event.clientX}`);
    root.style.setProperty('--mouse-y', `${event.clientY}`);
}