import express from "express";
import middlewareVerifyToken from "../controller/middlewareController.js";


const router = express.Router()

router.post("booking-appointment")
router.post("cancel-appointment")





export default router