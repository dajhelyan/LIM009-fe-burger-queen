/* import { dataOrders } from '../../lib/controller/firestore.js'; */

const arrOrders = [];

const productElement = (product) => {
    const tmpl = `
    <img src="${product.img}">
    <p>${product.producto}</p>
    <p>S/${product.precio}<p>
    <button type="button" id="btn-add-${product.id}">Añadir</button>
    `
   

    const divSingleProduct = document.createElement('div');
    divSingleProduct.classList.add('div-desayunos')
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
    // const nameUser = document.getElementById('name-user').value;
    // <p>nameUser</p>
    const tmplListAdd = `


    <table>
   
    <tr>
       <th>cant</th>
        <th>Ítem</th>
        <th>Precio $</th>
    </tr>
    <tr>
        <td>${product.producto}</td>
        <td>${product.precio}</td>
    </tr>
    </table>
    
    <button type="button" id="btn-remove-ele-order-${product.id}">Eliminar</button>  
    `

    const liAddProduct = document.createElement('li');
    liAddProduct.innerHTML = tmplListAdd;

    const ulElemt = document.getElementById('see-order');

    liAddProduct.querySelector('button').addEventListener('click', () => {
        let arrOrders
        const index = arraOrders.indexOf([0]);
        console.log(index)
        //  arrOrders.filter( arrOrders => arrOrders[2] )


        //usar metodo filter para decir que s vea todos los productos menos ql id de ese btn

        ulElemt.removeChild(liAddProduct)
        console.log(arrOrders);
    })

    return liAddProduct
}

const totalOrder = (arrOrder) => {
    /* const arrTotal = []; */
    let acum = 0;
    arrOrder.forEach(arr => {
        const suma = acum + arr.precio
        acum = suma
        /* const tot = suma + arr.precio */
        /* arrTotal.push(suma) */
        console.log(acum)
    })
    
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