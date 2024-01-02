import { db } from "../db.js"

export const getAllPosts = (req, res) => {
    if (req.query.category) {
        const cat = req.query.category
        const q = "SELECT * FROM posts WHERE category = ?"

        db.query(q, [cat], (err, data) => {
            if (err) return res.status(500).json("Error")
            if (data.length < 1) return res.status(404).json("Category is not available")

            return res.status(200).json(data)
        })
    } else {
        const q = "SELECT * FROM posts"

        db.query(q, [], (err, data) => {
            if (err) return res.status(500).json(err)
            if (data.length < 1) return res.status(404).json("Posts not found")

            return res.status(200).json(data)
        })
    }
}

export const getPostById = (req, res) => {
    const q = "SELECT * FROM posts WHERE uid = ?"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length < 1) return res.status(404).json("Post not found")

        return res.status(200).json(data)
    })
}

export const publishPost = (req, res) => {
    const q = "INSERT INTO posts (title, description, category, date, uid) VALUES (?, ?, ?, ?, ?)"

    // Mendapatkan objek Date yang merepresentasikan waktu saat ini
    let currentTime = new Date();

    // Mendapatkan informasi tahun, bulan, dan hari
    let year = currentTime.getFullYear();
    let month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
    let day = currentTime.getDate().toString().padStart(2, '0');

    // Mendapatkan informasi jam, menit, dan detik
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');

    // Format datetime sesuai dengan format MySQL (YYYY-MM-DD HH:MM:SS)
    let mysqlDatetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    db.query(q, [req.body.title, req.body.description, req.body.category, mysqlDatetime, req.body.uid], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json("Post has been published")
    })
}

export const deletePost = (req, res) => {
    const q = "DELETE FROM posts WHERE id = ?"

    db.query(q, [req.body.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json("Post has been deleted")
    })
}

export const updatePost = (req, res) => {
    const q = "UPDATE posts SET title = ?, description = ?, category = ?, date = ? WHERE id = ?"

    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let currentDate = `${day} - ${month} - ${year}`

    db.query(q, [req.body.title, req.body.description, req.body.category, currentDate], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json("Post has beedn updated")
    })
}