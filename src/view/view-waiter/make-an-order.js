import { showBreakfast, showLunch } from "./view-desayuno.js";

import { getDataBreakfast, getLunchData } from '../../lib/controller/firestore.js';
// import { pintarDesayuno } from '../../lib/view-controller/view-controller-firestore.js'
// import { getBreakfastData, getLunchData } from '../../lib/controller/controller-firestore.js';

export const showPageWaiter = () => {
  const divWaiter = ` 
    <header>
      <nav>
        <ul>
          <li><i class="fas fa-bars"></i></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Hacer Pedido</a></li>
          <li><a href="#">Pedidos</a></li>
      </ul>
    </nav>
    </header>
    <div>
      <p>Ingresar Nombre de Cliente </p>
      <input type="text" id="name-user" placeholder="Nombre Cliente"></input>
      <button type="button" id="saveName">Guardar</button>
      <button type="button" id="menu-breakfast">Desayuno</button>
      <button type="button" id="menu-lunch">Almuerzo</button>
    </div>
    <div class="container" id="container-menu">  
    </div>  
    <div id="order">
      <p>Pedido:</p>
      
      <ul id="see-order">
      </ul>
      <button type="button" id="sent-order-kittchen">Enviar a la cocina</button>
    </div>
 `
    const pageWaiter = document.createElement('section');
    pageWaiter.innerHTML = divWaiter;

    const btnDesayuno = pageWaiter.querySelector('#menu-breakfast');
    btnDesayuno.addEventListener('click', () => {
      showBreakfast(getDataBreakfast)
    });
    
    const btnMenuLunch =  pageWaiter.querySelector('#menu-lunch');
    btnMenuLunch.addEventListener('click', () => {
      showLunch(getLunchData)
    });

    // const btnSentOrder = pageWaiter.querySelector('#sent-order-kittchen');
    // btnSentOrder.addEventListener('click', () => {)}
    const btnSaveName = pageWaiter.querySelector('#saveName');
    btnSaveName.addEventListener('click', () =>{
      const nameUser = pageWaiter.querySelector('#name-user').value;
      console.log(nameUser)
      const divOrder = pageWaiter.querySelector('#order')
      divOrder.innerHTML = nameUser;

    })
           
    


    // const btnAlmuerzo = pageWaiter.querySelector('#almuerzo');
    // btnAlmuerzo.addEventListener('click',  )

        //aui va funcion de firestore para tarer data y pintar
    return pageWaiter;
}
