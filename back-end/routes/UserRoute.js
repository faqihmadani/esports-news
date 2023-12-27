import express from "express"
import { ShowUser } from "../controllers/Users.js"

const router = express.Router()

router.get("/", ShowUser)

export default router