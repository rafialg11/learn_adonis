/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UserController from '#controllers/user.controller'

const userController  = new UserController()

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/users', userController.store)
