import express from 'express'
import router from './account'

const router = express.Router()


router.post('/createAccount/') // tạo tk cho bs
router.patch('/update-doctor-profile') // update theo id
router.get("/get-all-user",middlewareVerifyToken.verifyAdminAuth,userController.getAllUser); // lay tat ca thong tin user hien thi o trang thong tin user



export default router