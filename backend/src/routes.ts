import { Router } from 'express'
import { userController } from './controllers/userController'
import { profileController } from './controllers/profileController'
import { secureRoute } from './common/secureRoute'
import { studentController } from './controllers/studentController'
import { classController } from './controllers/classesController'
import { disciplineController } from './controllers/disciplineController'
import { calendarController } from './controllers/calendarController'
import { campusController } from './controllers/campusController'
import { noteFoulsController } from './controllers/noteFoulsController'
import { courseController } from './controllers/courseController'

export const routes = Router()

routes.use('/user', secureRoute(2), userController)
routes.use('/profile', secureRoute(2), profileController)
routes.use('/student', studentController)
routes.use('/class', classController)
routes.use('/noteFouls', noteFoulsController)
routes.use('/course', courseController)
routes.use('/discipline', disciplineController)
routes.use('/calendar', calendarController)
routes.use('/campus', campusController)
