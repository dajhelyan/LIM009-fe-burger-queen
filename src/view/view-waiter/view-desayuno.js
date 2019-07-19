/* import { dataOrders } from '../../lib/controller/firestore.js'; */

let arrOrders = [];

const productElement = (product) => {
    const tmpl = `
    <p>${product.producto}</p>
    <p>${product.precio}<p>

    <button type="button" id="btn-add-${product.id}">Añadir</button>
    `

    const divSingleProduct = document.createElement('div');
    divSingleProduct.innerHTML = tmpl;

    /* const listOrder = document.getElementById('see-order'); */

    const btnAddProduct = divSingleProduct.querySelector('button');
    btnAddProduct.addEventListener('click', () => {
       // listOrder.appendChild(orderElement(product))
        /* console.log(cantProduct, 'jj nn') */
        const objProducto = {
            id: product.id,
            producto: product.producto,
            precio: product.precio,
            cant: 1,
            subtotal: product.precio
        }
        addProductList(objProducto)
       /*  if (arrOrders.id === objProducto.id) {
            
        } else {
            
        } */        
    })

    return divSingleProduct;
}
const addProductList = (obj) => {
    addedCantProduct(obj);
    totalOrder(arrOrders);
    printCant(obj)
}


const printCant = (obj) => { 
    const listOrder = document.getElementById('see-order');
    arrOrders.forEach((element) => {
    if (element.cant > 1) {
        const replaceCant = listOrder.querySelector(`#can-${element.id}`)
        replaceCant.textContent = `${element.cant}`
    } else {
        listOrder.appendChild(orderElement(obj))
    }
})
}

const orderElement = (product) => {
    const tmplListAdd = `
    <td>${product.producto}</td>
    <td>${product.precio}</td>
    <td><span id="can-${product.id}">${product.cant}</span>
    <button id="add-cant-${product.id}">+</button><button id="remove-one-cant${product.id}">-</button>
    </td>
    <td><button type="button" id="btn-remove-ele-order-${product.id}">Eliminar</button></td>  
    `

    const liAddProduct = document.createElement('tr');
    liAddProduct.innerHTML = tmplListAdd;

    const ulElemt = document.getElementById('see-order');

    const addCantProduct = liAddProduct.querySelector(`#add-cant-${product.id}`);
    addCantProduct.addEventListener('click', () => {
        addProductList(product)
        
    })


    liAddProduct.querySelector('button').addEventListener('click', () => {
       /*  removeElement(arrOrders, product)

        ulElemt.removeChild(liAddProduct) */
        console.log(arrOrders);
    })

    return liAddProduct
}

const addedCantProduct = (obj) => {
    const findID = arrOrders.find((producto) => {
        console.log(producto, 'yy')
        return producto.id === obj.id
    })

    if (findID !== undefined) {
        console.log('existoooo')
        let newArr = arrOrders.map(element => {
            if (element.id === obj.id) {
                const acum = element.cant + 1;
                element.cant = acum;
                element.subtotal = acum * element.precio;
                return element;
            } else {
                return element;
            }
        })
        arrOrders = newArr
    } else {
        arrOrders.push(obj)
    }
    console.log(arrOrders, 'arrr');
    
        
        /* for (let i = 0; i < arrOrders.length; i++) {
            const element = arrOrders[i]
            if (element.id === obj.id) {
                const acum = element.cant + 1;
                element.cant = acum;
                newArr.push(element)
                // console.log(acum, '22');
                
            } else {
                newArr.push(element)
            }
        }
        arrOrders = newArr
    
    } else {
        arrOrders.push(obj)
    } */
}

/* const removeElement = (arr, ele) => {
    let indice = arr.indexOf(ele);
    console.log(indice)
    arr.filter((element) => {
        element.splice(indice, 1)
    })
} */


/* const cantProduct = (arrOrder) => {
    const sum = arrOrder.reduce((acum, valorActual) => {
        return acum + valorActual.cant
    }, 1)
    console.log(sum, 'j')
    return sum;
} */

const totalOrder = (arrOrder) => {
    /* const arrTotal = []; */
    const sum = arrOrder.reduce((acum, valorActual) => {
        return acum + valorActual.subtotal
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