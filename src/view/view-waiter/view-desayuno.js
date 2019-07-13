
let arrOrders = [];

export const showDesayuno = (callback) => {
    const container = document.getElementById('container-menu');
    container.innerHTML = '';
    callback().then((result) => {

        result.forEach(product => {

       const listProducts = document.createElement('div');
        listProducts.innerHTML += `<div class="div-desayunos"> 
     <img src="">
     <p>${product.producto}</p>
     <p>${product.precio}</p>
     <button id="btn-add-${product.id}" class='product' type="button">Añadir</button>
     </div>`


     container.appendChild(listProducts)

     const btnAdd = document.getElementById(`btn-add-${product.id}`)
     btnAdd.addEventListener('click',() => {
         
        const orderTable = `<table >
        <caption> Lista de Pedidos</caption>
        <tr>
            <th>Ítem</th>
            <th>Precio $</th>
        </tr>
        <tr>
            <td>${product.producto}o</td>
            <td>${product.precio}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        </table>`

        console.log('hjjjnjkjjhhuhbn')
console.log(product)


// listProduct.push(product)
    // console.log(listProduct)
 container.innerHTML= orderTable;
     })

        });

    
    })
    
}