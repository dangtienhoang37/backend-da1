import express from 'express'

const router = express.Router()



router.get('/doctor/:id') // lấy thông tin của bs theo id
router.get('/specialist/:id') // lấy thông tin của chuyên khoa






export default router