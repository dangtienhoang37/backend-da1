import express from 'express'
import { list, listController } from '../controller/index.js'


const router = express.Router()



router.get('/doctor/:id',listController.getDoctorById) // lấy thông tin của bs theo id
router.get('/specialist/:id',listController) // lấy thông tin của chuyên khoa
router.get('/doctor') // lấy thông tin của tất cả bác sĩ
router.get('/specialist') // lấy thông tin của tất cả chuyên khoa







export default router