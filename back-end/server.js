import express from "express";

import userRoutes from "./routes/UserRoute.js"
import postRoutes from "./routes/PostRoute.js"
import authRoutes from "./routes/AuthRoute.js"

const app = express();

app.use("/api/users", userRoutes)
app.use(postRoutes)
app.use("/api/auth", authRoutes)

app.use(express.json())
app.listen(8800, () => {
    console.log("Connected in port 8800");
})

