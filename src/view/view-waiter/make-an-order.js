import { showBreakfast, showLunch, addProductList, deleteProductOrder, decreseCant, totalOrder, printTotalOrder, arrOrders, printUserName, createOrder } from "./view-desayuno.js";

export const showPageWaiter = () => {
    const divWaiter = ` 
    <header>
    <nav class="navbar navbar-light justify-content-between navbar-waiter">
      <a class="navbar-brand" href="#/home">
        <div>
            <img src="./img/logo.png" width="60" height="60" class="d-inline-block align-top" alt="">
            <span>
                <p class="p-header">Burger Queen</p>
            </span>
          </div>
      </a>
      <form class="form-inline">
        <button class="btn btn-outline-success my-2 my-sm-0 btn-home" type="button">Home</button>
        <button class="btn btn-outline-success my-2 my-sm-0 btn-orders" type="button">Ver pedidos</button>
      </form>
    </header>
    <div>
      <p>Ingresar Nombre de Cliente </p>
      <input type="text" id="name-user" placeholder="Nombre Cliente"></input>
      <button id="add-name-user" type="button">Guardar</button>
      <button type="button" id="menu-breakfast">Desayuno</button>
      <button type="button" id="menu-lunch">Almuerzo</button>
    </div>
    <div class="container" id="container-menu">  
    </div>  
    <div>
      <p>Pedido de <span id="nameUser"></span></p>
      <table id="see-order">
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cant.</th>
          <th>Eliminar</th>
        </tr> 
       
       
      </table>
      <p>Total: <span id="totalOrder"></span></p>
              <button type="button" id="sent-order-kittchen">Enviar a la cocina</button>
    </div>
 `
    const pageWaiter = document.createElement('section');
    pageWaiter.innerHTML = divWaiter;

    const btnDesayuno = pageWaiter.querySelector('#menu-breakfast');
    btnDesayuno.addEventListener('click', () => {
      showBreakfast(productElement)
    });
    
    const btnMenuLunch =  pageWaiter.querySelector('#menu-lunch');
    btnMenuLunch.addEventListener('click', () => {
      showLunch(productElement)
    });

    const btnAddNameUser = pageWaiter.querySelector('#add-name-user');
    btnAddNameUser .addEventListener('click', () => {
      const userName = document.getElementById('name-user').value;
      printUserName(userName)
    }) 
    
    const btnSentKitchen = pageWaiter.querySelector('#sent-order-kittchen');
    btnSentKitchen.addEventListener('click', () => {
      createOrder()
    })

    return pageWaiter;
}

/* export const productElementLunch = (product) => {

  const tmpl = `
    <div id="btn-add-${product.id}" >
    <img src="${product.img}" class="img-des"/>
    <p>${product.producto}</p>
    <p>${product.precio}</p>
    </div>
  
 
  `

  const divSingleCategory = document.createElement('div');
  divSingleCategory.innerHTML = tmpl;

  
divSingleCategory.addEventListener('click', () => {
   
      
      const objProducto = {
          id: product.id,
          producto: product.producto,
          precio: product.precio,
          cant: 1,
          subtotal: product.precio
      }

      addProductList(objProducto, orderElement);
     
   })

  return divSingleCategory;
} */

export const productElement = (product) => {

  const tmpl = `
  <div id="btn-add-${product.id}" >
    <img src="${product.img}" class="img-des"/>
    <p>${product.producto}</p>
    <p>$${product.precio}</p>
  </div>
  `

  const divSingleProduct = document.createElement('div');
  divSingleProduct.innerHTML = tmpl;
  divSingleProduct.classList.add('desayunos');
  
  divSingleProduct.addEventListener('click', () => {
      
      const objProducto = {
          id: product.id,
          producto: product.producto,
          precio: product.precio,
          cant: 1,
          subtotal: product.precio
      }

      addProductList(objProducto, orderElement);
     
   })

  return divSingleProduct;
}

export const orderElement = (product) => {
  const tmplListAdd = `
  <td>${product.producto}</td>
  <td>${product.subtotal}</td>
  <td><span id="can-${product.id}">${product.cant}</span>
  <button id="add-cant-${product.id}">+</button><button id="remove-one-cant${product.id}">-</button>
  </td>
  <td><button type="button" id="btn-remove-ele-order-${product.id}">Eliminar</button></td>  
  `

  const trCreateProduct = document.createElement('tr');
  trCreateProduct.innerHTML = tmplListAdd;

  const tableElement = document.getElementById('see-order');


  const addCantProduct = trCreateProduct.querySelector(`#add-cant-${product.id}`);
  addCantProduct.addEventListener('click', () => {
      
      addProductList(product);
      
  })

  trCreateProduct.querySelector(`#btn-remove-ele-order-${product.id}`).addEventListener('click', () => { debugger
      deleteProductOrder(product, tableElement, trCreateProduct);
      const totalProductOrder = totalOrder(arrOrders);
      printTotalOrder(totalProductOrder);
      
  })


  trCreateProduct.querySelector(`#remove-one-cant${product.id}`).addEventListener('click', () => {
      decreseCant(product);      
  })

  return trCreateProduct;
}

