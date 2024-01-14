
# E-Sports News

News website for an e-sports update


## Features

- SignUp
- Login
- Create Post
- Update Post
- Delete Post

## Installation

There are two folders provided for back-end and front-end website.

First, clone this repository 

```bash
  git clone https://github.com/faqihmadani/esports-news.git my-project
  cd my-project
```

### Back End
1. Go to front-end folder

```bash
  cd /back-end
```

2. Install package using npm

```bash
  npm install
```

3. Create MySql database with two table, users and posts.
- Users has id, username, email, password, img columns
- Posts has id, title, description, category, img, date, uid (FK to users id)

4. Go to db.js and set the connection to MySql

```javascript
// db.js
  import mysql from "mysql"

  export const db = mysql.createConnection({
      host: "",
      user: "",
      password: "",
      database: ""
  })
```

5. Run server

```bash
  npm start
```

### Front End
1. Go to front-end folder

```bash
  cd /front-end
```


2. Install package using npm

```bash
  npm install
```

3. Create supase storage for store images. The storage must be named "post-images"

3. Create .env file
Add the following environment variables to your .env file

VITE_BASE_URL
VITE_SUPABASE_URL
VITE_SUPABASE_KEY

4. Run development server
```bash
  npm run dev
```


