const Router = require('express')
const router = new Router()
const applicationRouter = require('./applicationRouter')
const eventRouter = require('./eventRouter')
const galleryRouter = require('./galleryRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/application', applicationRouter)
router.use('/gallery', galleryRouter)
router.use('/event', eventRouter)

module.exports = router