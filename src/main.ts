import './fonts.css';
import './style.css';
import bookmarklet from '../bookmarklet/bookmarklet.js?raw';

const root = document.documentElement;
const main = document.querySelector('main') as HTMLElement;

document.addEventListener('mousemove', onMouseMove, { passive: true });
main.addEventListener('mouseenter', onMainEnter, { passive: true });
main.addEventListener('mouseleave', onMainLeave, { passive: true });

function onMouseMove(event: MouseEvent) {
    root.style.setProperty('--mouse-x', `${event.clientX}`);
    root.style.setProperty('--mouse-y', `${event.clientY}`);
}

function onMainEnter(_: MouseEvent) {
    root.classList.add('mousepad-active');
}

function onMainLeave(_: MouseEvent) {
    root.classList.remove('mousepad-active');
}

function updateBookmarklet() {
    const bookmarkletLink = document.querySelector('.bookmarklet') as HTMLAnchorElement;
    bookmarkletLink.href = `${bookmarklet}`;
    bookmarkletLink.addEventListener('click', e => e.preventDefault());
}

updateBookmarklet();