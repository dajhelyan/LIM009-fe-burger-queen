// imprtando vistas
import { viewHome } from './home.js';
import { showPageWaiter } from './view-waiter/make-an-order.js'

const components = {
    home: viewHome,
    waiter: showPageWaiter
}

export { components };