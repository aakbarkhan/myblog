const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./DB/db_connect');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));



app.get('/api/blogs', (req, res) => {
  db.query('SELECT * FROM blogs', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching blogs' });
    } else {
      console.log(results)
      res.json(results);
    }
  });
});

app.post('/api/blog', (req, res) => {
  const { title, content } = req.body;
 
  const insertSql = 'INSERT INTO blogs (title, content) VALUES (?, ?)';
  
  db.query(insertSql, [title, content], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the blog' });
    } else {
      console.log(results);
      res.json({ message: 'Blog created successfully', blogId: results.insertId });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
