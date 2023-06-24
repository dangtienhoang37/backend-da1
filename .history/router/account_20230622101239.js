import express from "express";
import {userController} from '../controller/index.js'
import middlewareVerifyToken from "../controller/middlewareController.js";
import { ExpressValidator, body } from "express-validator";


const router = express.Router();


router.get("/:id",middlewareVerifyToken.verifyGetUserById,userController.getDetailUser); // lay tat ca thong tin user hien thi o trang thong tin user
router.get("/",middlewareVerifyToken.verifyAdminAuth,userController.getAllUser); // lay tat ca thong tin user hien thi o trang thong tin user
router.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 7 }),
    userController.login
);
router.post("/register",
    body("name").isLength({ min: 3}),
    body("dob").isDate({ format: 'YYYY-MM-DD'}),
    body("sex").isIn(['nam', 'nu']),
    body("phoneNumber").isMobilePhone('vi-VN'),
    body("BHYT").isNumeric().isLength({min: 10, max: 10}),
    body("username").isEmail(),
    
    
userController.register);



// Route đăng xuất
router.post("/logout", (req, res) => {

    res.clearCookie('token');
    res.send("Đăng xuất thành công");
});

// Route quên mật khẩu
router.post("/forgot-password", (req, res) => {
  // Xử lý logic quên mật khẩu ở đây
  // Gửi email khôi phục mật khẩu hoặc thực hiện các hoạt động khác

    res.send("Yêu cầu khôi phục mật khẩu đã được gửi");
});

router.post("/refresh-token",userController.reqRefreshToken)
// Route cập nhật thông tin tài khoản
router.patch("/:id",middlewareVerifyToken.verifyGetUserById, userController.updateProfile);
//delete for admin
router.delete("/delete-user/:id",middlewareVerifyToken.verifyAdminAuth,userController.deleteUser)

export default router;
