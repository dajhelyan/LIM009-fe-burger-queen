/* import { dataOrders } from '../../lib/controller/firestore.js'; */

const arrOrders = [];

const productElement = (product) => {
    const tmpl = `
    <p>${product.producto}</p>
    <p>${product.precio}<p>
    <button type="button" id="btn-add-${product.id}">Añadir</button>
    `
   

    const divSingleProduct = document.createElement('div');
    divSingleProduct.innerHTML = tmpl;

    const listOrder = document.getElementById('see-order');

    divSingleProduct.querySelector('button').addEventListener('click', () => {
        listOrder.appendChild(orderElement(product))
        arrOrders.push(product)

        console.log(arrOrders)
        /* return dataOrders(nameUser, arrOrders); */
    })

    return divSingleProduct;
}

const orderElement = (product) => {
    const tmplListAdd = `
    <p>${product.producto}<p>
    <p>${product.precio}</p>
    <button type="button" id="btn-remove-ele-order-${product.id}">Eliminar</button>  
    `

    const liAddProduct = document.createElement('li');
    liAddProduct.innerHTML = tmplListAdd;

    const liElement = document.getElementById('see-order');

    liAddProduct.querySelector('button').addEventListener('click', () => {
        arrOrders.pop(product)

        liElement.removeChild(liAddProduct)
        console.log(arrOrders);
    })

    return liAddProduct
}

export const showBreakfast = (callback) => {
    const container = document.getElementById('container-menu');
    container.innerHTML = '';
    callback()
        .then((result) => {
            result.forEach(product => {
                container.appendChild(productElement(product));
            })
        })
}


export const showLunch = (callback) => {
    const container = document.getElementById('container-menu');

    container.innerHTML = '';
    callback()
        .then((result) => {
            result.forEach(product => {
                container.appendChild(productElement(product));
                /* console.log(product.producto,'7') */
            });
        });
}