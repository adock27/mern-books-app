import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "books",
})


app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json('hi!, this is the backend')
});


// GET 
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

// GET BY ID 
app.get("/books/:id", (req, res) => {
    const q = "SELECT * FROM books WHERE ID = ?"

    const bookId = req.params.id;

    db.query(q,[bookId],  (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});


// POST 
app.post("/books", (req, res) => {
    const q = "INSERT INTO `books` ( `name`, `description`, `cover`, `price`) VALUES (?)";


    const values = [
        req.body.name,
        req.body.description,
        req.body.cover,
        req.body.price
    ];


    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json({'Response':'Correcto'});
    });
});


// UPDATE 
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `name`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

// DELETE 
app.delete("/books/:id", (req, res) => {

    const bookId = req.params.id

    const q = "DELETE FROM books WHERE id = ?";


    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json({'Response':'Correcto'});
    });
});




app.listen(8800, () => {
    console.log('back-end is working! by ander');
})

