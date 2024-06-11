const ApiError = require("../error/ApiError")
const { Application } = require("../models/models")

class ApplicationController {
    async create(req, res, next) {
        try {
            const { name, tell, message, userId } = req.body

            const application = await Application.create({ name, tell, message, statusId: 'В обработке', userId })

            return res.json({ message: 'Заявка успешно отправлена' })
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getUser(req, res, next) {
        const { userId } = req.params

        const applications = await Application.findAll({ where: { userId } })

        return res.json(applications)
    }

    async getAll(req, res, next) {
        let { limit, page } = req.query

        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit

        const applications = await Application.findAndCountAll({ limit, offset })

        return res.json(applications)
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body

            const application = await Application.destroy({ where: { id } })

            return res.json(application)
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res) {
        try {
            const { id, statusId } = req.body

            const application = await Application.findOne({ where: { id } })
            if (application) {
                const update = await application.update({ statusId })
            }

            return res.json(application)
        }

        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ApplicationController()