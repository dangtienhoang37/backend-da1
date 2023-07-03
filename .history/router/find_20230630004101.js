import express from 'express'
import { listController} from '../controller/index.js'


const router = express.Router()

router.get('/doctor',listController.getDoctorById) // lấy thông tin của bs theo id
router.get('/specialist',listController.getSpecialistById) // lấy thông tin của chuyên khoa

router.get('/doctors',listController.getAllDoctor) // lấy thông tin của tất cả bác sĩ
router.get('/specialists',listController.getAllSpecialist) // lấy thông tin của tất cả chuyên khoa



export default router