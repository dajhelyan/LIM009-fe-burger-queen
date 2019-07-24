 import { dataOrders } from '../../lib/controller/firestore.js'; 

export let arrOrders = [];

// let productos = [];


// const guardarFirestore= (callback)=>{
//     callback()
//     .then((result) => {
//         productos = result
//     })
// }
// export const showBreakfast = (callback, productElemnt) => {
//     const container = document.getElementById('container-menu');
//     container.innerHTML = '';
//     callback()
//     productElemnt.forEach(product => {
//         container.appendChild(productElemnt(product));
//     })
// }

export const showBreakfast = (callback, productElemnt) => {
    const container = document.getElementById('container-menu');
    container.innerHTML = '';
    callback()
        .then((result) => {
           
            result.forEach(product => {
                container.appendChild(productElemnt(product));
            })
        })
}


export const showLunch = (callback, productElemnt) => {
    const container = document.getElementById('container-menu');

    container.innerHTML = '';
    callback()
        .then((result) => {
            result.forEach(product => {
                container.appendChild(productElemnt(product));
                /* console.log(product.producto,'7') */
            });
        });
} 



export const deleteProductOrder = (obj, tbElemnt, trElemnt) => {
    
    const newArr = [];
     arrOrders.forEach((element) => {
        if (obj.id !== element.id) {
            console.log('entreeeeeeexs')
            newArr.push(element)
            console.log(newArr, '33');
            
        } else {
            console.log('no entreee');
            tbElemnt.removeChild(trElemnt);
        }
     })
        /* for (let i = 0; i < arrOrders.length; i++) {
            const element = arrOrders[i];
            if (product.id !== element.id) {
                console.log('entreeeeeeexs')
                newArr.push(element)
                console.log(newArr, '33');
                
            } else {
                console.log('no entreee');
                tableElement.removeChild(trCreateProduct);
            }

        } */
        arrOrders = newArr
}



export const addProductList = (obj, orderElemnt) => {
    addedCantProduct(obj);
    printCant(obj, orderElemnt)
    let totalProductOrder = totalOrder(arrOrders);
    printTotalOrder(totalProductOrder);
    
}

export const printTotalOrder = (totalOrder) => {
    const orderTotal = document.getElementById('totalOrder');
    orderTotal.textContent = totalOrder;
}

export const decreseCant = (obj) => {
    removeUniCant(obj)
    removeCant();
    let totalProductOrder = totalOrder(arrOrders);
    printTotalOrder(totalProductOrder);
}

export const removeUniCant = (obj) => {
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

export const removeCant = () => {
    const listOrder = document.getElementById('see-order');
    arrOrders.forEach((element) => {
    if (element.cant >= 1) {
        const replaceCant = listOrder.querySelector(`#can-${element.id}`);
        replaceCant.textContent = `${element.cant}`
    } else {
        return listOrder
    }

})
}


// agregando cantidad al producto - recorriendo el array de ordenes y retornando el elemento que cumple con la condicion
export const addedCantProduct = (obj) => { 
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

export const printCant = (obj, orderElemnt) => { 
    const listOrder = document.getElementById('see-order');
    arrOrders.forEach((element) => {
    if (element.cant > 1) {
        const replaceCant = listOrder.querySelector(`#can-${element.id}`)
        replaceCant.textContent = `${element.cant}`
    } else if (element.id === obj.id) {
        listOrder.appendChild(orderElemnt(obj))
    }
})
}


export const totalOrder = (arrOrder) => {
    const acumTotal =  arrOrder.reduce((acum, valorActual) => {
        const sum = acum + valorActual.subtotal;
        return sum
    }, 0)
    return acumTotal
}