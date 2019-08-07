import { dataOrders, getDataBreakfast, getLunchData } from '../../lib/controller/firestore.js';
/* import { orderElement } from '../view-waiter/make-an-order.js'
 */
export let arrOrders = [];

let productos = {
  breakfast: null,
  lunch: null
};

let totalProductOrder = '';

export const showBreakfast = (productElement) => {

  const container = document.getElementById('container-menu');
  container.innerHTML = '';

  if (productos.breakfast === null) {

    getDataBreakfast()
      .then((result) => {
        productos.breakfast = result;

        printProducts(productos.breakfast, container, productElement)
      })

  } else {
    printProducts(productos.breakfast, container, productElement)
  }
}

export const showLunch = (productElement) => {
  const container = document.getElementById('container-menu');

  container.innerHTML = '';

  if (productos.lunch === null) {
    /* arrLunchData */
    getLunchData()
      .then((result) => {

        const objCategoryProd = produsctsByCat(result)

        productos.lunch = result;

        printProductsForCategory(objCategoryProd, container, productElement)




        /* const hamburgesas = product[1];
        console.log(hamburgesas, 'kkk');
        
        const printTmplHamburgesa = (hamburgesas) => {
            const hamburgesaTmpl = `
                <div>
                    <img src="${hamburgesas.img}" class="img-des" />
                    <p>${hamburgesas.producto}</p>
                    <button>Pollo</button><button>Carne</button><button>Vegana</button>
                    <p>adicionales + $1</p>
                    <button>huevo</button><button>queso</button>
                    <p>${hamburgesas.precio}</p>
                </div>`

                const divCatHmbrg = document.createElement('div')
                divCatHmbrg.innerHTML = hamburgesaTmpl

                return divCatHmbrg;
        }
        
        container.appendChild(printTmplHamburgesa(hamburgesas))
        console.log('existo'); */
      })
  } else {
    printProducts(productos.lunch, container, productElement)
  }
}

const elementoBurger = (productos) => {

  let tmpSbores = '';
  productos.de.forEach(sabor => {
    tmpSbores += `<button class="burger-sabor-button" data-sabor="${sabor}" data-burger="${productos.producto}">${sabor}</button>`
  })

  let tmplAdicionales = ''
  productos.adicionales.forEach(adicional => {
    tmplAdicionales += `<button class="burger-adicional-button" data-adicional="${adicional}">${adicional}</button>`
  })

  const tmpl = `
    <img src="${productos.img}" class="img-des" />
    <p>${productos.producto}</p>
    <span>${tmpSbores}</span>
    <p>adicionales + $1</p>
    <span>${tmplAdicionales}</span>
    <button id="add-product-burger" type="button">añadir</button>
    `
  return tmpl;
}



const printProductsForCategory = (objCategory, container, productElement) => {

  Object.keys(objCategory).forEach(categoria => {

    const productos = objCategory[categoria];

    if (categoria === 'hamburgesas') {

      const tmplBurger = (productos) => {

        const singleProduct = document.createElement('div')

        singleProduct.innerHTML += elementoBurger(productos);
        container.appendChild(singleProduct)

        const addProductBurger = singleProduct.querySelector('#add-product-burger');
        addProductBurger.addEventListener('click', () => {
          console.log('entreeee');

          const objBurger = {
            id: productos.id,
            tipo: productos.de,
            producto: productos.product + 'de' + tipo + adicional,
            adicional: productos.adicionales,
            cant: 1,
            precioAdicional: productos.precioAdicional,
            subtotal: productos.precio + precioAdicional
          }
          //addProductList(objBurger);
          console.log(objBurger, 'jjj');


        })

        return singleProduct;
      }

      const div = document.createElement('div')
      div.innerHTML = '<h3>' + categoria + '</h3>'
      container.appendChild(div)

      printProducts(productos, container, tmplBurger)

      console.log(productos);

    } else {

      const div = document.createElement('div')
      div.innerHTML = '<h3>' + categoria + '</h3>'
      container.appendChild(div)

      /*printProducts(div, container, productElement)*/
      /*  productos.forEach(prod => {
              div.appendChild(printTmpl(prod))
          })
          container.appendChild(div)*/

      printProducts(productos, div, productElement)


    }
  });
}

const produsctsByCat = (objResult) => {
  const prodsByCat = objResult.reduce(
    (accum, prod) => {
      const keys = Object.keys(accum)
      if (keys.includes(prod.categoria) !== true) { // crea las ṕropiedades con los product
        accum[prod.categoria] = [] // accum.bebidas = []
      }
      accum[prod.categoria].push(prod) // accum.bebidas.push(prod)
      return accum
    },
    {}
  )
/*   console.log(prodsByCat)
 */  return prodsByCat;
}

const printProducts = (products, container, productElemnt) => {

  products.forEach(product => {
    container.appendChild(productElemnt(product));
  })

}

export const printUserName = (user) => {

  const printName = document.getElementById('nameUser');
  printName.innerHTML = user;
}

export const addProductList = (obj, orderElemnt) => {
  addedCantProduct(obj);
  printCant(obj, orderElemnt)
  totalProductOrder = totalOrder(arrOrders);
  printTotalOrder(totalProductOrder);

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

export const deleteProductOrder = (obj, tbElemnt, trElemnt) => {

  const newArr = [];
  arrOrders.forEach((element) => {
    console.log(element)
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

export const totalOrder = (arrOrder) => {

  const acumTotal = arrOrder.reduce((acum, valorActual) => {
    console.log(arrOrder)
    const sum = acum + valorActual.subtotal;
    return sum
  }, 0)
  return acumTotal
}

export const printTotalOrder = (totalOrder) => {
  const orderTotal = document.getElementById('totalOrder');
  orderTotal.textContent = totalOrder;
}

export const createOrder = () => {
  const nameUser = document.getElementById('name-user').value;
  const order = arrOrders;
  const totalOrder = totalProductOrder;
  dataOrders(nameUser, order, totalOrder)
}