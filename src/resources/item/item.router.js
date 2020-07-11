import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

// /api/item
router.route('/').post(controllers.createOne).get(controllers.getMany)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
