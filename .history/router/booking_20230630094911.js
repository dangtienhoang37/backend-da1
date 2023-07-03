import express from "express";
import middlewareVerifyToken from "../controller/middlewareController.js";
import { bookingController } from "../controller/index.js";


const router = express.Router()

router.post("/booking-appointment",bookingController.bookingAppointment)
router.post("/cancel-appointment")
router.post("/your-appointment")






export default router