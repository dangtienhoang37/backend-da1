import express from 'express'

import middlewareVerifyToken from "../controller/middlewareController.js";
import {userController} from '../controller/index.js'


const router = express.Router()


router.post('/createAccount/') // tạo tk cho bs
router.patch('/update-doctor-profile') // update theo id
router.get("/get-all-user",middlewareVerifyToken.verifyAdminAuth,userController.getAllUser); // lay tat ca thong tin user hien thi o trang thong tin user
router.delete("/delete-user/:id",middlewareVerifyToken.verifyAdminAuth,userController.deleteUser)


export default router