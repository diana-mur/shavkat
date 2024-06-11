const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    // role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Role = sequelize.define('role', {
    id: { type: DataTypes.STRING, primaryKey: true, unique: true },
})

const Application = sequelize.define('application', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    tell: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.STRING },
    // status: {type: DataTypes.STRING, defaultValue: 'В обработке',},
})

const Status = sequelize.define('status', {
    id: { type: DataTypes.STRING, primaryKey: true, unique: true },
})

const Gallery = sequelize.define('gallery', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Event = sequelize.define('event', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    adress: { type: DataTypes.STRING, allowNull: false },
    time: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
})

Role.hasMany(User)
User.belongsTo(Role)

User.hasMany(Application)
Application.belongsTo(User)

Status.hasOne(Application)
Application.belongsTo(Status)

module.exports = {
    User,
    Role,
    Application,
    Status,
    Gallery,
    Event
}