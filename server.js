const mysql = require('mysql2');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Detfire123!',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Application serving on PORT:${PORT}`);
})