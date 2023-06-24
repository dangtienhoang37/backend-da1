import express from "express";
import {userController} from '../controller/index.js'
import middlewareVerifyToken from "../controller/middlewareController.js";
import { ExpressValidator, body } from "express-validator";


const router = express.Router();
router.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 7 }),
    userController.login
);
// Route đăng xuất
router.get("/logout", userController.logout);

router.post("/register",
    body("name").isLength({ min: 3}),
    body("dob").isDate({ format: 'YYYY-MM-DD'}),
    body("sex").isIn(['nam', 'nu']),
    body("phoneNumber").isMobilePhone('vi-VN'),
    body("BHYT").isNumeric().isLength({min: 10, max: 10}),
    body("username").isEmail(),  
userController.register);

// router.get("/get-all-user",middlewareVerifyToken.verifyAdminAuth,userController.getAllUser); // lay tat ca thong tin user hien thi o trang thong tin user

router.get("/:id",middlewareVerifyToken.verifyGetUserById,userController.getDetailUser); // lay tat ca thong tin user hien thi o trang thong tin user
// Route quên mật khẩu
router.post("/forgot-password", )

router.post("/refresh-token",userController.reqRefreshToken)
// Route cập nhật thông tin tài khoản
router.patch("/:id",middlewareVerifyToken.verifyGetUserById, userController.updateProfile);
//delete for admin
// router.delete("/delete-user/:id",middlewareVerifyToken.verifyAdminAuth,userController.deleteUser)


export default router;
