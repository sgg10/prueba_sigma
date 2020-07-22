const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()

//Cors Middleware
const corsOption = {origin: 'https://sigma-studios.s3-us-west-2.amazonaws.com/'}
app.use(cors(corsOption))

//Helmet middleware
app.use(helmet({ frameguard: false })) // ---> { frameguard: false } Desactiva el middleware por defecto que funciona para esta seguridad
app.use(helmet.contentSecurityPolicy({
    directives: { defaultSrc: ["'self'"]}
})) // --> Permite la seguridad de ejecucion de recursos

const { config } = require('./config')
const contactApi = require('./routes/contact')

//body Parser
app.use(express.json())

//routers
contactApi(app)


app.get('/', (req, res) => res.json({Hello :'Word'}))

app.listen(config.port, () => console.log(`Listening http://localhost:${config.port}`))