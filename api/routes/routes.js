import Express from 'express'
import { getSavedRoutes } from '../endpoints/runningRoutes/getSavedRoutes.js'
import { saveRoute } from '../endpoints/runningRoutes/saveRunningRoute.js'
import { deleteRoute } from '../endpoints/runningRoutes/deleteRunningRoute.js'
import { login } from '../endpoints/authentication/login.js'
import { register } from '../endpoints/authentication/register.js'
import { logout } from '../endpoints/authentication/logout.js'
import { forgotPassword } from '../endpoints/authentication/forgotPassword.js'
import { resetPassword } from '../endpoints/authentication/resetPassword.js'
import { isAuthenticated } from '../middleware/isAuthenticated.js'

const dataRouter = new Express.Router()

dataRouter.get('/test', (req, res) => {
    res.send('Hello from the server!')
})

dataRouter.get('/savedRoutes', isAuthenticated, getSavedRoutes);
dataRouter.post('/saveRoute', isAuthenticated, saveRoute);
dataRouter.delete('/deleteRoute/:id', isAuthenticated, deleteRoute);

dataRouter.post('/login', login);
dataRouter.post('/register', register);
dataRouter.get('/logout', logout);
dataRouter.post('/forgotPassword', forgotPassword);
dataRouter.post('/resetPassword', resetPassword);

dataRouter.get('/user', isAuthenticated, getUser);

export default dataRouter