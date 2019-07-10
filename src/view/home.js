

export const viewHome = () => {
    const homeTemplate = `
    <header>  
    </header>
    <h1>Team Burguer Queen</h1>
    <button id="waiter" type="button">Meserx</button>
    <button id="kitchen" type="button">Cocinerx</button>

    `
    const createDiv = document.createElement('div');
    createDiv.innerHTML = homeTemplate;

    const btnWaiter = createDiv.querySelector('#waiter');
    btnWaiter.addEventListener('click', )
    

    return createDiv;
}

