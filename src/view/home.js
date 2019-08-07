// import { showPageWaiter } from './view-waiter/make-an-order.js'
import { homePage } from '../lib/view-controller/view-controller-firestore.js'

export const viewHome = () => {
    const homeTemplate = `
    <header>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="./img/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">
            Burguer Queen
        </a>
    </nav>
    </header>
    <div class="d-flex p-2 bd-highlight align-self-center">
        <figure class="figure">
            <img src="./img/setComida.png" class="figure-img img-fluid rounded" alt="...">
        </figure>
        <div class="d-flex align-content-around flex-wrap">
            <h1>Team Burguer Queen</h1>
            <div class="d-flex align-items-center">
                <button id="waiter" type="button">Meserx</button>
                <button id="kitchen" type="button">Cocinerx</button>
            </div>
        </div>
    </div>
    `
    const createDiv = document.createElement('div');
    createDiv.innerHTML = homeTemplate;

    const btnWaiter = createDiv.querySelector('#waiter');
    btnWaiter.addEventListener('click', homePage)


    return createDiv;
}

