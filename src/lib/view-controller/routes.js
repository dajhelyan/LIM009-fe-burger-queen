import { components } from '../../view/components.js';

export const changeView = (route) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    switch (route) {
        case '':
        case '#':
        case '#/':
        case '#home/':
            { return root.appendChild(components.home()) };

        default:
            break;
    }
console.log(route);
}

export const initRouter = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })

}