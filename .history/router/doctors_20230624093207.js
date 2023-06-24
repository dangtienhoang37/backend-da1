import express from 'express'
import {doctorController} from '../controller/index.js'
import middlewareVerifyToken from '../controller/middlewareController.js'


const router = express.Router()


router.get('/:id',middlewareVerifyToken.verifyDoctor,doctorController.getAllSchedule) // lấy ra tất cả lịch khám

router.get('/:id/:idl/:idp',middlewareVerifyToken.verifyDoctor,doctorController.getDetailSchedule) // lấy lịch theo id

router.post('/insert',middlewareVerifyToken.doctorController) // tạo lịch khám (bsi tạo)
router.delete('/delete-schedule/:id',middlewareVerifyToken.verifyDoctor) // xóa lịch khám theo id
router.patch('/:id') // sửa lịch theo id




export default router