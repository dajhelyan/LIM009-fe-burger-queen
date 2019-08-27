// import { showPageWaiter } from './view-waiter/make-an-order.js'
import { homePage } from '../lib/view-controller/view-controller-firestore.js'

export const viewHome = () => {
    const homeTemplate = `
    <header>
    <nav class="navbar navbar-light">
        <a class="navbar-brand" href="#">
            <div>
                <img src="./img/logo.png" width="60" height="60" class="d-inline-block align-top" alt="">
                <span>
                    <p class="p-header">Burger Queen</p>
                </span>
            </div>
        </a>
    </nav>
    </header>
    <div class="d-flex p-2 bd-highlight align-self-center contenedor-home">
        <figure class="figure">
            <img class="img-home" src="./img/setComida.png" class="figure-img img-fluid rounded" alt="...">
        </figure>
        <div class="d-flex align-content-around flex-wrap">
            <h1>Team Burger Queen</h1>
            <div class="d-flex align-items-center container-buttons">
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

