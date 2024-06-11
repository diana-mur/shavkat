require(`dotenv`).config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')


const PORT = process.env.PORT || 5000
  
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.static('static'))
// Обработка ошибок, последний Middleware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервак работает на порте ${PORT}`))

    } catch (e) {
        console.log(e)
    }

  
    //   await models.Role.create({id: ('USER')})
    //   await models.Role.create({id: ('ADMIN')})
    //   await models.Status.create({id: ('В обработке')})
    //   await models.Status.create({id: ('Принят')})
    //   await models.Status.create({id: ('Отклонен')})
   
    }





    

start()