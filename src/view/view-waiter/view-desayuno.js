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
        arrOrders
        const objProducto = {
            id: product.id,
            producto: product.producto,
            precio: product.precio,
            cant: 1,
            subtotal: product.precio
        }
        addProductList(objProducto)
       
     })

    return divSingleProduct;
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

    const trCreateProduct = document.createElement('tr');
    trCreateProduct.innerHTML = tmplListAdd;

    const tableElement = document.getElementById('see-order');

    const addCantProduct = trCreateProduct.querySelector(`#add-cant-${product.id}`);
    addCantProduct.addEventListener('click', () => {
        addProductList(product)
        
    })

    const deleteProduct = trCreateProduct.querySelector(`#btn-remove-ele-order-${product.id}`);
    deleteProduct.addEventListener('click', () => {
        const newArr = [];
        for (let i = 0; i < arrOrders.length; i++) {
            const element = arrOrders[i];
            if (product.id !== element.id) {
                console.log('entreeeeeeexs')
                newArr.push(element)
                console.log(newArr, '33');
                
            } else {
                console.log('no entreee');
                tableElement.removeChild(trCreateProduct);
            }

        }
        arrOrders = newArr
    })

    console.log(arrOrders,'dele')
    trCreateProduct.querySelector(`#remove-one-cant${product.id}`).addEventListener('click', () => {
        decreseCant(product)
       /*  removeElement(arrOrders, product)

        tacle.removeChild(trCreateProduct) */
        console.log(arrOrders);
    })

    return trCreateProduct
}

const addProductList = (obj) => {
    addedCantProduct(obj);
    
    printCant(obj)
    totalOrder(arrOrders);
}

const decreseCant = (obj) => {
    removeUniCant(obj)
    removeCant();
    
}

const removeUniCant = (obj) => {
    const findID = arrOrders.find((producto) => {
        console.log(producto, 'yy')
        return producto.id === obj.id
    })

    if (findID !== undefined) {
        console.log('existoooo')
        let newArr = arrOrders.map(element => {
            if (element.id === obj.id) {
                if (element.cant > 1) {
                    const cant = element.cant - 1;
                    element.cant = cant;
                    element.subtotal = cant * element.precio;
                }
                
                return element;
            } else {
                return element;
            }
        })
        arrOrders = newArr
    } /* else {
        arrOrders.push(obj)
    } */
}

const removeCant = () => {
    const listOrder = document.getElementById('see-order');
    arrOrders.forEach((element) => {
    if (element.cant >= 1) {
        const replaceCant = listOrder.querySelector(`#can-${element.id}`)
        replaceCant.textContent = `${element.cant}`
    } else {
        return listOrder
    }
})
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

const printCant = (obj) => { 
    const listOrder = document.getElementById('see-order');
    arrOrders.forEach((element) => {
    if (element.cant > 1) {
        const replaceCant = listOrder.querySelector(`#can-${element.id}`)
        replaceCant.textContent = `${element.cant}`
    } else if (element.id === obj.id) {
        listOrder.appendChild(orderElement(obj))
    }
})
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