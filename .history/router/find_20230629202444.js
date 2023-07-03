import express from 'express'
import { list } from '../controller/index.js'


const router = express.Router()



router.get('/doctor/:id',list.getDoctorById) // lấy thông tin của bs theo id
router.get('/specialist/:id') // lấy thông tin của chuyên khoa
router.get('/doctor') // lấy thông tin của tất cả bác sĩ
router.get('/specialist') // lấy thông tin của tất cả chuyên khoa







export default router