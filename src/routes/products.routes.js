import {Router} from 'express'

import * as productsCtrl from './../controllers/products.controller'

const router = Router()

// router.post('/', productsCtrl.createProducts)
router.get('/', productsCtrl.getProducts)
router.get('/:productsId', productsCtrl.getProductById)
router.put('/', productsCtrl.updateProductById)
router.delete('/', productsCtrl.deleteProductById)



export default router;