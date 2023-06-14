import express from "express";
import {userController} from '../controller/index.js'
const router = express.Router();
import { ExpressValidator, body } from "express-validator";

router.get("/:id"); // lay tat ca thong tin user hien thi o trang thong tin user
router.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 7 }),
    userController.login

);
router.post("/register");



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
