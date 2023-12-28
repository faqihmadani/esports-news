import { db } from "../db.js"
import bcrypt from "bcryptjs"

export const Register = (req, res) => {
    // Mengecek apakah user telah ada
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        // Mengecek apakah ada error
        if (err) {
            return res.json(err)
        }

        // Mengecek apakah ditemukan user
        if (data.length) {
            return res.status(409).json("User is exsisted!")
        }

        // Membuat hash untuk password
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        // Query untuk menambah user 
        const q = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
        db.query(q, [req.body.username, req.body.email, hash], (err, data) => {
            if (err) return res.json(err)

            return res.status(200).json("User has been created!")
        })
    })
}

export const Login = () => {

}

export const Logout = () => {

}