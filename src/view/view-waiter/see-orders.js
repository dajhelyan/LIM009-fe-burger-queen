//funcion que se llamará cada vez que se haga click en añadir

const seeOrders = () => {
    const divOrders = document.querySelector('#see-orders')
    const orders = document.createElement('table')
    const orderTable = `<table>
    <caption> Lista de Pedidos</caption>
    <tr>
        <th>Ítem</th>
        <th>Precio $</th>
    </tr>
    <tr>
        <td>Café americano</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Sandwich de jamón y queso</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Jugo de frutas natural</td>
        <td>7</td>
    </tr>
    </table>`
}