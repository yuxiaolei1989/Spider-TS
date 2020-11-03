import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import './controller/'
import './db/'
import router from './router'

const app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['Allen YU'],
    maxAge: 24 * 60 * 60 * 1000
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(7001, () => {
    console.log('server is running')
})