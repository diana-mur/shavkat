const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), eventController.create)
router.get('/', eventController.getAll)
router.post('/delete', checkRole('ADMIN'), eventController.delete)

module.exports = router