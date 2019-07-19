import { showBreakfast, showLunch } from "./view-desayuno.js";

import { getDataBreakfast, getLunchData } from '../../lib/controller/firestore.js';
// import { pintarDesayuno } from '../../lib/view-controller/view-controller-firestore.js'
// import { getBreakfastData, getLunchData } from '../../lib/controller/controller-firestore.js';

export const showPageWaiter = (nameUser) => {
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
      <button>Guardar</button>
      <button type="button" id="menu-breakfast">Desayuno</button>
      <button type="button" id="menu-lunch">Almuerzo</button>
    </div>
    <div id="container-menu">  
    </div>  
    <div>
      <p>Pedido de ${nameUser}</p>
      <table id="see-order">
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cant.</th>
          <th>Eliminar</th>
        </tr> 
       
       
      </table>
      <p>total</p>    
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

    const btnSentOrder = pageWaiter.querySelector('#sent-order-kittchen');
    btnSentOrder.addEventListener('click', () => {
      const nameUser = pageWaiter.querySelector('#name-user').value;
    }) 
    


    // const btnAlmuerzo = pageWaiter.querySelector('#almuerzo');
    // btnAlmuerzo.addEventListener('click',  )

        //aui va funcion de firestore para tarer data y pintar
    return pageWaiter;
}
