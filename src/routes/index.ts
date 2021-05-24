import {Router} from 'express';
import authenticated from '../middleware/authenticated'
import {AuthenticationController} from '../controller/AuthenticationController'
import {ProductController} from '../controller/ProductController'
import {ShoppingCartController} from '../controller/ShoppingCartController'

const routes = Router();

const authenticationController = new AuthenticationController()
const productController = new ProductController()
const shoppingCartController = new ShoppingCartController()

routes.post('/auth', authenticationController.create)

routes.post('/product',authenticated, productController.create)
routes.get('/product',authenticated, productController.show)

routes.post('/shoppingcart',authenticated, shoppingCartController.create)
routes.get('/shoppingcart/:id',authenticated, shoppingCartController.index)
routes.put('/shoppingcart/add/:id',authenticated, shoppingCartController.update)
routes.put('/shoppingcart/rm/:id',authenticated, shoppingCartController.update)

export default routes;