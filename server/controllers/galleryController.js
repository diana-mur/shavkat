const uuid = require('uuid')
const path = require('path');
const { Gallery } = require('../models/models')
const ApiError = require('../error/ApiError')

class GalleryController {
    async create(req, res, next) {
        try {
            const { img } = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const gallery = await Gallery.create({ img: fileName })
            return res.json({ message: 'успешно создано.' })
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const galleries = await Gallery.findAndCountAll({ limit, offset })
        return res.send(galleries)
    }

    async delete(req, res) {
        try {
            const { id } = req.body

            const event = await Gallery.destroy({ where: { id } })

            return res.json({ message: 'успешно удалено.' })
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new GalleryController()