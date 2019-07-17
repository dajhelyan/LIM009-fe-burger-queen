
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
    /* 
        const liAddProduct = document.createElement('li');
        liAddProduct.innerHTML = tmplListAdd; */

    /* const listOrder = document.getElementById('see-order'); */
    // CREAR UN ARRAY DE BJETOS PARA GUARDAR LOS ELEMENTOS QUE SE HACE CLICK
    divSingleProduct.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault()
        const arrOrder = [''];
        arrOrder.push(e.target)
        console.log(arrOrder)
        console.log(e.target)


    })

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
                
                <p>${product.producto}</p>
                <p>${product.precio}<p>
               
                <button type="button">Añadir</button>
            </div> 
            `
                /* console.log(product.producto,'7') */
            });
        });
}