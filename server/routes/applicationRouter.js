const Router = require('express')
const router = new Router()
const applicationController = require('../controllers/applicationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', applicationController.create)
router.get('/', checkRole('ADMIN'), applicationController.getAll)
router.get('/user/:userId', applicationController.getUser)
router.delete('/', checkRole('ADMIN'), applicationController.delete)
router.patch('/', checkRole('ADMIN'),  applicationController.update)

module.exports = router