const { Router } = require('express')
const router = Router()

const userController = require('../controllers/users.controller')

router.get('/', userController.getUser)
router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)

module.exports = router