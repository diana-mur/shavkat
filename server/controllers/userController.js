const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models');

const generateJWT = (id, name, roleId) => {
    return jwt.sign(
        { id, name, roleId: roleId },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { name, password } = req.body
        if (!name || !password) {
            return next(ApiError.badRequest('Некорректный логин или пароль'))
        }
        const candidate = await User.findOne({ where: { name } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ name, password: hashPassword, roleId: 'USER' })
        const token = generateJWT(user.id, user.name, user.roleId)
        return res.json({ message: 'Пользователь успешно зарегистрирован.' })
    }

    async login(req, res, next) {
        const { name, password } = req.body
        const user = await User.findOne({ where: { name } })
        if (!user) {
            return next(ApiError.internal('Пользователь с таким именем не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJWT(user.id, user.name, user.roleId)
        return res.json({ token })
    }

    async info(req, res, next) {
        const { id } = req.params

        const user = await User.findOne({ where: { id } })

        if (!user) {
            return next(ApiError.internal('Пользователь с таким id не найден'))
        }

        return res.json({ name: user.name })
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.name, req.user.roleId)
        return res.json({ token })
    }

}

module.exports = new UserController()