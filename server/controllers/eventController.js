const uuid = require('uuid')
const path = require('path');

const { Event } = require('../models/models')
const ApiError = require('../error/ApiError')

class EventController {
    async create(req, res, next) {
        try {
            const { name, description, adress, time, date, price } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const event = await Event.create({ name, description, adress, time, date, price, img: fileName })
            return res.json({ message: 'Событие успешно создано.' })
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        const events = await Event.findAndCountAll({ limit, offset })
        return res.json(events)
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body

            const event = await Event.destroy({ where: { id } })

            return res.json({ message: 'Событие успешно удалено.' })
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new EventController()