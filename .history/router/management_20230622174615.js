import express from 'express'
import router from './account'

const router = express.Router()


router.post('/createAccount/') // tạo tk cho bs
router.patch('/update-doctor-profile') // update theo id



export default router