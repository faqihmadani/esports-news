import express from "express"
import { deletePost, getAllPosts, getPostById, updatePost } from "../controllers/Posts.js"

const router = express.Router()

router.get("/", getAllPosts)
router.get("/:id", getPostById)
router.delete("/delete/:id", deletePost)
router.put("/update/id", updatePost)



export default router