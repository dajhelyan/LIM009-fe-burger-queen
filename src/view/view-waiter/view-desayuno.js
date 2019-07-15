

export const showBreakfast = (callback) => {
    const container = document.getElementById('container-menu');
    container.innerHTML = '';
    callback()
    .then((result) => {
        result.forEach(product => {
            console.log(product, '2')
            container.innerHTML += `
            <div class="single-product-breakfast"> 
                <img src="">
                <p>${product.producto}</p>
                <p>${product.precio}</p>
                <button type="button">Añadir</button>
            </div>`
        });
    });
}

export const showLunch = (callback) => {
    const container = document.getElementById('container-menu');
    container.innerHTML = '';
    callback()
    .then((result) => {
        result.forEach(product => {
            console.log(result,'e')
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