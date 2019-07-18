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
        totalOrder(arrOrders)
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

    const ulElemt = document.getElementById('see-order');

    liAddProduct.querySelector('button').addEventListener('click', () => {
        removeElement(arrOrders, product)



        ulElemt.removeChild(liAddProduct)
        console.log(arrOrders);
    })

    return liAddProduct
}

const removeElement = (arr, ele) => {
    let indice = arr.indexOf(ele);
    console.log(indice)
    arr.filter((element) => {
        element.splice(indice, 1)
    })
}

const totalOrder = (arrOrder) => {
    /* const arrTotal = []; */
    const sum = arrOrder.reduce((acum, valorActual) => {
        return acum + valorActual.precio
    }, 0)
    console.log(sum)
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