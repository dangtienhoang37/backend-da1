import express from 'express'
import {doctorController} from '../controller/index.js'


const router = express.Router()


router.get('/',doctorController.getAllSchedule) // lấy ra tất cả lịch khám

router.get('/:id') // lấy lịch theo id

router.post('/insert') // tạo lịch khám (bsi tạo)
router.delete('/:id') // xóa lịch khám theo id
router.patch('/:id') // sửa lịch theo id




export default router