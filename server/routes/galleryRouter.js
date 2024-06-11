const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), galleryController.create)
router.get('/', galleryController.getAll)
router.post('/delete', checkRole('ADMIN'), galleryController.delete)




module.exports = router