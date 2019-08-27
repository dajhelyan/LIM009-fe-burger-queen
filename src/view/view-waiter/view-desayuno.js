import { dataOrders, getDataBreakfast, getLunchData } from '../../lib/controller/firestore.js';
import { orderElement } from './make-an-order.js'

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
      })
  } else {
    printProducts(productos.lunch, container, productElement)
  }
} 

const elementoBurger = (productos) => {
  console.log(productos.producto);

  let tmpSbores = '';
  productos.de.forEach(sabor => {
    tmpSbores += `<button class="burger-sabor-button" data-sabor="${sabor}" data-burger="${productos.producto}">${sabor}</button>`
  })

  let tmplAdicionales = ''
  productos.adicionales.forEach(adicional => {
    tmplAdicionales += `<button class="burger-adicional-button" data-adicional="${adicional}" data-burger="${productos.producto}">${adicional}</button>`
  })

  const tmpl = `
    <img class="img-des" src="${productos.img}"  />
    <p>${productos.producto}</p>
    <span>${tmpSbores}</span>
    <p>adicionales + $1</p>
    <span>${tmplAdicionales}</span>
    <button id="add-product-burger" type="button">añadir</button>
    `
  return tmpl;
}

let objBurger = {
  id: null,
  tipo: null,
  producto: null,
  adicional: null,
  cant: 1,
  precioAdicional: 1,
  subtotal: null
}


const printProductsForCategory = (objCategory, container, productElement) => {

  Object.keys(objCategory).forEach(categoria => {

    const productos = objCategory[categoria];

    if (categoria === 'hamburgesas') {

      const tmplBurger = (productos) => {

        const singleProduct = document.createElement('div')
        singleProduct.classList.add('desayunos')

        singleProduct.innerHTML += elementoBurger(productos);
        container.appendChild(singleProduct)
        console.log(singleProduct.innerHTML, 'di');

        document.querySelectorAll(`.burger-sabor-button[data-burger="${productos.producto}"]`).forEach(btn => {

          btn.addEventListener('click', () => {
            let sabor = btn.dataset.sabor;
            objBurger.tipo = sabor;
            console.log(sabor, 'kkk');
            /* console.log(e.target, 'sksks') */
          })
        })

        document.querySelectorAll(`.burger-adicional-button[data-burger="${productos.producto}"]`).forEach(btn => {
          

          btn.addEventListener('click', () => {
            let adicional = btn.dataset.adicional
            console.log(adicional, 'jjlll');

            objBurger.adicional = adicional;
          })
        })



        /* tmpSbores.addEventListener('click',  e => {
          console.log(e.target, 'sksks')
        }) */
        /* document.querySelectorAll('.burger-sabor-button').forEach(b => console.log(b.dataset.sabor, b.dataset.burger)) */

        const addProductBurger = singleProduct.querySelector('#add-product-burger');
        addProductBurger.addEventListener('click', () => { debugger
          console.log(productos, 'entreeee');

          if (objBurger.adicional === null) {
            objBurger.id = productos.id;
            objBurger.producto = productos.producto + "de " + objBurger.tipo;
            objBurger.precio = productos.precio;
            objBurger.subtotal = productos.precio;
          } else {
            objBurger.id = productos.id;
            objBurger.producto = productos.producto + "de " + objBurger.tipo + " adicional " + objBurger.adicional;
            objBurger.precioAdicional = objBurger.precioAdicional;
            objBurger.precio = productos.precio;
            objBurger.subtotal = productos.precio + objBurger.precioAdicional;
          }

          console.log(objBurger, 'jjj');
          addProductList(objBurger, orderElement);


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

  objBurger = {
    id: null,
    tipo: null,
    producto: null,
    precio: null,
    adicional: null,
    cant:1,
    subtotal: null,
    precioAdicional: 1
  }

}

// agregando cantidad al producto - recorriendo el array de ordenes y retornando el elemento que cumple con la condicion
export const addedCantProduct = (obj) => { debugger

  const findID = arrOrders.find((producto) => {
    console.log(producto, 'yy')
    return producto.producto === obj.producto
  })

  if (findID !== undefined) {
    console.log('existoooo')
    let newArr = arrOrders.map(element => {
      if (element.producto === obj.producto) {
        const acum = element.cant + 1;
        element.cant = acum;
        element.subtotal = acum * element.subtotal;
        return element;
      } else {
        return element;
      }
    })
    console.log(newArr, 'newarr');
    
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
    } else if (element.producto === obj.producto) {
      listOrder.appendChild(orderElemnt(obj))
    }
  })
}

export const deleteProductOrder = (obj, tbElemnt, trElemnt) => { 

  const newArr = [];
  arrOrders.forEach((element) => {
    console.log(element)
    if (obj.producto !== element.producto) {

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
          let precioSubtotal = element.subtota;
          console.log(precioSubtotal);
          
          precioSubtotal = cant * element.precio;
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
    console.log(arrOrder, 'ooooooooooooo')
    const sum = acum + valorActual.subtotal;
    return sum
  }, 0)
  console.log(acumTotal, 'jhjhjj');
  
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