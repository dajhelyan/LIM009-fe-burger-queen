
const productElement = (product) => {
    const tmpl = `
    <p>${product.producto}</p>
    <p>${product.precio}<p>
    <button type="button" id="btn-add-${product.id}">Añadir</button>
    `
    /* const tmplListAdd = `
        <p>${product.producto}<p>
        <p>${product.precio}</p>
        <button>Eliminar</button>  
    ` */

    const divSingleProduct = document.createElement('div');
    divSingleProduct.innerHTML = tmpl;
/* 
    const liAddProduct = document.createElement('li');
    liAddProduct.innerHTML = tmplListAdd; */

    /* const listOrder = document.getElementById('see-order'); */

    /* divSingleProduct.querySelector('button').addEventListener('click', () => {
        listOrder.appendChild(liAddProduct)
    }) */

    return divSingleProduct;
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
                console.log(result, 'e')
                container.innerHTML += `
            <div class="single-product-lunch">
                <img src="">
                <p>${product.producto}</p>
                <p>${product.precio}<p>
                <button type="button">Añadir</button>
            </div> 
            `
                /* console.log(product.producto,'7') */
            });
        });
}