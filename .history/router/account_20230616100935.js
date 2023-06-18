import express from "express";
import {userController} from '../controller/index.js'
const router = express.Router();
import middlewareVerifyToken from "../controller/middlewareController.js";
import { ExpressValidator, body } from "express-validator";

router.get("/:id",userController.getDetailUser); // lay tat ca thong tin user hien thi o trang thong tin user
router.get("/",middlewareVerifyToken.verifyToken,userController.getAllUser); // lay tat ca thong tin user hien thi o trang thong tin user
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
  // Xử lý logic đăng xuất ở đây
  // Xóa token hoặc phiên làm việc

    res.send("Đăng xuất thành công");
});

// Route quên mật khẩu
router.post("/forgot-password", (req, res) => {
  // Xử lý logic quên mật khẩu ở đây
  // Gửi email khôi phục mật khẩu hoặc thực hiện các hoạt động khác

    res.send("Yêu cầu khôi phục mật khẩu đã được gửi");
});

// Route cập nhật thông tin tài khoản
router.put("/update-profile", (req, res) => {
  // Xử lý logic cập nhật thông tin tài khoản ở đây
  // Cập nhật thông tin tài khoản trong cơ sở dữ liệu hoặc thực hiện các hoạt động khác

    res.send("Cập nhật thông tin tài khoản thành công");
});

export default router;
