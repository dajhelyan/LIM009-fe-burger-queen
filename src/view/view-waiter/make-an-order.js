export const showPageWaiter = () => {
    const divWaiter = ` <header>
    <nav>
     <ul>
        <li><i class="fas fa-bars"></i></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Hacer Pedido</a></li>
        <li><a href="#">Pedidos</a></li>
     </ul>
    </nav>
 </header>
 <div>
   <p>Ingresar Nombre de Cliente </p>
   <input type="text"placeholder="Nombre Cliente"></input>
   <button type="button">Desayuno</button>
   <button type="button">Almuerzo</button>
   </div>
   <div>
   <p>Pedidos</p>
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
    
		</table>
   </div>
 `
 const pageWaiter = document.createElement('section');
 pageWaiter.innerHTML = divWaiter;

return pageWaiter;

}
