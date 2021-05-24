import {Router} from 'express';
import {AuthenticationController} from '../controller/AuthenticationController'
import {ProductController} from '../controller/ProductController'
import {ShoppingCartController} from '../controller/ShoppingCartController'

const routes = Router();

const authenticationController = new AuthenticationController()
const productController = new ProductController()
const shoppingCartController = new ShoppingCartController()

routes.post('/auth', authenticationController.create)

routes.post('/product', productController.create)
routes.get('/product', productController.show)

routes.post('/shoppingcart',shoppingCartController.create)
routes.get('/shoppingcart/:id', shoppingCartController.index)
routes.put('/shoppingcart/add/:id', shoppingCartController.update)
routes.put('/shoppingcart/rm/:id', shoppingCartController.update)

export default routes;