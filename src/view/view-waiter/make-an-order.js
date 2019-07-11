import { pintarData } from '../../lib/view-controller/view-controller-firestore.js'

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
   <input type="text" id="desayuno"placeholder="Nombre Cliente"></input>
   <button type="button" id="desayuno-a">Desayuno</button>
   <button type="button" id="almuerzo">Almuerzo</button>
   </div>

   <div id="container-menu">    
   
   </div>
 `
    const pageWaiter = document.createElement('section');
    pageWaiter.innerHTML = divWaiter;

    

    const btnDesayuno = pageWaiter.querySelector('#desayuno-a');
    btnDesayuno.addEventListener('click', pintarData)
    
    


    // const btnAlmuerzo = pageWaiter.querySelector('#almuerzo');
    // btnAlmuerzo.addEventListener('click',  )

        //aui va funcion de firestore para tarer data y pinta
    return pageWaiter


    return pageWaiter;


}
