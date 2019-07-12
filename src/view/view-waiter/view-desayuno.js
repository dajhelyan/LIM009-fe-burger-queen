

export const showDesayuno = (callback) => {
    const container = document.getElementById('container-menu');
    container.innerHTML = '';
    callback().then((result) => {

        result.forEach(product => {

            container.innerHTML += `<div class="div-desayunos"> 
     <img src="">
     <p>${product.producto}</p>
     <p>${product.precio}</p>
     <button type="button">Añadir</button>
     </div>`



        });


    })
}