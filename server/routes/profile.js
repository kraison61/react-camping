const express = require('express')
const { createProfile } = require('../controllers/profileController')
const router = express.Router()

//@ENDPOINT http://localhost:3000/api/profile
router.post('/profile',createProfile)



module.exports = router