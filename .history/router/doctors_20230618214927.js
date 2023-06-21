import express from 'express'

const router = express.Router()


router.get('/',) // lấy ra tất cả lịch khám

router.get('/:id') // lấy lịch theo id

router.post('/insert') // tạo lịch khám (bsi tạo)
router.delete('/:id') // xóa lịch khám theo id



export default router