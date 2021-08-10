import express from 'express'
import userRoute from './routes/users.routes'
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())

// Routes
app.use('/users', userRoute)

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
